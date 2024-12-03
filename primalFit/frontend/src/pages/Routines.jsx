import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../pages/Routines.css";
import useFetch from "../hooks/useFetch";

const controller = require("../Controller");

function Routines() {
    const [menuVisible, setMenuVisible] = useState(false); // State for menu visibility
    const [routines, setRoutines] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
    }); // Routines categorized by day
    const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility
    const [currentDay, setCurrentDay] = useState(""); // Day for which routine is being added
    const [exerciseQuery, setExerciseQuery] = useState(""); // Search query for exercises
    const [exerciseList, setExerciseList] = useState([]); // List of exercises from the database
    const [selectedExercise, setSelectedExercise] = useState({}); // Selected exercise
    const [sets, setSets] = useState(""); // Sets for the exercise
    const [reps, setReps] = useState(""); // Reps for the exercise
    const [routineName, setRoutineName] = useState("");
    const navigate = useNavigate();

    const { fetchCsvData } = useFetch();

    useEffect(() => {
        fetchCsvData(
            "/data/Functional_Fitness_Exercise_Database.csv",
            setExerciseList
        );
    }, []);

    const toggleMenu = () => setMenuVisible(!menuVisible);

    // Open the popup to add a routine
    const openPopup = (day) => {
        setCurrentDay(day);
        setShowPopup(true);
    };

    // Close the popup
    const closePopup = () => {
        setShowPopup(false);
        setExerciseQuery("");
        setSelectedExercise({});
        setSets("");
        setReps("");
    };

    // Add a new routine to the specified day
    const addRoutine = () => {
        if (!selectedExercise || !sets || !reps) return; // Ensure all fields are filled
        const newRoutine = {
            name: selectedExercise.exercise,
            sets: parseInt(sets),
            reps: parseInt(reps),
        };

        setRoutines((prev) => ({
            ...prev,
            [currentDay]: [...prev[currentDay], newRoutine],
        }));

        closePopup();
    };

    // Delete a routine
    const deleteRoutine = (day, index) => {
        setRoutines((prev) => ({
            ...prev,
            [day]: prev[day].filter((_, i) => i !== index),
        }));
    };

    // Filter exercises based on the query
    const filteredExercises = exerciseList.filter((exr) =>
        exr.exercise.toLowerCase().includes(exerciseQuery.toLowerCase())
    );

    const postRoutine = async (routine) => {
        if (!routineName) return;
        const response = await controller.createRoutine(3, routineName);
        console.log(response);
    };

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
                        <li onClick={() => navigate("/routines")}>
                            <img src="images/workout.png" alt="Workout" />
                            <span>Routines</span>
                        </li>
                        <li onClick={() => navigate("/workout-videos")}>
                            <img src="images/video.png" alt="Video" />
                            <span>Workout Video</span>
                        </li>
                        <li onClick={() => navigate("/login")}>
                            <img src="images/log-out.png" alt="Log Out" />
                            <span>Log Out</span>
                        </li>
                    </ul>
                </div>
            )}

            <h1 className="routines-title">Routines</h1>

            {/* Render sections for each day */}
            {Object.keys(routines).map((day) => (
                <div className="day-section" key={day}>
                    <div className="day-header">
                        <h2>{day}</h2>
                        <button className="add-button" onClick={() => openPopup(day)}>
                            <img src="images/plus.png" alt="Add Routine" />
                        </button>
                    </div>
                    <div className="routines-list">
                        {routines[day].length > 0 ? (
                            routines[day].map((routine, index) => (
                                <div className="routine" key={index}>
                                    <p>
                                        <strong>{routine.name}:</strong> {routine.sets} sets x{" "}
                                        {routine.reps} reps
                                    </p>
                                    <button
                                        className="delete-button"
                                        onClick={() => deleteRoutine(day, index)}
                                    >
                                        <img src="images/trash-can.png" alt="Delete" />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="no-routines">No routines for {day}</p>
                        )}
                    </div>
                </div>
            ))}

            {/* Popup for adding a new routine */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Add Exercise for {currentDay}</h3>
                        <input
                            type="text"
                            placeholder="Search exercise"
                            value={exerciseQuery}
                            onChange={(e) => setExerciseQuery(e.target.value)}
                        />
                        <div className="exercise-list">
                            {filteredExercises.map((exercise, index) => (
                                <p
                                    key={index}
                                    className="exercise-item"
                                    onClick={() => setSelectedExercise(exercise)}
                                >
                                    {exercise.exercise}
                                </p>
                            ))}
                        </div>
                        {selectedExercise && (
                            <div className="sets-reps">
                                <p>Selected Exercise: {selectedExercise.exercise}</p>
                                <input
                                    type="number"
                                    placeholder="Sets"
                                    value={sets}
                                    onChange={(e) => setSets(e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Reps"
                                    value={reps}
                                    onChange={(e) => setReps(e.target.value)}
                                />
                            </div>
                        )}
                        <div className="popup-controls">
                            <button onClick={addRoutine}>Add</button>
                            <button onClick={closePopup}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="text-center">
                <input
                    className="mr-2"
                    placeholder="Enter routine name"
                    onChange={(e) => setRoutineName(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={postRoutine}
                >
                    Submit Routine
                </button>
            </div>
        </div>
    );
}

export default Routines;
