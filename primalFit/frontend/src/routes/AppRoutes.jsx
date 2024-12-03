import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import AccountPage from "../pages/AccountPage.jsx";
import DailyNutrition from "../pages/DailyNutrition.jsx";
import FoodPage from "../pages/FoodPage.jsx";
import WorkoutPage from "../pages/WorkoutPage.js";
import Routines from "../pages/Routines.jsx";
import LoginPage from "../pages/LoginPage.js";
import RegisterPage from "../pages/RegisterPage.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/nutrition" element={<DailyNutrition />} />
      <Route path="/routines" element={<Routines />} />
      <Route path="/food" element={<FoodPage />} />
      <Route path="/workout" element={<WorkoutPage/>}/>
    </Routes>
  );
}

export default AppRoutes;
