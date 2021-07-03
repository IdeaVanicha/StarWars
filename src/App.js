import './App.css';
import Main from "./components/Main.js";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Characters from './components/Characters';
import WelcomePage from './components/WelcomePage';

function App() {

  return (
    <div className="App">
      <Router>
        <WelcomePage/>
        <Switch>
        {/* <Route path='/Welcomepage' component={ WelcomePage } /> */}
          <Route path='/HomePage' component={ Main } />
          <Route path='/Characters' component={ Characters } />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
