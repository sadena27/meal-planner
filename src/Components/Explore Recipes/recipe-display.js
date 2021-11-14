import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import Recipe from "./recipe";
import './recipe-display.css';

function RecipeDisplay(props) {
    const [recipes, setRecipes] = useState([]);
    const api_key = process.env.REACT_APP_API_KEY;
    require('dotenv').config();
    let diet = props.data.diet;
    if (diet === "any") {
        diet = "";
    }
    let cuisinePreferences = props.data.cuisinePreferences.toString();
    if (cuisinePreferences === "all") {
        cuisinePreferences = "";
    }
    const restrictions = props.data.restrictions.toString();
    const maxPrepTime = props.data.maxPrepTime;
    const proteinLevel = props.data.proteinLevel;
    let minProtein = 0;
    let maxProtein = 0;
    if (proteinLevel === "low") {
        maxProtein = 10;
    } else if (proteinLevel === "medium") {
        minProtein = 10;
        maxProtein = 40;
    } else {
        minProtein = 40;
        maxProtein = 200;
    }
    const calorieLevel = props.data.calorieLevel;
    let minCalories = 0;
    let maxCalories = 0;
    if (calorieLevel === "low") {
        maxCalories = 200;
    } else if (calorieLevel === "medium") {
        minCalories = 200;
        maxCalories = 500;
    } else {
        minCalories = 500;
        maxCalories = 2000;
    }

    useEffect(() => {
        async function getRecipes() {
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + 
                                            api_key + '&diet=' + diet + '&cuisine=' + cuisinePreferences +
                                            '&intolerances=' + restrictions + '&maxReadyTime=' + maxPrepTime +
                                            '&minProtein=' + minProtein + '&maxProtein=' + maxProtein +
                                            '&minCalories=' + minCalories + '&maxCalories=' + maxCalories +
                                            '&number=20');
            
            setRecipes(response.data.results);
        }
        if (recipes.length === 0) {
            getRecipes();
        }
     }, [])

    return (
        <div>
            {recipes.length === 0
             ?  <div className="loading">
                    <p>Loading recipes</p>
                    <Loader type="Oval" color="#7284A8" height={100} width={100}/>
                </div>
             :  <div>
                    <h1>Recipes</h1>
                    <div className="recipes-box">
                    {recipes.map(recipe => (
                        <Recipe key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
             </div>
            }
        </div>
    )
}

export default RecipeDisplay;
