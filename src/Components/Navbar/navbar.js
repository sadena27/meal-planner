import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/">
                <div className="brand">
                    <div className="title">Meal Planner</div>
                </div>
            </Link>
            <nav>
                <Link to="/explore-recipes">Explore Recipes</Link>
                <Link to="/plan-meals">Plan Meals</Link>
            </nav>
        </header>
    )
}

export default Navbar;