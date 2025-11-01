import React, { Component } from "react";

class StudentPortal extends Component {
  render() {
    return (
      <div className="page">
        <h1>Student Portal</h1>

        <form>
          <h3>Download My Digital Degree</h3>
          <input type="text" placeholder="Student ID" />
          <button type="button">Download Degree</button>
        </form>

        <form>
          <h3>Generate Shareable QR Code</h3>
          <input type="text" placeholder="Student ID" />
          <button type="button">Generate</button>
        </form>
      </div>
    );
  }
}

export default StudentPortal;
