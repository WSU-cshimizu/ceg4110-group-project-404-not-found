import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Header from "../components/Header"; // Adjusted path for Header component
import Button from "../components/Button"; // Adjusted path for Button component
import "../pages/Dashboard.css"; // Adjusted path for Dashboard styles

function Dashboard() {
  const [menuVisible, setMenuVisible] = useState(false); // State to toggle menu visibility
  const navigate = useNavigate(); // Initialize navigation hook

  // Header data to display progress in the header
  const HeaderData = {
    calories: 500,
    caloriesGoal: 2500,
    protein: 100,
    proteinGoal: 125,
    carbs: 30,
    carbsGoal: 300,
  };

  // Workout data to display in the Workouts section
  const WorkoutData = [
    { name: "Leg", day: "Tuesday", time: "3:00 - 5:00 PM" },
    { name: "Pull", day: "Wednesday", time: "3:00 - 5:00 PM" },
    { name: "Tri", day: "Saturday", time: "3:00 - 5:00 PM" },
  ];

  // State for History section lists
  const [foodHistory, setFoodHistory] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState([]);

  // State for dynamic food lists
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [dinnerItems, setDinnerItems] = useState([]);
  const [lunchItems, setLunchItems] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchedHistoryData = {
      food: ["Breakfast: Eggs and Toast", "Lunch: Grilled Chicken Salad", "Dinner: Salmon and Rice"],
      workouts: ["Monday: Chest and Triceps", "Wednesday: Back and Biceps", "Friday: Legs"],
    };

    const fetchedFoodData = {
      breakfast: ["Eggs", "Toast", "Orange Juice"],
      dinner: ["Grilled Chicken", "Rice", "Salad"],
      supper: ["Soup", "Bread"],
    };

    setFoodHistory(fetchedHistoryData.food);
    setWorkoutHistory(fetchedHistoryData.workouts);
    setBreakfastItems(fetchedFoodData.breakfast);
    setDinnerItems(fetchedFoodData.dinner);
    setLunchItems(fetchedFoodData.supper);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="dashboard">
      <Button type="menu" onClick={toggleMenu} /> {/* Opens the menu */}
      <Button type="account" /> {/* Navigate to the Account Page */}

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

      <div>
        <Header data={HeaderData} />
      </div>

      <div className="main-page-container">
        <div className="section History">
          <h2>History</h2>
          <div className="history-subsections">
            <div className="subsection Food">
              <h3>Food</h3>
              <ul>
                {foodHistory.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
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

        <div className="logger"></div>

        <div className="section Workouts">
          <h2>Workouts</h2>
          <div className="workout-list">
            {WorkoutData.map((workout, index) => (
              <div key={index} className="workout-item">
                <p>
                  <strong>{workout.name}:</strong> {workout.day} {workout.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="logger"></div>

        <div className="section Log-Foods">
          <h2>Log Foods</h2>

          <h3>Breakfast</h3>
          <ul>
            {breakfastItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Lunch</h3>
          <ul>
            {lunchItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Dinner</h3>
          <ul>
            {dinnerItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="logger"></div>
      </div>
    </div>
  );
}

export default Dashboard;
