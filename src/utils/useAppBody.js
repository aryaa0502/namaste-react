import { PUNE_SWIGGY_HOME, PATNA_SWIGGY_HOME } from "../utils/constants";
import { useState, useEffect } from "react";


const useAppBody = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(PUNE_SWIGGY_HOME);
        const jsonData = await data.json();
        console.log(jsonData);
        setRestaurantList(
          jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredRestaurants(
          jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
      return [restaurantList, filteredRestaurants, setRestaurantList, setFilteredRestaurants];
}
export default useAppBody; 

