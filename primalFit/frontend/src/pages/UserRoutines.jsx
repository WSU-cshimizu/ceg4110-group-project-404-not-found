import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const controller = require("../Controller");

function UserRoutines() {
    const [query, setQuery] = useState("");
    const [routines, setRoutines] = useState([]);

    //const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const response = await controller.getUser(3);
            console.log(response.routines[0].exercises);
            setRoutines(response.routines);
        };
        fetchUser();
    }, []);

    return (
        <div className="mx-10 my-5">
            <h1 className="text-center col-span-1">Routines</h1>
            {/* Search bar and button */}
            <div className="grid grid-cols-12 gap-1 ">
                <div className="col-span-11">
                    <SearchBar
                        className=""
                        onChange={(q) => setQuery(q)}
                        placeholder="Search Routine"
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Routine
                </button>
            </div>
            {routines.map((routine) => (
                <div className="bg-slate-400 ">
                    <div className="grid grid-cols-12 m-3">
                        <h2 className="text-center align-middle">{routine.name}</h2>
                        <img
                            className="size-10 col-end-12"
                            src="images/trash-can.png"
                            alt="Delete"
                        />
                        <img
                            className="size-10 col-end-14"
                            src="images/edit.png"
                            alt="Edit"
                        />
                    </div>
                    {routine.exercises.map((exercise) => (
                        <p>{exercise.name}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default UserRoutines;
