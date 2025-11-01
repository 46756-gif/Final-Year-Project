import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HECAdmin from "./pages/HECAdmin";
import UniversityPortal from "./pages/UniversityPortal";
import StudentPortal from "./pages/StudentPortal";
import VerifierPortal from "./pages/VerifierPortal";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<VerifierPortal />} />
        <Route path="/student" element={<StudentPortal />} />
        <Route path="/university" element={<UniversityPortal />} />
        <Route path="/hec" element={<HECAdmin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
