import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import Daily_Nutrition from "./pages/Daily_Nutrition.jsx";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/nutrition" element={<Daily_Nutrition/>} />
        <Route path="/routines" element={<div>Routines Page</div>} />
        <Route path="/food-search" element={<div>Food Search Page</div>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
