import './App.scss';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages/home/Index'
import FourOFour from './pages/fourOfour/Index'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
