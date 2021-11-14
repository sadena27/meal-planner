import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import Recipe from "../Explore Recipes/recipe";
import './meal-plan-display.css';

function MealPlanDisplay(props) {
   const [breakfastRecipes, setBreakfastRecipes] = useState([]);
   const [mainCourseRecipes, setMainCourseRecipes] = useState([]);
   const api_key = process.env.REACT_APP_API_KEY;
   require('dotenv').config();
   let diet = props.data.diet;
   if (diet === "any") {
       diet = "";
   }
   const restrictions = props.data.restrictions.toString();
   const maxPrepTime = props.data.maxPrepTime;

   useEffect(() => {
       async function getRecipes() {
         let mealType = "breakfast";
         const response1 = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + 
                                          api_key + '&diet=' + diet + '&type=' + mealType + '&intolerances=' + 
                                          restrictions + '&maxReadyTime=' + maxPrepTime + '&number=7');
         setBreakfastRecipes(response1.data.results);
         mealType = "main course"
         const response2 = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=' + 
                                          api_key + '&diet=' + diet + '&type=' + mealType + '&intolerances=' + 
                                          restrictions + '&maxReadyTime=' + maxPrepTime + '&number=14');
         setMainCourseRecipes(response2.data.results);
       }
       getRecipes();
    }, [api_key])

   return (
      <div>
         {mainCourseRecipes.length === 0
         ? <div className="loading">
               <p>Loading meal plan</p>
               <Loader type="Oval" color="#7284A8" height={100} width={100}/>
            </div>
         :  <div className="week">
               <h1>Meal Plan</h1>
               <div className="day">
                  <div>
                     <h2 className="day-title">Sunday</h2>
                  </div>
                  <div className="meals">
                     <div className="meal">
                        <h3>Breakfast</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={breakfastRecipes[0]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Lunch</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[0]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Dinner</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[7]}/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="day">
                  <div>
                     <h2 className="day-title">Monday</h2>
                  </div>
                  <div className="meals">
                     <div className="meal">
                        <h3>Breakfast</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={breakfastRecipes[1]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Lunch</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[1]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Dinner</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[8]}/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="day">
                  <div>
                     <h2 className="day-title">Tuesday</h2>
                  </div>
                  <div className="meals">
                     <div className="meal">
                        <h3>Breakfast</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={breakfastRecipes[2]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Lunch</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[2]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Dinner</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[9]}/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="day">
                  <div>
                     <h2 className="day-title">Wednesday</h2>
                  </div>
                  <div className="meals">
                     <div className="meal">
                        <h3>Breakfast</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={breakfastRecipes[3]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Lunch</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[3]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Dinner</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[10]}/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="day">
                  <div>
                     <h2 className="day-title">Thursday</h2>
                  </div>
                  <div className="meals">
                     <div className="meal">
                        <h3>Breakfast</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={breakfastRecipes[4]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Lunch</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[4]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Dinner</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[11]}/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="day">
                  <div>
                     <h2 className="day-title">Friday</h2>
                  </div>
                  <div className="meals">
                     <div className="meal">
                        <h3>Breakfast</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={breakfastRecipes[5]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Lunch</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[5]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Dinner</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[12]}/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="day">
                  <div>
                     <h2 className="day-title">Saturday</h2>
                  </div>
                  <div className="meals">
                     <div className="meal">
                        <h3>Breakfast</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={breakfastRecipes[6]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Lunch</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[6]}/>
                        </div>
                     </div>
                     <div className="meal">
                        <h3>Dinner</h3>
                        <div className="recipes-tile">
                           <Recipe recipe={mainCourseRecipes[13]}/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         }
      </div>
   )
}

export default MealPlanDisplay;
