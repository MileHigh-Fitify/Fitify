import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/LandingPage/Landing'
// import Home from './components/HomePage/Home'
// import Workout from './components/WorkoutPage/WorkoutPage'
// import Nutrition from './components/NutritionPage/Nutrition'
// import Trainer from './components/TrainerPage/trainer'
// import Contactus from './components/ContactusPage/Contactus'
// import TrainerDetails from './components/TrainerPage/TrainerDetailsPage/TrainerDetails';
// import Store from './components/Store/Store'
// import Product from './components/Store/product/Product'
// import Musicplayer from './components/musicPlayer/MusicPlayer'
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
// import Meditionhome from './components/Medition/meditionhome';
// import Medition from './components/Medition/Medition';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          {/* <Route path="/home">
            <Home />
          </Route>
          <Route path="/workout">
            <Workout />
          </Route>
          <Route path="/nutrition">
            <Nutrition />
          </Route>
          <Route path="/trainer">
            <Trainer />
          </Route>
          <Route path="/trainerdetails">
            <TrainerDetails />
          </Route>
          <Route path="/shop">
            <Store />
          </Route>
          <Route path="/shopProduct">
            <Product />
          </Route>
          <Route path="/musicplayer">
            <Musicplayer />
          </Route>
          <Route path="/meditionhome">
            <Meditionhome />
          </Route>
          <Route path="/medition">
            <Medition />
          </Route>
          <Route path="/contactus">
            <Contactus />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
