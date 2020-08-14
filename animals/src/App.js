import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import PrivateRoute from './components/utils/PrivateRoute';
import AnimalDashboard from './components/AnimalDashboard';
import AddAnimals from './components/AddAnimal';

export default function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Build out a Private Route for both Animal Dashboard + Add Animal*/}
        <PrivateRoute exact pathe = '/creatures' component={AnimalDashboard} />
        <PrivateRoute exact pathe = '/add' component={AddAnimals} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};
