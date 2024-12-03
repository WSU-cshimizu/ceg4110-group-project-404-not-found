import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../pages/WorkoutVideos.css";
import useFetch from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";

function WorkoutVideos() {
    const [menuVisible, setMenuVisible] = useState(false); // State for menu visibility
    const [exerciseList, setExerciseList] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedExercise, setSelectedExercise] = useState(null);
    const { fetchCsvData } = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        fetchCsvData(
            "/data/Functional_Fitness_Exercise_Database.csv",
            setExerciseList
        );
    }, []);

    const toggleMenu = () => setMenuVisible(!menuVisible);

    const getVideoUrl = (url) => {
        return url.replace("youtu.be", "youtube.com/embed");
    };

    const filteredExercises = exerciseList.filter((exercise) =>
        exercise.exercise.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="workout-videos-page">
            {/* Menu and Account Buttons */}
            <div className="button-container">
                <Button type="menu" onClick={toggleMenu} />
                <Button type="account" />
            </div>

            {/* Sliding Menu */}
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
                            <img src="images/video.png" alt="Workout Videos" />
                            <span>Workout Videos</span>
                        </li>
                        <li onClick={() => navigate("/login")}>
                            <img src="images/log-out.png" alt="Log Out" />
                            <span>Log Out</span>
                        </li>
                    </ul>
                </div>
            )}

            {/* Page Title */}
            <div className="content-container">
                <h1 className="text-center text-2xl mb-2">Workout Videos</h1>

                {/* Search Bar */}
                <SearchBar
                    onChange={(q) => setQuery(q)}
                    placeholder="Search for a workout"
                />

                {/* Exercise List */}
                <div className="exercise-list">
                    {filteredExercises.map((exercise, index) => (
                        <div
                            key={index}
                            className="exercise-item"
                            onClick={() => setSelectedExercise(exercise)}
                        >
                            {exercise.exercise}
                        </div>
                    ))}
                </div>

                {/* Video Player */}
                {selectedExercise && (
                    <div className="video-player">
                        <h2>{selectedExercise.exercise}</h2>
                        <div className="flex items-center justify-center">
                            <iframe
                                src={getVideoUrl(selectedExercise.video_url)}
                                title="Video Demonstration"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WorkoutVideos;
