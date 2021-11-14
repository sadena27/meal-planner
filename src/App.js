import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Homepage from './Components/Homepage/homepage';
import Recipes from './Components/Explore Recipes/recipe-form';
import MealPlanner from './Components/Plan Meal/meal-plan-form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/explore-recipes" component={Recipes}/>
          <Route exact path="/plan-meals" component={MealPlanner}/>
        </Switch>
      </BrowserRouter>
  </div>
  );
}

export default App;
