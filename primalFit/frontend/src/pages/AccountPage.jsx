import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Button from "../components/Button"; // Corrected path for Button component
import "../pages/AccountPage.css"; // Corrected path for styles

function AccountPage() {
  const [menuVisible, setMenuVisible] = useState(false); // State to toggle menu visibility
  const [accountData, setAccountData] = useState({
    personalInfo: {
      name: "Mike Cox",
      weight: "150/155 lbs",
      height: "6'4\"",
      birthday: "4/20/1969",
    },
    loginInfo: {
      email: "mikecox@gmail.com",
      password: "Change Password",
    },
  });

  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const navigate = useNavigate(); // Initialize navigation hook

  // Toggle menu visibility
  const toggleMenu = () => setMenuVisible(!menuVisible);

  // Start editing a field
  const handleEditStart = (field, currentValue) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  // Save changes (on Enter key press)
  const handleSave = () => {
    setAccountData((prevData) => {
      const updatedData = { ...prevData };
      if (editingField in updatedData.personalInfo) {
        updatedData.personalInfo[editingField] = tempValue;
      } else if (editingField in updatedData.loginInfo) {
        updatedData.loginInfo[editingField] = tempValue;
      }
      return updatedData;
    });
    setEditingField(null); // Exit editing mode
  };

  // Cancel editing (on Escape key press)
  const handleCancel = () => {
    setEditingField(null); // Exit editing mode without saving
  };

  // Render either input field or text based on editing state
  const renderField = (field, value) =>
    editingField === field ? (
      <input
        type="text"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSave();
          if (e.key === "Escape") handleCancel();
        }}
        autoFocus
      />
    ) : (
      value
    );

  return (
    <div className="account-page">
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

      {/* Menu Button */}
      <Button type="menu" onClick={toggleMenu} /> {/* Toggle menu */}

      <Button type="account" /> {/* Navigate to Account Page */}

      {/* Page Title */}
      <h1 className="account-page-title">Account Info</h1>

      {/* Account Info Sections */}
      <div className="account-info-container">
        {/* Personal Information Section */}
        <div className="account-info-section">
          <h2>Personal Information</h2>
          <div className="account-item">
            <img src="src/images/user.png" alt="User Icon" />
            <span>{renderField("name", accountData.personalInfo.name)}</span>
            <button
              className="edit-button"
              onClick={() => handleEditStart("name", accountData.personalInfo.name)}
            >
              <img src="src/images/edit.png" alt="Edit Icon" />
            </button>
          </div>
          <div className="account-item">
            <img src="src/images/scale.png" alt="Weight Icon" />
            <span>{renderField("weight", accountData.personalInfo.weight)}</span>
            <button
              className="edit-button"
              onClick={() => handleEditStart("weight", accountData.personalInfo.weight)}
            >
              <img src="src/images/edit.png" alt="Edit Icon" />
            </button>
          </div>
          <div className="account-item">
            <img src="src/images/height.png" alt="Height Icon" />
            <span>{renderField("height", accountData.personalInfo.height)}</span>
            <button
              className="edit-button"
              onClick={() => handleEditStart("height", accountData.personalInfo.height)}
            >
              <img src="src/images/edit.png" alt="Edit Icon" />
            </button>
          </div>
          <div className="account-item">
            <img src="src/images/birthday-cake.png" alt="Birthday Icon" />
            <span>{renderField("birthday", accountData.personalInfo.birthday)}</span>
            <button
              className="edit-button"
              onClick={() => handleEditStart("birthday", accountData.personalInfo.birthday)}
            >
              <img src="src/images/edit.png" alt="Edit Icon" />
            </button>
          </div>
        </div>

        {/* Account Login Information Section */}
        <div className="account-info-section">
          <h2>Account Login Information</h2>
          <div className="account-item">
            <img src="src/images/email.png" alt="Email Icon" />
            <span>{renderField("email", accountData.loginInfo.email)}</span>
            <button
              className="edit-button"
              onClick={() => handleEditStart("email", accountData.loginInfo.email)}
            >
              <img src="src/images/edit.png" alt="Edit Icon" />
            </button>
          </div>
          <div className="account-item">
            <img src="src/images/Password.png" alt="Password Icon" />
            <span>{renderField("password", accountData.loginInfo.password)}</span>
            <button
              className="edit-button"
              onClick={() => handleEditStart("password", accountData.loginInfo.password)}
            >
              <img src="src/images/edit.png" alt="Edit Icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
