import React, { Component } from "react";

const Vendor = (props) => {
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{props.vendor.id}</th>
        <td>{props.vendor.name}</td>
        <td>{props.vendor.activation_date}</td>
        <td>{props.vendor.bill_country}</td>
        <td>{props.vendor.service_email}</td>
        <td>{props.vendor.service_phone}</td>
        <td>{props.vendor.url}</td>
      </tr>
    </React.Fragment>
  );
};

export default Vendor;
