import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login/login';
import Search from './components/Search/search';

import { searchArtist, fetchAlbum } from './actions'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
            <Switch>
              <Route path="/login" component = {Login} />
              <Route path="/search" render = {(props) => <Search {...props} searchArtist = {this.props.searchArtist} artists = {this.props.artists}/>} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artists: state.artists
  };
}

export default connect(mapStateToProps, { searchArtist, fetchAlbum }) (App);
