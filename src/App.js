import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/post/:postId">
          <UserDetails />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
