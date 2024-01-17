import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoard } from "../components/DashBoard";
import { Landing } from "../components/Landing";

function App() {
  return (
    <div>
      <button onClick={() => (window.location.href = "/")}>Landing Page</button>
      <button onClick={() => (window.location.href = "/dashboard")}>
        DashBoard Page
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
