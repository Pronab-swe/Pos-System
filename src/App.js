import './App.scss';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

      {/* Toastify container call */}
      <ToastContainer />
    </div>
  );
}

export default App;
