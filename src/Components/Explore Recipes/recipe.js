import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';
import './recipe.css';

function Recipe(props) {
    const recipe = props.recipe;
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [recipeInfo, setRecipeInfo] = useState({servings: 0, readyTime: 0, link: '', ingredients: ''});

    const api_key = process.env.REACT_APP_API_KEY;
    require('dotenv').config();

    useEffect(() => {
        async function getRecipes() {
            const response = await axios.get('https://api.spoonacular.com/recipes/' + recipe.id + '/information?apiKey=' + api_key);
            
            const tempData = {
                servings : response.data.servings,
                readyTime : response.data.readyInMinutes,
                link: response.data.sourceUrl,
                ingredients : response.data.extendedIngredients.map((ingredient) => <li>{ingredient.original}</li>),
            }

            setRecipeInfo(tempData);
        }
        if (recipeInfo.servings === 0 && recipeInfo.readyTime === 0) {
            getRecipes();
        }
     }, [])


     return (
        <div className="recipe">
            <div className="recipe-box" onClick={() => setOpen(o => !o)}>
                <h3>{recipe.title}</h3>
                <img className="recipe-pic" src={recipe.image} alt={recipe.title}/>
            </div>
            <Popup modal open={open} onClose={closeModal}>
                
                <div className="popup">
                    <a className="close" onClick={closeModal}>&times;</a>
                    <div class="center"><h1>{recipe.title}</h1></div>

                    <div class = "row">
                        <div class = "column left">
                            <br /><br />
                            <img className="recipe-pic-popup" src={recipe.image} alt={recipe.title}/>
                            <p>
                                <b>Servings:</b> {recipeInfo.servings} <br />
                                <b>Preparation Time:</b> {recipeInfo.readyTime} <br />
                                <b><a target="_blank" href={recipeInfo.link}>Source/Instructions</a></b>
                            </p>
                        </div>
                        <div class = "column right">
                            <h3>Ingredients: </h3>
                            <ul>{recipeInfo.ingredients}</ul>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default Recipe;
