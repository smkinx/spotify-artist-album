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

  var config = {
    headers: {'Authorization': "bearer " + "BQBE6mbA-rpBO8HKSCd7f-45pPxkp-xqRxnvJkEIQDvSZud5bJK-ih8lhZJBOH1Ap5a0fOdAwbp67v6lUmHvmBu3b_dta8TDCASO4xjfpOmY1qDJE-zRgigzJFEff4igXNbqA2w"}
  };

  var bodyParameters = {
    type: "artist",
    q: search
  }
  return dispatch => {
    axios.get(`https://api.spotify.com/v1/search`,
      bodyParameters,
      config
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
