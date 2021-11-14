import React, {useState, useEffect} from 'react';
import MealForm from '../Form/meal-form'
import axios from 'axios';
import Loader from "react-loader-spinner";
import Recipe from "./recipe";
import './generator.css';

function Generator() {
    // const [recipes, setRecipes] = useState([{id: '', title: '', image: ''}]);
    const [recipes, setRecipes] = useState([
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
            "imageType": "jpg",
        },
        {
            "id": 715538,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
            "imageType": "jpg",
        }]);
    const api_key = process.env.REACT_APP_API_KEY;
    require('dotenv').config();

    // useEffect(() => {
    //     async function getRecipes() {
    //         const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + 
    //                                         api_key + '&cuisine=italian&diet=vegetarian');
            
    //         setRecipes(response.data.results);
    //     }
    //     getRecipes();
    //  }, [api_key])

    return (
        <div>
            <h1>This is the meal plan generator.</h1>
            {recipes.length === 1 
             ?  <div className="loading">
                    <p>Loading recipes</p>
                    {/* <Loader type="Oval" color="#3f8efc" height={120} width={120}/> */}
                </div>
             :  <div className="recipes-box">
                    {recipes.map(recipe => (
                        <Recipe key={recipe.id} recipe={recipe}/>
                    ))}
                </div>
            }
            <MealForm/>
        </div>
    )
}

export default Generator;
