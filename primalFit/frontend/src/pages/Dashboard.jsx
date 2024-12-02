import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import "../pages/Dashboard.css";

function Dashboard() {
  const [menuVisible, setMenuVisible] = useState(false); // State for toggling the sliding menu
  const [foodLog, setFoodLog] = useState([]); // Food log data for the Log Foods section
  const [workoutHistory, setWorkoutHistory] = useState([]); // Workout history data for History subsection
  const [workoutLog, setWorkoutLog] = useState([]); // Detailed workout log for Workouts section
  const navigate = useNavigate();

  // Total macros (calories, proteins, carbs) for Header
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalProteins, setTotalProteins] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);

  useEffect(() => {
    // Mock food data similar to API response
    const mockFoodResponse = {
      foods: [
        { name: "Eggs", mealType: "Breakfast", calories: 150, proteins: 12, carbs: 1 },
        { name: "Toast", mealType: "Breakfast", calories: 120, proteins: 4, carbs: 20 },
        { name: "Grilled Chicken", mealType: "Lunch", calories: 350, proteins: 30, carbs: 15 },
        { name: "Rice", mealType: "Lunch", calories: 200, proteins: 5, carbs: 40 },
        { name: "Steak", mealType: "Dinner", calories: 400, proteins: 35, carbs: 5 },
        { name: "Mashed Potatoes", mealType: "Dinner", calories: 200, proteins: 5, carbs: 30 },
      ],
    };

    // Mock workout history similar to API response
    const mockWorkoutHistory = [
      "Monday: Chest and Triceps",
      "Wednesday: Back and Biceps",
      "Friday: Legs",
    ];

    // Mock detailed workout log for Workouts section
    const mockWorkoutLog = [
      { name: "Leg Day", day: "Tuesday" },
      { name: "Pull Day", day: "Wednesday" },
      { name: "Push Day", day: "Friday" },
    ];

    // Set state with mock data
    setFoodLog(mockFoodResponse.foods);
    setWorkoutHistory(mockWorkoutHistory);
    setWorkoutLog(mockWorkoutLog);

    // Calculate total macros for Header
    const totalCalories = mockFoodResponse.foods.reduce((sum, item) => sum + item.calories, 0);
    const totalProteins = mockFoodResponse.foods.reduce((sum, item) => sum + item.proteins, 0);
    const totalCarbs = mockFoodResponse.foods.reduce((sum, item) => sum + item.carbs, 0);

    // Update state for total macros
    setTotalCalories(totalCalories);
    setTotalProteins(totalProteins);
    setTotalCarbs(totalCarbs);
  }, []);

  // Toggle the sliding menu
  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <div className="dashboard">
      {/* Buttons for menu and account navigation */}
      <Button type="menu" onClick={toggleMenu} />
      <Button type="account" />

      {/* Sliding Menu */}
      {menuVisible && (
        <div className="menu">
          <button className="menu-close" onClick={toggleMenu}>
            <img src="src/images/Menu.png" alt="Close Menu" />
          </button>
          <ul>
            <li onClick={() => navigate("/")}>
              <img src="src/images/data-analysis.png" alt="Dashboard" />
              <span>Dashboard</span>
            </li>
            <li onClick={() => navigate("/nutrition")}>
              <img src="src/images/apple.png" alt="Nutrition" />
              <span>Nutrition</span>
            </li>
            <li>
              <img src="src/images/workout.png" alt="Routines" />
              <span>Routines</span>
            </li>
            <li>
              <img src="src/images/search.png" alt="Food Search" />
              <span>Food Search</span>
            </li>
          </ul>
        </div>
      )}

      {/* Header Section */}
      <div>
        <Header
          data={{
            calories: totalCalories,
            caloriesGoal: 2500,
            protein: totalProteins,
            proteinGoal: 125,
            carbs: totalCarbs,
            carbsGoal: 300,
          }}
        />
      </div>

      {/* Main Page Content */}
      <div className="main-page-container">
        {/* History Section */}
        <div className="section History">
          <h2>History</h2>
          <div className="history-subsections">
            {/* Food History Subsection */}
            <div className="subsection Food">
              <h3>Food</h3>
              <ul>
                {foodLog.map((item, index) => (
                  <li key={index}>{`${item.mealType}: ${item.name}`}</li>
                ))}
              </ul>
            </div>
            {/* Workout History Subsection */}
            <div className="subsection Workout">
              <h3>Workout</h3>
              <ul>
                {workoutHistory.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Workouts Section */}
        <div className="logger"></div>
        <div className="section Workouts">
          <h2>Workouts</h2>
          <div className="workout-list">
            {workoutLog.map((workout, index) => (
              <div key={index} className="workout-item">
                <p>
                  <strong>{workout.name}:</strong> {workout.day}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Log Foods Section */}
        <div className="logger"></div>
        <div className="section Log-Foods">
          <h2>Log Foods</h2>
          {["Breakfast", "Lunch", "Dinner"].map((mealType) => {
            const filteredFoods = foodLog.filter((item) => item.mealType === mealType);
            return (
              <div key={mealType}>
                <h3>{mealType}</h3>
                <ul>
                  {filteredFoods.map((food, index) => (
                    <li key={index}>
                      <strong>{food.name}</strong>
                      <p>Calories: {food.calories} cal</p>
                      <p>Proteins: {food.proteins} g</p>
                      <p>Carbs: {food.carbs} g</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
