import React from 'react'
import './homepage.css';
import { Link } from 'react-router-dom';
import MealPlan from "./mealplan.jpg"
import Recipe from "./recipe.jpg"


function Homepage() {
    return (
        <div>
            <div className="center"><h1>Meal Planner</h1></div>
            <div className= "column right">
                <b><Link to="/explore-recipes">
                    <div className="brand">
                        <div className="title">Recipe Generator</div>
                    </div>
                </Link></b>
                <img className="picrecipes" src={Recipe}/>
                    <p> Takes into account dietary preferences, nutrition <br />
                    requests, and dietary restrictions to generate a variety <br />
                    of suitable recipes</p>
            </div>
            <div className = "row">
                <div className = "column left">
                    <b><Link to="/">
                        <div className="brand">
                            <div className="title">Meal Planner</div>
                        </div>
                    </Link></b>
                    <img className="picmealplan" src={MealPlan}/>
                        <p> Based on the given dietary restrictions, creates a <br />
                        seven day meal plan with three meals each day</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
