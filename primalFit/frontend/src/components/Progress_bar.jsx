import React from "react";
import PropTypes from "prop-types";

// Progress_bar component to display a circular progress bar
const Progress_bar = ({ bgcolor, progress, goal, size, unit }) => {
  const percentage = (progress / goal) * 100; // Calculate percentage
  const innerCircleSize = size * 0.65; // Inner circle size relative to the bar size

  return (
    <div
      style={{
        width: `${size}px`, // Outer circle width
        height: `${size}px`, // Outer circle height
        position: "relative", // For absolute positioning of inner elements
      }}
    >
      {/* Rotated wrapper for conic-gradient to start from the bottom */}
      <div
        style={{
          width: "100%", // Full width
          height: "100%", // Full height
          borderRadius: "50%", // Circular shape
          background: `conic-gradient(${bgcolor} 0deg, ${bgcolor} ${percentage}%, #e0e0df ${percentage}% 360deg)`, // Gradient for progress
          transform: "rotate(180deg)", // Rotates so the progress starts at the bottom
        }}
      ></div>

      {/* Inner transparent circle to create the hollow effect */}
      <div
        style={{
          width: `${innerCircleSize}px`, // Inner circle width
          height: `${innerCircleSize}px`, // Inner circle height
          borderRadius: "50%", // Keeps it circular
          background: "beige", // Matches the background for transparency
          position: "absolute", // Positioned relative to the outer circle
          top: "50%", // Vertical center
          left: "50%", // Horizontal center
          transform: "translate(-50%, -50%)", // Centers the circle
        }}
      ></div>

      {/* Text inside the circle */}
      <div
        style={{
          position: "absolute", // Positioned within the outer circle
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust position to keep centered
          textAlign: "center", // Center text alignment
          fontSize: "0.9rem", // Font size for text
          lineHeight: "1.2", // Line spacing for better readability
        }}
      >
        {progress} {unit} <br /> of <br /> {goal} {unit} {/* Display progress and goal */}
      </div>
    </div>
  );
};

// Prop validation for the Progress_bar component
Progress_bar.propTypes = {
  bgcolor: PropTypes.string, // Color for the filled portion of the bar
  progress: PropTypes.number, // Current progress value
  goal: PropTypes.number, // Goal value for the bar
  size: PropTypes.number, // Diameter of the circular progress bar
  unit: PropTypes.string, // Unit to display inside the bar (e.g., "cal", "g")
};

// Default values for the Progress_bar component
Progress_bar.defaultProps = {
  bgcolor: "#00CED1", // Default progress bar color
  progress: 0, // Default progress value
  goal: 100, // Default goal value
  size: 100, // Default size of the bar
  unit: "", // Default unit (empty by default)
};

export default Progress_bar;
