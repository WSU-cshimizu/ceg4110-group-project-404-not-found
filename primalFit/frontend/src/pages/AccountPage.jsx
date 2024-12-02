import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button"; // Adjusted path for Button component
import "../pages/AccountPage.css"; // Adjusted path for styles

const controller = require("../Controller");

function AccountPage() {
  const [menuVisible, setMenuVisible] = useState(false); // State to toggle menu visibility
  const [accountData, setAccountData] = useState(null); // State to hold account data
  const [editingField, setEditingField] = useState(null); // Currently editing field
  const [tempValue, setTempValue] = useState(""); // Temporary value for field editing
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Navigation hook

  // Fetch user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await controller.login("test3@test3.com", "password3");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
  
        // Check if the content type is JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid content type received, expected JSON");
        }
  
  
        // Map response data
        const mappedData = {
          personalInfo: {
            name: response.name,
            weight: `${response.weight} lbs / ${response.weightGoal} lbs`,
            height: `${Math.floor(response.height)}'${Math.round((response.height % 1) * 12)}"`,
            birthday: response.birthdate,
          },
          loginInfo: {
            email: response.email,
            password: "Change Password",
          },
        };
  
        setAccountData(mappedData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch user data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);
  

  // Toggle menu visibility
  const toggleMenu = () => setMenuVisible(!menuVisible);

  // Start editing a field
  const handleEditStart = (field, currentValue) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  // Save changes and send them to the backend
  const handleSave = async () => {
    if (!editingField) return;

    try {
      const updatedAccountData = { ...accountData };
      if (editingField in updatedAccountData.personalInfo) {
        updatedAccountData.personalInfo[editingField] = tempValue;
      } else if (editingField in updatedAccountData.loginInfo) {
        updatedAccountData.loginInfo[editingField] = tempValue;
      }

      // Prepare payload for the backend
      const payload = {
        [editingField]: tempValue,
      };

      const response = await fetch("/api/users/123", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save changes");

      setAccountData(updatedAccountData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setEditingField(null);
    }
  };

  // Cancel editing
  const handleCancel = () => setEditingField(null);

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

  const getIconPath = (field) => {
    const iconPaths = {
      name: "images/user.png",
      weight: "images/scale.png",
      height: "images/height.png",
      birthday: "images/birthday-cake.png",
      email: "/images/email.png",
      password: "/images/password.png",
    };

    return iconPaths[field] || "src/images/default.png"; // Fallback to default icon
  };

  if (loading) return <p>Loading account data...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="account-page">
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

      <Button type="menu" onClick={toggleMenu} />
      <Button type="account" />

      <h1 className="account-page-title">Account Info</h1>

      <div className="account-info-container">
        <div className="account-info-section">
          <h2>Personal Information</h2>
          {Object.entries(accountData.personalInfo).map(([field, value]) => (
            <div className="account-item" key={field}>
              <img src={getIconPath(field)} alt={`${field} Icon`} />
              <span>{renderField(field, value)}</span>
              <button
                className="edit-button"
                onClick={() => handleEditStart(field, value)}
              >
                <img src="src/images/edit.png" alt="Edit Icon" />
              </button>
            </div>
          ))}
        </div>

        <div className="account-info-section">
          <h2>Account Login Information</h2>
          {Object.entries(accountData.loginInfo).map(([field, value]) => (
            <div className="account-item" key={field}>
              <img src={getIconPath(field)} alt={`${field} Icon`} />
              <span>{renderField(field, value)}</span>
              <button
                className="edit-button"
                onClick={() => handleEditStart(field, value)}
              >
                <img src="src/images/edit.png" alt="Edit Icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
