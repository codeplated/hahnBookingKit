import React, { Component } from "react";
import Vendor from "./components/vendor";
class App extends Component {
  state = { vendors: [] };

  componentDidMount() {
    console.log("component did mount");
    fetch("http://127.0.0.1:5000/getVendors")
      .then((res) => res.json())
      .then((data) => this.setState({ vendors: data }))
      .catch(console.log);
    console.log(this.state.vendors);
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center m-2">list of vendors</h1>
        <br />
        <main className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">date</th>
                <th scope="col">country</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">url</th>
              </tr>
            </thead>
            <tbody>
              {this.state.vendors.map((vendor) => (
                <Vendor key={vendor.id} vendor={vendor} />
              ))}
            </tbody>
          </table>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
