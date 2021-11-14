import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/">
                <div className="brand">
                    <div className="title">Recipe Finder</div>
                </div>
            </Link>
            <nav>
                <Link to="/explore-recipes">Recipe Generator</Link>
                <Link to="/plan-meals">Meal Planner</Link>
            </nav>
        </header>
    )
}

export default Navbar;