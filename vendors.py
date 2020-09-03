import flask, requests, json
from flask import make_response 

app = flask.Flask(__name__)

@app.route('/getVendors', methods=['GET'])
def getListOfVendors():
    token_url = "https://api-sandbox.bookingkit.de/oauth/token"
    test_api_url = "https://api-sandbox.bookingkit.de/v3/vendors/"
    client_id = 'GLS1KEik'
    client_secret = '4SSju8wtbdqxBYsd5fFnE1DBJj1Xxz4s'
    data = {'grant_type': 'client_credentials'}
    
    try:
        access_token_response = requests.post(token_url, data=data, verify=False, allow_redirects=False, auth=(client_id, client_secret))
        print (access_token_response.headers)
        print (access_token_response.text) 
        tokens = json.loads(access_token_response.text)
        print ("access token: " + tokens['access_token'])
        api_call_headers = {'Authorization': 'Bearer ' + tokens['access_token']}
        api_call_response = requests.get(test_api_url, headers=api_call_headers, verify=False)
        print (api_call_response.text)
        res = make_response(api_call_response.text, 200)
        res.headers.add('Access-Control-Allow-Origin', '*')
        return res   
    except requests.exceptions.RequestException as e:
        raise SystemExit(e)
        res = make_response("internal server issue", 500)
        res.headers.add('Access-Control-Allow-Origin', '*')
        return res   
    

if __name__ == "__main__":
    app.run(debug=True)