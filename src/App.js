import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login/login';
import Search from './components/Search/search';
import AlbumList from './components/Album/albumList';

import { searchArtist, fetchAlbum, addAuthToken } from './actions'

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <BrowserRouter >
            <Switch>
              <Route path="/login" component = {Login} />
              <Route path="/search" render = {(props) => <Search {...props}
                searchArtist = {this.props.searchArtist}
                artists = {this.props.artists}
                addAuthToken = {this.props.addAuthToken}
                accessToken = {this.props.auth}
                />}
              />
              <Route path="/artist/:artistId" render = {(props) => <AlbumList {...props} fetchAlbum = {this.props.fetchAlbum}
                artists = {this.props.artists}
                accessToken = {this.props.auth}
                albums = {this.props.albums}
                />}
              />
              <Route path="/" component = {Login} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artists: state.artists,
    auth: state.auth,
    albums: state.albums,
    albumRequest: state.albumRequest
  };
}

export default connect(mapStateToProps, { searchArtist, fetchAlbum, addAuthToken }) (App);
