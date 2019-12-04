import React from 'react';
import Button from '@material-ui/core/Button'

const Login = () => {
    return (
      <div>
        <Button onClick={ ()=>{ window.open('https://accounts.spotify.com/authorize?client_id=868f22d60c3645cdaf1008175fc0d37d&redirect_uri=http:%2F%2Flocalhost:3000%2Fsearch&response_type=token',"_self") }}>Login With Spotify</Button>
      </div>
    )

}

export default Login;
