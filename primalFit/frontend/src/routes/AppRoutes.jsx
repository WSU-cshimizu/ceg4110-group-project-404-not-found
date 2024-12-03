import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import AccountPage from "../pages/AccountPage.jsx";
import DailyNutrition from "../pages/DailyNutrition.jsx";
import FoodPage from "../pages/FoodPage.jsx";
import WorkoutPage from "../pages/WorkoutPage.js";
import Routines from "../pages/Routines.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import WorkoutVideos from "../pages/WorkoutVideos.jsx"; // Import the WorkoutVideos component
import UserRoutines from "../pages/UserRoutines.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/nutrition" element={<DailyNutrition />} />
      <Route path="/new-routines" element={<UserRoutines />} />
      <Route path="/routines" element={<Routines />}/>
      <Route path="/food" element={<FoodPage />} />
      <Route path="/workout-videos" element={<WorkoutVideos />} />
    </Routes>
  );
}

export default AppRoutes;
