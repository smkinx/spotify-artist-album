import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login/login';
import Search from './components/Search/search';
import PrivateRoute from './components/privateRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Switch>
            <Route path="/login" component = {Login} />
            <Route path="/search" component = {Search} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, {}) (App);
