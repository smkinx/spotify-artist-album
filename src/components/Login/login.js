import React from 'react';
import Button from '@material-ui/core/Button';
import './login.css';
import Grid from '@material-ui/core/Grid';


const Login = () => {
    return (
      <Grid container alignContent="center" alignItems="center">
        <Grid item>
          <Button className="button-login sm-button" onClick={ ()=>{ window.open('https://accounts.spotify.com/authorize?client_id=868f22d60c3645cdaf1008175fc0d37d&redirect_uri=http:%2F%2Flocalhost:3000%2Fsearch&response_type=token',"_self") }}>Login using Spotify</Button>
        </Grid>
      </Grid>
    )
}

export default Login;
