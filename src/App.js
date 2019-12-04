import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login';
import PrivateRoute from './components/privateRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Switch>
            <Route path="/login" component = {Login} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
