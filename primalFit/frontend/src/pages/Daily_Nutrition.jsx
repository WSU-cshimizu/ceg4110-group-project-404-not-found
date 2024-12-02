import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../pages/Daily_Nutrition.css";

// Create a context for nutrition totals
export const NutritionContext = createContext();

function DailyNutrition() {
  const [menuVisible, setMenuVisible] = useState(false); // State for menu visibility
  const [mealData, setMealData] = useState({}); // Data for meals
  const [showTrashCans, setShowTrashCans] = useState({}); // State for toggling trash cans
  const [overallCalories, setOverallCalories] = useState(0); // Total calories
  const [overallProtein, setOverallProtein] = useState(0); // Total protein
  const [overallCarbs, setOverallCarbs] = useState(0); // Total carbs
  const navigate = useNavigate();

  // Mock data to simulate backend API response
  useEffect(() => {
    const mockResponse = {
      foods: [
        { name: "Eggs", mealType: "Breakfast", calories: 150, proteins: 12, carbs: 1, fats: 10 },
        { name: "Toast", mealType: "Breakfast", calories: 120, proteins: 4, carbs: 20, fats: 2 },
        { name: "Chicken Salad", mealType: "Lunch", calories: 350, proteins: 30, carbs: 15, fats: 15 },
        { name: "Steak", mealType: "Dinner", calories: 400, proteins: 35, carbs: 5, fats: 25 },
        { name: "Mashed Potatoes", mealType: "Dinner", calories: 200, proteins: 5, carbs: 30, fats: 5 },
      ],
    };

    const groupedData = mockResponse.foods.reduce((acc, food) => {
      acc[food.mealType] = acc[food.mealType] || [];
      acc[food.mealType].push(food);
      return acc;
    }, {});

    setMealData(groupedData);

    // Initialize trash can visibility
    const initialTrashCanState = Object.keys(groupedData).reduce((acc, meal) => {
      acc[meal] = false;
      return acc;
    }, {});
    setShowTrashCans(initialTrashCanState);

    // Calculate overall totals
    const totalCalories = mockResponse.foods.reduce((sum, item) => sum + item.calories, 0);
    const totalProteins = mockResponse.foods.reduce((sum, item) => sum + item.proteins, 0);
    const totalCarbs = mockResponse.foods.reduce((sum, item) => sum + item.carbs, 0);

    setOverallCalories(totalCalories);
    setOverallProtein(totalProteins);
    setOverallCarbs(totalCarbs);
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => setMenuVisible(!menuVisible);

  // Toggle trash cans for a specific meal
  const toggleTrashCans = (meal) => {
    setShowTrashCans((prevState) => ({
      ...prevState,
      [meal]: !prevState[meal],
    }));
  };

  // Redirect to food search page
  const handleAddButtonClick = (meal) => {
    navigate(`/food-search?meal=${meal}`);
  };

  return (
    <NutritionContext.Provider value={{ overallCalories, overallProtein, overallCarbs }}>
      <div className="daily-nutrition">
        <Button type="menu" onClick={toggleMenu} />
        <Button type="account" />

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
              <li onClick={() => navigate("/routines")}>
                <img src="src/images/workout.png" alt="Routines" />
                <span>Routines</span>
              </li>
              <li onClick={() => navigate("/food-search")}>
                <img src="src/images/search.png" alt="Food Search" />
                <span>Food Search</span>
              </li>
            </ul>
          </div>
        )}

        <h1 className="nutrition-title">Daily Nutrition</h1>

        <div className="nutrition-sections">
          {["Breakfast", "Lunch", "Dinner"].map((meal) => {
            const foodItems = mealData[meal] || [];
            const totalCalories = foodItems.reduce((sum, item) => sum + item.calories, 0);
            const totalProteins = foodItems.reduce((sum, item) => sum + item.proteins, 0);
            const totalCarbs = foodItems.reduce((sum, item) => sum + item.carbs, 0);
            const totalFats = foodItems.reduce((sum, item) => sum + item.fats, 0);

            return (
              <div className={`nutrition-section ${meal.toLowerCase()}`} key={meal}>
                <h2>{meal}</h2>
                <div className="controls">
                  <button className="add-button" onClick={() => handleAddButtonClick(meal)}>
                    <img src="src/images/plus.png" alt="Add" />
                  </button>
                  <button className="delete-button" onClick={() => toggleTrashCans(meal)}>
                    <img src="src/images/trash-can.png" alt="Toggle Trash Cans" />
                  </button>
                </div>
                <div className="food-items">
                  {foodItems.length > 0 ? (
                    foodItems.map((food, index) => (
                      <div className="food-item" key={index}>
                        <div className="food-details">
                          <p>{food.name}</p>
                          <p>Calories: {food.calories} cal</p>
                          <p>Proteins: {food.proteins} g</p>
                          <p>Fats: {food.fats} g</p>
                          <p>Carbs: {food.carbs} g</p>
                        </div>
                        {showTrashCans[meal] && (
                          <button className="food-delete-button">
                            <img src="src/images/trash-can.png" alt="Delete" />
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="no-food-logged">No food logged yet</p>
                  )}
                </div>
                <div className="macros">
                  <table>
                    <thead>
                      <tr>
                        <th>Calories</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Fats</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{totalCalories} cal</td>
                        <td>{totalProteins} g</td>
                        <td>{totalCarbs} g</td>
                        <td>{totalFats} g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </NutritionContext.Provider>
  );
}

export default DailyNutrition;
