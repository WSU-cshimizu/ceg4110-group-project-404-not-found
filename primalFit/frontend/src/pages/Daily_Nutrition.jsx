import React from "react";
import Button from "../components/Button"; // Adjusted path for Button component
import "../pages/Daily_Nutrition.css"; // Adjusted path for styles

function DailyNutrition() {
  return (
    <div className="daily-nutrition">
      {/* Navigation Buttons */}
      <Button type="menu" /> {/* Menu Button */}
      <Button type="account" /> {/* Account Button */}
      
      {/* Page Title */}
      <h1 className="nutrition-title">Daily Nutrition</h1>

      {/* Nutrition Sections */}
      <div className="nutrition-sections">
        {/* Breakfast Section */}
        <div className="nutrition-section breakfast">
          <h2>Breakfast</h2>
          <div className="controls">
            <button className="add-button">+</button>
            <button className="delete-button">🗑</button>
          </div>
          <div className="food-items">
            {/* Example Food Items */}
            <div className="food-item">
              <p>Great Value Spaghetti</p>
              <p>Calories: 200 cal</p>
              <p>Proteins: 7 g</p>
              <p>Fats: 4.2 g</p>
              <p>Carbs: 1 g</p>
            </div>
          </div>
          <div className="macros">
            <p>Calories: 130 cal</p>
            <p>Protein: 10 g</p>
            <p>Carbs: 11 g</p>
            <p>Fats: 6 g</p>
          </div>
        </div>

        {/* Lunch Section */}
        <div className="nutrition-section lunch">
          <h2>Lunch</h2>
          <div className="controls">
            <button className="add-button">+</button>
            <button className="delete-button">🗑</button>
          </div>
          <div className="food-items">
            {/* Example Food Items */}
            <div className="food-item">
              <p>Great Value Spaghetti</p>
              <p>Calories: 200 cal</p>
              <p>Proteins: 7 g</p>
              <p>Fats: 4.2 g</p>
              <p>Carbs: 1 g</p>
            </div>
          </div>
          <div className="macros">
            <p>Calories: 200 cal</p>
            <p>Protein: 7 g</p>
            <p>Carbs: 42 g</p>
            <p>Fats: 1 g</p>
          </div>
        </div>

        {/* Dinner Section */}
        <div className="nutrition-section dinner">
          <h2>Dinner</h2>
          <div className="controls">
            <button className="add-button">+</button>
            <button className="delete-button">🗑</button>
          </div>
          <div className="food-items">
            {/* Example Food Items */}
            <div className="food-item">
              <p>Great Value Spaghetti</p>
              <p>Calories: 200 cal</p>
              <p>Proteins: 7 g</p>
              <p>Fats: 4.2 g</p>
              <p>Carbs: 1 g</p>
            </div>
          </div>
          <div className="macros">
            <p>Calories: 0 cal</p>
            <p>Protein: 0 g</p>
            <p>Carbs: 0 g</p>
            <p>Fats: 0 g</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyNutrition;
