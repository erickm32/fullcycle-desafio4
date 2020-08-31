import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersPage from './pages/users';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/users'><UsersPage/></Route>
        <Route path='/'><HomePage/></Route>
      </Switch>
    </Router>
  );
}

export default App;
