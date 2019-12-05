import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login/login';
import Search from './components/Search/search';
import AlbumList from './components/Album/albumList';

import { searchArtist, fetchAlbum, addAuthToken, removeAlbums, fetchMoreArtists, fetchMoreAlbums } from './actions'

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
                search = {this.props.search}
                fetchMoreArtists = {this.props.fetchMoreArtists}
                />}
              />
              <Route path="/artist/:artistId" render = {(props) => <AlbumList {...props} fetchAlbum = {this.props.fetchAlbum}
                artists = {this.props.artists}
                accessToken = {this.props.auth}
                albums = {this.props.albums}
                removeAlbums = {this.props.removeAlbums}
                albumRequest = {this.props.albumRequest}
                fetchMoreAlbums = {this.props.fetchMoreAlbums}
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
    albumRequest: state.albumRequest,
    search: state.search
  };
}

export default connect(mapStateToProps, { searchArtist, fetchAlbum, addAuthToken, removeAlbums, fetchMoreArtists, fetchMoreAlbums }) (App);
