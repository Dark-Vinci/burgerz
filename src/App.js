import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Bread from './container/bread';
import Home from './container/home';
import Ingredient from './container/ingredient';
import Summary from './container/summary';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>

        <Route 
          path='/bread'
          exact
          >
          <Bread />
        </Route>

        <Route 
          path='/ingredient'
          exact
          >
          <Ingredient />
        </Route>

        <Route 
          path='/summary'
          exact
          >
          <Summary />
        </Route>

        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
