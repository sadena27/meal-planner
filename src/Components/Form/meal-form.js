import React, { useReducer, useState } from 'react';
import "./meal-form.css"

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}



function MealForm() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    var expanded = false;

    const showCheckboxes1 = () => {
        var checkboxes = document.getElementById("checkboxes1");
        if (!expanded) {
          checkboxes.style.display = "block";
          expanded = true;
        } else {
          checkboxes.style.display = "none";
          expanded = false;
        }
      }

    var expanded = false;

    const showCheckboxes2 = () => {
        var checkboxes = document.getElementById("checkboxes2");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }

    return (
        <div className="wrapper">
            <h1 className="title">Meal Preferences</h1>
            {submitting &&
                <div>
                    You are submitting the following:
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                        ))}
                    </ul>
                </div>
            }
            <form className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <h3 className="title">Dietary Preferences</h3>
                    <label>
                        <p className="title">Diet</p>
                        <select name="diet" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
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
                        <div id="checkboxes1">
                            <label>
                                <input type="checkbox" id="all" />All</label>
                            <label>
                                <input type="checkbox" id="african" />African</label>
                            <label>
                                <input type="checkbox" id="american" />American</label>
                            <label>
                                <input type="checkbox" id="british" />British</label>
                            <label>
                                <input type="checkbox" id="cajun" />Cajun</label>
                            <label>
                                <input type="checkbox" id="caribbean" />Caribbean</label>
                            <label>
                                <input type="checkbox" id="chinese" />Chinese</label>
                            <label>
                                <input type="checkbox" id="eastern-european" />Eastern European</label>
                            <label>
                                <input type="checkbox" id="european" />European</label>
                            <label>
                                <input type="checkbox" id="french" />French</label>
                            <label>
                                <input type="checkbox" id="german" />German</label>
                            <label>
                                <input type="checkbox" id="greek" />Greek</label>
                            <label>
                                <input type="checkbox" id="indian" />Indian</label>
                            <label>
                                <input type="checkbox" id="irish" />Irish</label>
                            <label>
                                <input type="checkbox" id="italian" />Italian</label>
                            <label>
                                <input type="checkbox" id="japanese" />Japanese</label>
                            <label>
                                <input type="checkbox" id="jewish" />Jewish</label>
                            <label>
                                <input type="checkbox" id="korean" />Korean</label>
                            <label>
                                <input type="checkbox" id="latin-american" />Latin American</label>
                            <label>
                                <input type="checkbox" id="mediterranean" />Mediterranean</label>
                            <label>
                                <input type="checkbox" id="mexican" />Mexican</label>
                            <label>
                                <input type="checkbox" id="middle-eastern" />Middle Eastern</label>
                            <label>
                                <input type="checkbox" id="nordic" />Nordic</label>
                            <label>
                                <input type="checkbox" id="southern" />Southern</label>
                            <label>
                                <input type="checkbox" id="spanish" />Spanish</label>
                            <label>
                                <input type="checkbox" id="thai" />Thai</label>
                            <label>
                                <input type="checkbox" id="vietnamese" />Vietnamese</label>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <h3 className="title">Restrictions</h3>
                    <div className="multiselect">
                        <p className="title">Intolerances</p>
                        {/* <div className="selectBox" onClick={showCheckboxes2}>
                            <select>
                                <option>--Please choose an option--</option>
                            </select>
                        </div> */}
                        <div id="checkboxes2">
                            <label>
                                <input type="checkbox" id="dairy" />Dairy</label>
                            <label>
                                <input type="checkbox" id="egg" />Egg</label>
                            <label>
                                <input type="checkbox" id="gluten" />Gluten</label>
                            <label>
                                <input type="checkbox" id="grain" />Grain</label>
                            <label>
                                <input type="checkbox" id="peanut" />Peanut</label>
                            <label>
                                <input type="checkbox" id="seafood" />Seafood</label>
                            <label>
                                <input type="checkbox" id="sesame" />Sesame</label>
                            <label>
                                <input type="checkbox" id="shellfish" />Shellfish</label>
                            <label>
                                <input type="checkbox" id="soy" />Soy</label>
                            <label>
                                <input type="checkbox" id="sulfite" />Sulfite</label>
                            <label>
                                <input type="checkbox" id="tree-nut" />Tree Nut</label>
                            <label>
                                <input type="checkbox" id="wheat" />Wheat</label>
                        </div> 
                    </div>
                    <label>
                        <p className="title">Maximum Preparation Time</p>
                        <input type="number" name="max-time" onChange={handleChange} step="1"/>
                    </label> 
                    <p></p>             
                </fieldset>
                <fieldset>
                    <h3 className="title">Nutrition</h3>
                    <label>
                        <p className="title">Protein Level</p>
                        <select name="protein" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </label>  
                    <label>
                        <p className="title">Calorie Level</p>
                        <select name="calorie" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
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
    )
}

export default MealForm;
