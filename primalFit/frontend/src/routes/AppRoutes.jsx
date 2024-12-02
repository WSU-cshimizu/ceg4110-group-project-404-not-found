import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import Daily_Nutrition from "./pages/Daily_Nutrition.jsx";
// import FoodPage from "./pages/FoodPage.jsx"
// import Workout from "./pages/WorkoutPage.js";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/nutrition" element={<Daily_Nutrition/>} />
        <Route path="/routines" element={<div>Routines Page</div>} />
        {/* <Route path="/food-search" element={<FoodPage/>} /> */}
        <Route path="/food-search" element={<div>FoodPage</div>} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
