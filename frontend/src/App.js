import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Landing from './components/LandingPage/Landing'
import Home from './components/HomePage/Home'
// import Workout from './components/WorkoutPage/WorkoutPage'
import Nutrition from './components/NutritionPage/Nutrition'
// import Trainer from './components/TrainerPage/trainer'
// import Contactus from './components/ContactusPage/Contactus'
// import TrainerDetails from './components/TrainerPage/TrainerDetailsPage/TrainerDetails';
// import Store from './components/Store/Store'
// import Product from './components/Store/product/Product'
// import Musicplayer from './components/musicPlayer/MusicPlayer'
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie';
// import Meditionhome from './components/Medition/meditionhome';
// import Medition from './components/Medition/Medition';

function App() {


  const [auth, setAuth] = useState(null)

  useEffect(async () => {
    if (Cookies.get('user')) {
      const user = Cookies.get('user');
      setAuth(user)
    }
  }, [])

  // useEffect(
  //   ()=>{
  //     console.log(auth)
  //   },[auth])



  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/">
            {
              !auth ?
                <Landing /> :
                <Redirect to="/home" />
            }
          </Route>
          <Route path="/login">
            {
              !auth ?
                <Login setAuth={setAuth} /> :
                <Redirect to="/home" />
            }
          </Route>
          <Route path="/signup">
            {
              !auth ?
                <Signup setAuth={setAuth} /> :
                <Redirect to="/home" />
            }
          </Route>
          <Route path="/home">
            {
              auth ?
                <Home auth={auth} /> :
                <Redirect to="/" />
            }
          </Route>
          <Route path="/nutrition">
            {
              auth ?
                <Nutrition /> :
                <Redirect to="/" />
            }
          </Route>
          {/* 
          <Route path="/workout">
            <Workout />
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
