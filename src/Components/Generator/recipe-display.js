import React, {useState, useEffect} from 'react';
import MealForm from '../Form/meal-form'
import axios from 'axios';
import Loader from "react-loader-spinner";
import Recipe from "./recipe";
import './recipe-display.css';

function RecipeDisplay(props) {
    const [recipes, setRecipes] = useState([
        {
            "id": 715769,
            "title": "Broccolini Quinoa Pilaf",
            "image": "https://spoonacular.com/recipeImages/715769-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 648257,
            "title": "Italian Steamed Artichokes",
            "image": "https://spoonacular.com/recipeImages/648257-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 1095745,
            "title": "Mushroom Hummus Crostini",
            "image": "https://spoonacular.com/recipeImages/1095745-312x231.jpg",
            "imageType": "jpg"
        }
]);
    const api_key = process.env.REACT_APP_API_KEY;
    require('dotenv').config();
    const diet = props.data.diet;
    const cuisinePreferences = props.data.cuisinePreferences.toString();
    const restrictions = props.data.restrictions.toString();
    const maxPrepTime = props.data.maxPrepTime;
    const proteinLevel = props.data.proteinLevel;
    const minProtein = 0;
    const maxProtein = 0;
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
    const minCalories = 0;
    const maxCalories = 0;
    if (calorieLevel === "low") {
        maxCalories = 200;
    } else if (calorieLevel === "medium") {
        minCalories = 200;
        maxCalories = 500;
    } else {
        minCalories = 500;
        maxCalories = 2000;
    }

    // useEffect(() => {
    //     async function getRecipes() {
    //         const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + 
    //                                         api_key + '&diet=' + diet + '&cuisine=' + cuisinePreferences +
    //                                         '&intolerances=' + restrictions + '&maxReadyTime=' + maxPrepTime +
    //                                         '&minProtein=' + minProtein + '&maxProtein=' + maxProtein +
    //                                         '&minCalories=' + minCalories + '&maxCalories=' + maxCalories);
            
    //         setRecipes(response.data.results);
    //     }
    //     getRecipes();
    //  }, [api_key])

    return (
        <div>
            {recipes.length === 1 
             ?  <div className="loading">
                    <p>Loading recipes</p>
                    <Loader type="Oval" color="#3f8efc" height={120} width={120}/>
                </div>
             :  <div className="recipes-box">
                    {recipes.map(recipe => (
                        <Recipe key={recipe.id} recipe={recipe}/>
                    ))}
                    <h1>{cuisinePreferences}</h1>
                </div>
            }
        </div>
    )
}

export default RecipeDisplay;
