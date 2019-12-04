import axios from 'axios';

export const LOGIN = 'login';
export const SEARCH_ARTIST = 'search_artists';
export const FETCH_ALBUMS = 'fetch_albums';

export const login = () => {
  return dispatch => {
    //
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

export const fetchAlbum = (artistId) => {
  return dispatch => {
    //
  }
}
