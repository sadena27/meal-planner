import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';
import './recipe.css';

function Recipe(props) {
    const recipe = props.recipe;
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [recipeInfo, setRecipeInfo] = useState({});


    const api_key = process.env.REACT_APP_API_KEY;
    require('dotenv').config();

    useEffect(() => {
        async function getRecipes() {
            // const response = await axios.get('https://api.spoonacular.com/recipes/' + recipe.id + '/information?apiKey=' + api_key);
            // console.log(response.data);
            // setRecipeInfo(response.data.results);
        }
        getRecipes();
     }, [api_key])

    return (
        <div className="recipe">
            {/* <div className="overlay"></div> */}
            <div className="recipe-box" onClick={() => setOpen(o => !o)}>
                <h3>{recipe.title}</h3>
                <img className="recipe-pic" src={recipe.image} alt={recipe.title}/>
            </div>
            <Popup modal open={open} onClose={closeModal}>
                <div className="popup">
                    <a className="close" onClick={closeModal}>&times;</a>
                    <h1>{recipe.title}</h1>
                    <img className="recipe-pic-popup" src={recipe.image} alt={recipe.title}/>
                </div>
            </Popup>
        </div>
    )
}

export default Recipe;
