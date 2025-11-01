import React, { Component } from "react";

class UniversityPortal extends Component {
  render() {
    return (
      <div className="page">
        <h1>University Portal</h1>

        <form>
          <h3>Create Student Record</h3>
          <input type="text" placeholder="Student Name" />
          <input type="text" placeholder="Student ID" />
          <button type="button">Create Record</button>
        </form>

        <form>
          <h3>Upload Degree/IPFS Hash</h3>
          <input type="text" placeholder="Student ID" />
          <input type="text" placeholder="IPFS Hash" />
          <button type="button">Record Degree</button>
        </form>

        <button className="action-btn" type="button">Batch Upload Degrees</button>
      </div>
    );
  }
}

export default UniversityPortal;
