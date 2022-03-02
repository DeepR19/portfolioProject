import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import HireMe from "./content/HireMe/Hire";
import Main from "./content/main";

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/hire" component={HireMe}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
