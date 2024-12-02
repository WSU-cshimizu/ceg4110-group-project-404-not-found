import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import "../pages/Dashboard.css";

const controller = require("../Controller");

function Dashboard() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [foodLog, setFoodLog] = useState([]); // Food log data
  const [workoutHistory, setWorkoutHistory] = useState([]); // Workout history data
  const [totalCalories, setTotalCalories] = useState(0); // Total calories
  const [totalProteins, setTotalProteins] = useState(0); // Total proteins
  const [totalCarbs, setTotalCarbs] = useState(0); // Total carbs
  const [goals, setGoals] = useState({}); // Goals data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await controller.login("test3@test3.com", "password3");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid content type received, expected JSON");
        }

        const data = await response.json();

        // Parse and set food log
        const parsedFoodLog = data.eatenFood.map((food) => ({
          name: food.name,
          mealType: food.mealType,
          calories: food.calories,
          proteins: food.proteins,
          carbs: food.carbohydrates,
        }));
        setFoodLog(parsedFoodLog);

        // Parse and set workout history
        const parsedWorkoutHistory = data.routines.map(
          (routine) => `${routine.day}: ${routine.name}`
        );
        setWorkoutHistory(parsedWorkoutHistory);

        // Parse and set user goals
        setGoals({
          calorieGoal: data.calorieGoal,
          proteinGoal: data.proteinGoal,
          carbohydrateGoal: data.carbohydrateGoal,
        });

        // Calculate total macros
        const totalCalories = parsedFoodLog.reduce(
          (sum, item) => sum + item.calories,
          0
        );
        const totalProteins = parsedFoodLog.reduce(
          (sum, item) => sum + item.proteins,
          0
        );
        const totalCarbs = parsedFoodLog.reduce(
          (sum, item) => sum + item.carbs,
          0
        );

        setTotalCalories(totalCalories);
        setTotalProteins(totalProteins);
        setTotalCarbs(totalCarbs);
      } catch (err) {
        console.error("Failed to fetch user data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="dashboard">
      {/* Menu buttons */}
      <Button type="menu" onClick={toggleMenu} />
      <Button type="account" />

      {menuVisible && (
        <div className="menu">
          <button className="menu-close" onClick={toggleMenu}>
            <img src="images/Menu.png" alt="Close Menu" />
          </button>
          <ul>
            <li onClick={() => navigate("/")}>
              <img src="images/data-analysis.png" alt="Dashboard" />
              <span>Dashboard</span>
            </li>
            <li onClick={() => navigate("/nutrition")}>
              <img src="images/apple.png" alt="Nutrition" />
              <span>Nutrition</span>
            </li>
            <li>
              <img src="images/workout.png" alt="Routines" />
              <span>Routines</span>
            </li>
            <li>
              <img src="images/search.png" alt="Food Search" />
              <span>Food Search</span>
            </li>
          </ul>
        </div>
      )}

      {/* Header Section */}
      <Header
        data={{
          calories: totalCalories,
          caloriesGoal: goals.calorieGoal || 2500,
          protein: totalProteins,
          proteinGoal: goals.proteinGoal || 125,
          carbs: totalCarbs,
          carbsGoal: goals.carbohydrateGoal || 300,
        }}
      />

      {/* Main Page Content */}
      <div className="main-page-container">
        {/* History Section */}
        <div className="section History">
          <h2>History</h2>
          <div className="history-subsections">
            {/* Food History */}
            <div className="subsection Food">
              <h3>Food</h3>
              <ul>
                {foodLog.map((item, index) => (
                  <li key={index}>{`${item.mealType}: ${item.name}`}</li>
                ))}
              </ul>
            </div>

            {/* Workout History */}
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
            {workoutHistory.map((workout, index) => (
              <div key={index} className="workout-item">
                <p>{workout}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Log Foods Section */}
        <div className="logger"></div>
        <div className="section Log-Foods">
          <h2>Log Foods</h2>
          {["Breakfast", "Lunch", "Dinner"].map((mealType) => {
            const filteredFoods = foodLog.filter(
              (item) => item.mealType === mealType
            );
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
