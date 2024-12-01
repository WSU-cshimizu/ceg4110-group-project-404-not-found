import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// Button component renders various buttons (menu, account, and other icons).
function Button({ type, onClick, position }) {
  const navigate = useNavigate(); // Hook for navigation

  // Default styles for buttons
  const buttonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    position: position || "absolute", // Optional custom positioning
  };

  // Define the mapping of button types to their respective icons
  const icons = {
    menu: { src: "src/images/Menu.png", defaultPosition: { left: "10px", top: "20px" } },
    account: { src: "src/images/account.png", defaultPosition: { right: "10px", top: "20px" } },
    user: { src: "src/images/user.png" },
    scale: { src: "src/images/scale.png" },
    height: { src: "src/images/height.png" },
    birthday: { src: "src/images/birthday-cake.png" },
    email: { src: "src/images/email.png" },
    password: { src: "src/images/Password.png" },
  };

  const icon = icons[type];

  // Handle default actions for menu and account buttons
  const handleDefaultAction = () => {
    if (type === "account") navigate("/account"); // Navigates to Account Page
    if (onClick) onClick(); // Call additional onClick handler if provided
  };

  // Determine the button's position and size
  const positionStyle = icon.defaultPosition || {};
  const sizeStyle = { width: "100px", height: "100px" };

  return (
    <button
      onClick={handleDefaultAction}
      style={{
        ...buttonStyle,
        ...positionStyle, // Apply default position for menu and account
      }}
    >
      <img
        src={icon.src}
        style={sizeStyle} // Apply size style for the icon
        alt={`${type} icon`}
      />
    </button>
  );
}

// Prop validation ensures proper types and values
Button.propTypes = {
  type: PropTypes.oneOf([
    "menu",
    "account",
    "user",
    "scale",
    "height",
    "birthday",
    "email",
    "password",
  ]).isRequired,
  onClick: PropTypes.func, // Optional click handler
  position: PropTypes.string, // Optional position override
};

Button.defaultProps = {
  onClick: null, // No action by default
  position: "absolute", // Default to absolute positioning
};

export default Button;
