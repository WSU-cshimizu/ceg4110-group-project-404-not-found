import React, { useState } from "react";
import PrimalFitImg from "../images/component/PrimalFitImg";
import { useNavigate } from "react-router-dom";

const controller = require("../Controller");

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginUser = async () => {
        if (email && password) {
            console.log(email, password);
            const response = await controller.login(email, password);
            if (response.ok) {
                console.log("success");
                navigate("/");
            } else {
                console.error("Wrong username or Password");
            }
        } else {
            console.error("Missing email or password");
        }
    };

    return (
        <div
            className={
                "bg-[url('/src/images/BackgroundImage.png')] bg-cover bg-center h-screen flex items-center justify-center"
            }
        >
            <div className="">
                <div className={"font-bold font-lg flex justify-center"}>
                    <PrimalFitImg />
                </div>
                <div class="max-w-sm p-6 bg-[#FFE4B6] border-8 border-borderColor rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="text-center text-3xl">Login Page</div>
                    <div class="p-8">
                        <div class="mb-4 flex gap-2 items-center border-b-4 border-borderColorBottom">
                            <label class="block text-gray-700 text-sm font-bold" for="email">
                                Email:
                            </label>
                            <input
                                class="bg-[#FFE4B6] text-black appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div class="mb-6 flex gap-2 items-center border-b-4 border-borderColorBottom">
                            <label
                                class="block text-gray-700 text-sm font-bold"
                                for="password"
                            >
                                Password:
                            </label>
                            <input
                                class="bg-[#FFE4B6] text-black appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div class="flex items-center justify-center">
                            <button
                                class="bg-[#494F5554] hover:bg-[#616b7554] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={loginUser}
                            >
                                Login
                            </button>
                        </div>
                        <div class="text-center mt-4">
                            <div>
                                <a class="text-blue-500 hover:underline" href="/register">
                                    Don't have an Account?
                                </a>
                            </div>
                            <div>
                                <a class="text-blue-500 hover:underline" href="#">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
