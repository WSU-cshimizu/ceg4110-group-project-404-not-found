import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Progress_bar from "./Progress_bar"; // Import the reusable Progress_bar component
import "./Header.css"; // Import styles for the Header

// Header component to display the progress bars and their data
function Header({ data }) {
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // useEffect hook to simulate loading delay (e.g., fetching data)
  useEffect(() => {
    // Set a timer for 2 seconds before marking loading as complete
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Display a loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div> {/* Spinner animation */}
        <p className="loading-text">Loading Header...</p> {/* Loading message */}
      </div>
    );
  }

  // Render the progress bars once loading is complete
  return (
    <div className="Header-row">
      {/* Section for Calories */}
      <div className="Header-section">
        <h1>Calories</h1> {/* Title */}
        <Progress_bar
          bgcolor="#00CED1" // Blue color for the bar
          progress={data.calories} // Current calories
          goal={data.caloriesGoal} // Goal for calories
          size={150} // Size of the progress bar
          unit="cal" // Unit for calories
        />
        <p className="percentage">
          {Math.round((data.calories / data.caloriesGoal) * 100)}% {/* Percentage below the bar */}
        </p>
      </div>

      {/* Section for Protein */}
      <div className="Header-section">
        <h1>Protein</h1>
        <Progress_bar
          bgcolor="#FD3BD5" // Pink color for the bar
          progress={data.protein} // Current protein
          goal={data.proteinGoal} // Goal for protein
          size={150}
          unit="g" // Unit for grams
        />
        <p className="percentage">
          {Math.round((data.protein / data.proteinGoal) * 100)}%
        </p>
      </div>

      {/* Section for Carbs */}
      <div className="Header-section">
        <h1>Carbs</h1>
        <Progress_bar
          bgcolor="#FFAC1C" // Orange color for the bar
          progress={data.carbs} // Current carbs
          goal={data.carbsGoal} // Goal for carbs
          size={150}
          unit="g"
        />
        <p className="percentage">
          {Math.round((data.carbs / data.carbsGoal) * 100)}%
        </p>
      </div>
    </div>
  );
}

// Validate the structure of the data prop
Header.propTypes = {
  data: PropTypes.shape({
    calories: PropTypes.number, // Current calories
    caloriesGoal: PropTypes.number, // Goal for calories
    protein: PropTypes.number, // Current protein
    proteinGoal: PropTypes.number, // Goal for protein
    carbs: PropTypes.number, // Current carbs
    carbsGoal: PropTypes.number, // Goal for carbs
  }),
};

export default Header;
