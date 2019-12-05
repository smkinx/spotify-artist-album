import axios from 'axios';

export const LOGIN = 'login';
export const SEARCH_ARTISTS = 'search_artists';
export const REMOVE_ARTISTS = 'remove_artists';
export const FETCH_ALBUMS = 'fetch_albums';
export const REMOVE_ALBUMS = 'remove_albums';
export const FETCH_MORE_ARTISTS = "fetch_more_artists"
export const FETCH_MORE_ALBUMS = "fetch_more_albums"

export const addAuthToken = (token) => {
  return dispatch => {
    dispatch({
      type:LOGIN,
      payload: token
    })
  }
}


export const searchArtist = (token, search) => {
  return dispatch => {
    axios.get(`https://api.spotify.com/v1/search?type=artist&q=${search}`,
      { headers: {'Authorization': `Bearer ${token}`}}
    )
    .then((response) => {
      dispatch({
          type:SEARCH_ARTISTS,
          payload:response
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}

export const fetchAlbum = (token, id) => {
  return dispatch => {
    axios.get(`https://api.spotify.com/v1/artists/${id}/albums`,
      { headers: {'Authorization': `Bearer ${token}`}}
    )
    .then((response) => {
      dispatch({
          type:FETCH_ALBUMS,
          payload:response
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}

export const removeAlbums = () => {
  return dispatch => {

    dispatch({
        type:REMOVE_ALBUMS,
        payload: []
    })
  }
}

export const removeArtists = () => {
  return dispatch => {
    dispatch({
        type:REMOVE_ARTISTS,
        payload: []
    })
  }
}

export const fetchMoreArtists = (token, url) => {
  return dispatch => {
    axios.get(url,
      { headers: {'Authorization': `Bearer ${token}`}}
    )
    .then((response) => {
      dispatch({
          type:FETCH_MORE_ARTISTS,
          payload:response
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}

export const fetchMoreAlbums = (token, url) => {
  return dispatch => {
    axios.get(url,
      { headers: {'Authorization': `Bearer ${token}`}}
    )
    .then((response) => {
      dispatch({
          type:FETCH_MORE_ALBUMS,
          payload:response
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
