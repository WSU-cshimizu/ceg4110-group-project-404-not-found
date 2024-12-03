import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // For extended matchers
import FoodTable from "./FoodTable";
import * as controller from "../_mocks_/Controller"; 

jest.mock("../Controller.jsx");

describe("FoodTable Component", () => {
    const foodList = [
        { food: "Apple", calories: 95, protein: 0.5, fat: 0.3, carbs: 25, category: "Fruit" },
        { food: "Chicken", calories: 165, protein: 31, fat: 3.6, carbs: 0, category: "Meat" },
    ];

    beforeEach(() => {
        jest.clearAllMocks(); // Reset mocks before each test
    });

    test("renders table with food items", () => {
        render(<FoodTable foodList={foodList} mealType="lunch" />);

        expect(screen.getByText("Apple")).toBeInTheDocument();
        expect(screen.getByText("Chicken")).toBeInTheDocument();
        expect(screen.getByText("Fruit")).toBeInTheDocument();
        expect(screen.getByText("Meat")).toBeInTheDocument();
    });

    test("calls addFoodToUser on button click", async () => {
        const mockLogin = controller.login.mockResolvedValue({ id: 1 });
        const mockAddFood = controller.addFood.mockResolvedValue({ success: true });

        render(<FoodTable foodList={foodList} mealType="lunch" />);

        const addButton = screen.getAllByRole("button")[0]; // Select the first button
        fireEvent.click(addButton);

        expect(mockLogin).toHaveBeenCalledWith("test3@test3.com", "password3");
        expect(mockAddFood).toHaveBeenCalledWith(
            1,
            "Apple",
            95,
            0.5,
            25,
            0.3,
            "lunch"
        );
    });

    test("displays success message after adding food", async () => {
        controller.login.mockResolvedValue({ id: 1 });
        controller.addFood.mockResolvedValue({ success: true });

        render(<FoodTable foodList={foodList} mealType="lunch" />);

        const addButton = screen.getAllByRole("button")[0];
        fireEvent.click(addButton);

        const successMessage = await screen.findByText("Food Apple added to user successfully");
        expect(successMessage).toBeInTheDocument();
    });

    test("displays error message on failure", async () => {
        controller.login.mockResolvedValue({ id: 1 });
        controller.addFood.mockRejectedValue(new Error("Network error"));

        render(<FoodTable foodList={foodList} mealType="lunch" />);

        const addButton = screen.getAllByRole("button")[0];
        fireEvent.click(addButton);

        const errorMessage = await screen.findByText("Error occurred while adding the food");
        expect(errorMessage).toBeInTheDocument();
    });
});
