import React, { useEffect, useState } from "react";
import SearchBar from '../components/SearchBar'

import useFetch from "../hooks/useFetch";
import FoodTable from "../components/FoodTable";

export default function FoodPage(props) {

  const mealType = props.mealType || "breakfast"

  const [foodList, setFoodList] = useState([]);
  const [query, setQuery] = useState("");

  const { fetchCsvData } = useFetch();

  const search = (data) => {
    return data.filter((item) => {
      if (item.food) {
        return item.food.toLowerCase().includes(query.toLowerCase());
      }
      else return false;
    })
  };

  // Get food List on load
  useEffect(() => {
    fetchCsvData("/data/nutrients.csv", setFoodList);
  }, [])

  return (
    <div>
      <h1 className="text-center text-2xl mb-2">Food Search</h1>
      <SearchBar onChange={(q) => setQuery(q)} />
      <FoodTable foodList={search(foodList)} mealType={mealType} />
    </div>
  );
}
