import React from "react";

const controller = require("../Controller.jsx")

const FoodTable = (props) => {

    const foodList = props.foodList;

    const addFoodToUser = async (e, food, mealType) => {
        const { id } = await controller.login("test3@test3.com", "password3");
        const resJson = await controller.addFood(id, food.food, food.calories, food.protein, food.carbs, food.fat, mealType)
        console.log(id, resJson);
    }

    // Examples 
    // const test = async () => {
    //     // const response = await controller.login("test3@test3.com", "password3");
    //     //const response = await controller.registerUser("test4", "test4@test4.com", "password4", "2024-10-11", 187.24, 200, 48.85, true, 2);
    //     //const response = await controller.getAllUsers();
    //     //const user = await controller.getUser(4);
    //     // const response = await controller.updateUser(user.id,
    //     //     {
    //     //         ...user, "name": "ChangedUser4"
    //     //     });
    //     //const response = await controller.getAllRoutines();
    //     //const response = await controller.getRoutine(1);
    //     // const response = await controller.createRoutine(4, {
    //     //     "name": "Routine for user 4",
    //     //     "days": []
    //     // })
    //     // const response = await controller.updateRoutine(4, 6, {
    //     //     "name": "Different Routine name for user 4",
    //     //     "days": []
    //     // })
    //     //const response = await controller.deleteRoutine(6)
    //     // const response = await controller.createExercise(5, {
    //     //     "name": "Shoulder plank",
    //     //     "type": "aerobic",
    //     //     //"duration":34.245
    //     //     "caloriesBurned": 0,
    //     //     "videoUrl": "amazon.com"
    //     // });
    //     //const response = await controller.deleteExercise(3)
    //     //const response = await controller.getAllFoods(1);
    //     //const response = await controller.addFood(3, "chocolate", 23, 53, 13, 78, "lunch");
    //     //const response = await controller.deleteFood(5);
    //     // console.log(response)
    // }

    return (
        <table className="w-full text-center">
            <tr>
                <th>Food</th>
                <th>Grams</th>
                <th>Calories</th>
                <th>Proteins</th>
                <th>Fat</th>
                <th>Carbs</th>
                <th>Category</th>
                <th>Add Food</th>
            </tr>
            {foodList.map(food =>
            (
                <tr>
                    <td>{food.food}</td>
                    <td>{food.grams}</td>
                    <td>{food.calories}</td>
                    <td>{food.protein}</td>
                    <td>{food.fat}</td>
                    <td>{food.carbs}</td>
                    <td>{food.category}</td>
                    <td className="flex items-center justify-center">
                        <button onClick={(e) => addFoodToUser(e, food, "breakfast")} className="flex justify-center items-center select-none">
                            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                            </svg>
                        </button>
                    </td>
                </tr>
            )
            )}
        </table>
    )
}

export default FoodTable