import React, { useState } from 'react';
import MealPlanDisplay from './meal-plan-display';
import "./meal-plan-form.css"


function MealPlanForm() {
   const [formData, setFormData] = useState({diet: '', restrictions: [], maxPrepTime: 0});
   const [submitted, setSubmitted] = useState(false);

   const handleSubmit = event => {
       event.preventDefault();

       setSubmitted(true);
   }

   const onChangeDiet = (e) => {
       setFormData(prevState => ({...prevState, diet: e.target.value}))
   }

   const onChangeTime = (e) => {
       setFormData(prevState => ({...prevState, maxPrepTime: e.target.value}));
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
      ? <MealPlanDisplay data={formData}/>
      : 
      <div className="wrapper">
          <h1 className="meal-title">Meal Preferences</h1>
          <form className="meal-form" onSubmit={handleSubmit}>
              <fieldset>
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
              <p></p>
              <button className="button" type="submit">Submit</button>
              <p></p>
          </form>
      </div>
      }  
   </div>
   )
}

export default MealPlanForm;
