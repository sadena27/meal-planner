import React, {useState, useEffect} from 'react';
import MealForm from '../Form/meal-form'
import axios from 'axios';
import Loader from "react-loader-spinner";
import Recipe from "./recipe";
import './recipe-display.css';

function RecipeDisplay(props) {
    const [recipes, setRecipes] = useState([{id: '', title: '', image: ''}]);
    const api_key = process.env.REACT_APP_API_KEY;
    require('dotenv').config();
    const parameters = props.data;

    useEffect(() => {
        async function getRecipes() {
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + 
                                            api_key + '&cuisine=italian&diet=vegetarian');
            
            setRecipes(response.data.results);
        }
        getRecipes();
     }, [api_key])

    return (
        <div>
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
        </div>
    )
}

export default RecipeDisplay;
