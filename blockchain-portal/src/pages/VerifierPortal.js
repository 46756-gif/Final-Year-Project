import React, { Component } from "react";

class VerifierPortal extends Component {
  render() {
    return (
      <div className="page">
        <h1>Employer / Verifier</h1>

        <form>
          <h3>Verify Degree</h3>
          <input type="text" placeholder="Degree / Credential ID" />
          <button type="button">Verify</button>
        </form>

        <h4>Upload Degree File</h4>
        <input type="file" />
        <button type="button">Upload & Verify</button>
      </div>
    );
  }
}

export default VerifierPortal;
