import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Homepage from './Components/Homepage/homepage';
import Generator from './Components/Generator/generator';
import Recipes from './Components/Generator/recipe-display';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/meal-plan-generator" component={Generator}/>
          <Route exact path="/recipes" component={Recipes}/>
        </Switch>
      </BrowserRouter>
  </div>
  );
}

export default App;
