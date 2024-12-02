import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import AccountPage from "../pages/AccountPage.jsx";
import DailyNutrition from "../pages/DailyNutrition.jsx";
import FoodPage from "../pages/FoodPage.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/nutrition" element={<DailyNutrition />} />
      <Route path="/routines" element={<div>Routines Page</div>} />
      <Route path="/food" element={<FoodPage />} />
    </Routes>
  );
}

export default AppRoutes;
