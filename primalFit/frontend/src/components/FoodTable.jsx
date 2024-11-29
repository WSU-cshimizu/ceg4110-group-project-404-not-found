import React from "react";

const FoodTable = (props) => {

    const foodList = props.foodList;

    const addFoodToUser = (e, food) => {
        console.log(food);
    }

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
                        <button onClick={(e) => addFoodToUser(e, food)} className="flex justify-center items-center select-none">
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