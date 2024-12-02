import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import "../pages/Routines.css";

function Routines() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [routines, setRoutines] = useState([]); // State for storing routines
    const [query, setQuery] = useState(""); // State for search input
    const navigate = useNavigate();

    useEffect(() => {
        // Mock data for routines (replace with API call if needed)
        const mockRoutines = [
            {
                name: "Leg Tuesday",
                time: "Tuesday 3:00 PM - 5:00 PM",
                exercises: [
                    { name: "Lunges", sets: 4, reps: 10 },
                    { name: "Squats", sets: 3, reps: 12 },
                    { name: "Calf Raises", sets: 4, reps: 15 },
                    { name: "Goblet Squats", sets: 3, reps: 8 },
                    { name: "Lateral Lunge", sets: 4, reps: 12 },
                ],
            },
            {
                name: "Pull Wednesday",
                time: "Wednesday 1:00 PM - 3:00 PM",
                exercises: [
                    { name: "Pull-ups", sets: 3, reps: 10 },
                    { name: "Barbell Rows", sets: 4, reps: 12 },
                    { name: "Bicep Curls", sets: 3, reps: 10 },
                ],
            },
        ];
        setRoutines(mockRoutines);
    }, []);

    const toggleMenu = () => setMenuVisible(!menuVisible);

    const filteredRoutines = routines.filter((routine) =>
        routine.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="routines-page">
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
                        <li onClick={() => navigate("/workout")}>
                            <img src="images/workout.png" alt="Workout" />
                            <span>Routines</span>
                        </li>
                    </ul>
                </div>
            )}

            <h1 className="routines-title">Routines</h1>

            <SearchBar onChange={(q) => setQuery(q)} placeholder="Search routine" />

            <div className="routines-list">
                {filteredRoutines.map((routine, index) => (
                    <div className="routine" key={index}>
                        <div className="routine-header">
                            <h3>{routine.name}</h3>
                            <div className="routine-controls">
                                <button>
                                    <img src="images/edit.png" alt="Edit" />
                                </button>
                                <button>
                                    <img src="images/trash-can.png" alt="Delete" />
                                </button>
                            </div>
                        </div>
                        <div className="routine-exercises">
                            {routine.exercises.map((exercise, index) => (
                                <p key={index}>
                                    <strong>{exercise.name}:</strong> {exercise.sets} sets x{" "}
                                    {exercise.reps} reps
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Routines;
