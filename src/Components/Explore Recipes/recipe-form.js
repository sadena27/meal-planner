import React, { useState } from 'react';
import RecipeDisplay from './recipe-display';
import "./recipe-form.css"

function RecipeForm() {
    const [formData, setFormData] = useState({diet: '', cuisinePreferences: [], restrictions: [], maxPrepTime: 0, proteinLevel: '', calorieLevel: ''});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);

        setSubmitted(true);
    }

    const onChangeDiet = (e) => {
        setFormData(prevState => ({...prevState, diet: e.target.value}))
    }

    const onChangeTime = (e) => {
        setFormData(prevState => ({...prevState, maxPrepTime: e.target.value}));
    }

    const onChangeProtein = (e) => {
        setFormData(prevState => ({...prevState, proteinLevel: e.target.value}));
    }

    const onChangeCalories = (e) => {
        setFormData(prevState => ({...prevState, calorieLevel: e.target.value}));
    }

    const onChangeCuisine = (e) => {
        let index = formData.cuisinePreferences.indexOf(e.target.value);

        if (index > -1) {
            setFormData(prevState => ({...prevState, cuisinePreferences: prevState.cuisinePreferences.filter(preference => preference !== e.target.value)}));
        } else {
            setFormData(prevState => ({...prevState, cuisinePreferences: [...prevState.cuisinePreferences, e.target.value]}));
        }
    }

    const onChangeRestrictions = (e) => {
        let index = formData.restrictions.indexOf(e.target.value);

        if (index > -1) {
            setFormData(prevState => ({...prevState, restrictions: prevState.restrictions.filter(restriction => restriction !== e.target.value)}));
        } else {
            setFormData(prevState => ({...prevState, restrictions: [...prevState.restrictions, e.target.value]}));
        }
    }

    return (
        <div>
            {submitted
            ? <RecipeDisplay data={formData}/>
            : 
            <div className="wrapper">
                <h1 className="recipe-title">Meal Preferences</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <fieldset>
                        <h3>Dietary Preferences</h3>
                        <label>
                            <p className="title">Diet</p>
                            <select className="selectBox" name="diet" onChange={onChangeDiet}>
                                <option value="">Please choose an option...</option>
                                <option value="any">Any Diet</option>
                                <option value="gluten-free">Gluten Free</option>
                                <option value="ketogenic">Ketogenic</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="vegan">Vegan</option>
                                <option value="pescetarian">Pescatarian</option>
                                <option value="paleo">Paleo</option>
                            </select>
                        </label>
                        <div className="multiselect">
                            <p className="title">Cuisine Preferences</p>
                            <div id="checkboxes1" name="preferences" onChange={onChangeCuisine}>
                                <label>
                                    <input type="checkbox" id="all" value="all"/>All</label>
                                <label>
                                    <input type="checkbox" id="african" value="african"/>African</label>
                                <label>
                                    <input type="checkbox" id="american" value="american"/>American</label>
                                <label>
                                    <input type="checkbox" id="british" value="british"/>British</label>
                                <label>
                                    <input type="checkbox" id="cajun" value="cajun"/>Cajun</label>
                                <label>
                                    <input type="checkbox" id="caribbean" value="caribbean"/>Caribbean</label>
                                <label>
                                    <input type="checkbox" id="chinese" value="chinese"/>Chinese</label>
                                <label>
                                    <input type="checkbox" id="eastern-european" value="eastern european"/>Eastern European</label>
                                <label>
                                    <input type="checkbox" id="european" value="european"/>European</label>
                                <label>
                                    <input type="checkbox" id="french" value="french"/>French</label>
                                <label>
                                    <input type="checkbox" id="german" value="german"/>German</label>
                                <label>
                                    <input type="checkbox" id="greek" value="greek"/>Greek</label>
                                <label>
                                    <input type="checkbox" id="indian" value="indian"/>Indian</label>
                                <label>
                                    <input type="checkbox" id="irish" value="irish"/>Irish</label>
                                <label>
                                    <input type="checkbox" id="italian" value="italian"/>Italian</label>
                                <label>
                                    <input type="checkbox" id="japanese" value="japanese"/>Japanese</label>
                                <label>
                                    <input type="checkbox" id="jewish" value="jewish"/>Jewish</label>
                                <label>
                                    <input type="checkbox" id="korean" value="korean"/>Korean</label>
                                <label>
                                    <input type="checkbox" id="latin-american" value="latin american"/>Latin American</label>
                                <label>
                                    <input type="checkbox" id="mediterranean" value="mediterranean"/>Mediterranean</label>
                                <label>
                                    <input type="checkbox" id="mexican" value="mexican"/>Mexican</label>
                                <label>
                                    <input type="checkbox" id="middle-eastern" value="middle eastern"/>Middle Eastern</label>
                                <label>
                                    <input type="checkbox" id="nordic" value="nordic"/>Nordic</label>
                                <label>
                                    <input type="checkbox" id="southern" value="southern"/>Southern</label>
                                <label>
                                    <input type="checkbox" id="spanish" value="spanish"/>Spanish</label>
                                <label>
                                    <input type="checkbox" id="thai" value="thai"/>Thai</label>
                                <label>
                                    <input type="checkbox" id="vietnamese" value="vietnamese"/>Vietnamese</label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h3>Restrictions</h3>
                        <div className="multiselect">
                            <p className="title">Intolerances</p>
                            <div id="checkboxes2" name="restrictions" onChange={onChangeRestrictions}>
                                <label>
                                    <input type="checkbox" id="dairy" value="dairy"/>Dairy</label>
                                <label>
                                    <input type="checkbox" id="egg" value="egg"/>Egg</label>
                                <label>
                                    <input type="checkbox" id="gluten" value="gluten"/>Gluten</label>
                                <label>
                                    <input type="checkbox" id="grain" value="grain"/>Grain</label>
                                <label>
                                    <input type="checkbox" id="peanut" value="peanut"/>Peanut</label>
                                <label>
                                    <input type="checkbox" id="seafood" value="seafood"/>Seafood</label>
                                <label>
                                    <input type="checkbox" id="sesame" value="sesame"/>Sesame</label>
                                <label>
                                    <input type="checkbox" id="shellfish" value="shellfish"/>Shellfish</label>
                                <label>
                                    <input type="checkbox" id="soy" value="soy"/>Soy</label>
                                <label>
                                    <input type="checkbox" id="sulfite" value="sulfite"/>Sulfite</label>
                                <label>
                                    <input type="checkbox" id="tree-nut" value="tree nut"/>Tree Nut</label>
                                <label>
                                    <input type="checkbox" id="wheat" value="wheat"/>Wheat</label>
                            </div> 
                        </div>
                        <label>
                            <p className="title">Maximum Preparation Time (in minutes)</p>
                            <input className="inputBox" type="number" name="max-time" onChange={onChangeTime} step="1"/>
                        </label> 
                        <p></p>             
                    </fieldset>
                    <fieldset>
                        <h3>Nutrition</h3>
                        <label>
                            <p className="title">Protein Level</p>
                            <select className="selectBox" name="protein" onChange={onChangeProtein}>
                                <option value="">Please choose an option...</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </label>  
                        <label>
                            <p className="title">Calorie Level</p>
                            <select className="selectBox" name="calorie" onChange={onChangeCalories}>
                                <option value="">Please choose an option...</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </label> 
                        <p></p> 
                    </fieldset>
                    <p></p>
                    <button className="button" type="submit">Submit</button>
                    <p></p>
                </form>
            </div>
            }  
        </div>
    )
}

export default RecipeForm;
