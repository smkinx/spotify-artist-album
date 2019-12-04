import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login/login';
import Search from './components/Search/search';
import PrivateRoute from './components/privateRoute'

import { searchArtist, fetchAlbum } from './actions'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
            <Switch>
              <Route path="/login" component = {Login} />
              <Route path="/search" render = {() => <Search searchArtist = {this.props.searchArtist}/>} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { searchArtist, fetchAlbum }) (App);
