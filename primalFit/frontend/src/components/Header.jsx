import React from "react";
import PropTypes from "prop-types";
import Progress_bar from "./Progress_bar";
import "./Header.css";
import { NutritionContext } from "../pages/DailyNutrition"; // Import NutritionContext

function Header({ data }) {
  const caloriesPercentage = Math.round(
    (data.calories / data.caloriesGoal) * 100
  );
  const proteinPercentage = Math.round((data.protein / data.proteinGoal) * 100);
  const carbsPercentage = Math.round((data.carbs / data.carbsGoal) * 100);

  return (
    <div className="Header-row">
      <div className="Header-section">
        <h1>Calories</h1>
        <Progress_bar
          bgcolor="#00CED1"
          progress={data.calories}
          goal={data.caloriesGoal}
          size={150}
          unit="cal"
        />
        <p className="percentage">
          {isFinite(caloriesPercentage) ? caloriesPercentage : 0}%
        </p>
      </div>
      <div className="Header-section">
        <h1>Protein</h1>
        <Progress_bar
          bgcolor="#FD3BD5"
          progress={data.protein}
          goal={data.proteinGoal}
          size={150}
          unit="g"
        />
        <p className="percentage">
          {isFinite(proteinPercentage) ? proteinPercentage : 0}%
        </p>
      </div>
      <div className="Header-section">
        <h1>Carbs</h1>
        <Progress_bar
          bgcolor="#FFAC1C"
          progress={data.carbs}
          goal={data.carbsGoal}
          size={150}
          unit="g"
        />
        <p className="percentage">
          {isFinite(carbsPercentage) ? carbsPercentage : 0}%
        </p>
      </div>
    </div>
  );
}

// Prop validation for the Header component
Header.propTypes = {
  data: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    caloriesGoal: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    proteinGoal: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    carbsGoal: PropTypes.number.isRequired,
  }).isRequired,
};

export default Header;
