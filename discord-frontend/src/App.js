import React from 'react';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import './App.css';

import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return <>
    <Router>
      <Routes>
        <Route exact path="/login">
          <LoginPage/>
        </Route>

        <Route exact path="/register">
          <RegisterPage/>
        </Route>

        <Route exact path='/dashboard'>
          <Dashboard/>
        </Route>

        <Route path='/'>
          <Navigate to="/dashboard" />
        </Route>

      </Routes>
    </Router>
  </>
  ;
}

export default App;
