import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Blockchain Degree Verification</h2>
      <ul>
        <li><Link to="/">Verifier</Link></li>
        <li><Link to="/student">Student</Link></li>
        <li><Link to="/university">University</Link></li>
        <li><Link to="/hec">HEC Admin</Link></li>
      </ul>
    </nav>
  );
}
