import axios from 'axios';

export const LOGIN = 'login';
export const SEARCH_ARTIST = 'search_artists';
export const FETCH_ALBUMS = 'fetch_albums';
export const REMOVE_ALBUMS = 'remove_albums';

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
          type:SEARCH_ARTIST,
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
