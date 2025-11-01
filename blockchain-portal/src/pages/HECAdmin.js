import React, { Component } from "react";

class HECAdmin extends Component {
  render() {
    return (
      <div className="page">
        <h1>HEC Admin Panel</h1>

        <form>
          <h3>Register University</h3>
          <input type="text" placeholder="University Name" />
          <input type="text" placeholder="University ID" />
          <button type="button">Register</button>
        </form>

        <button className="action-btn" type="button">Deploy Smart Contracts</button>
        <button className="action-btn" type="button">Update Blockchain Rules</button>
      </div>
    );
  }
}

export default HECAdmin;
