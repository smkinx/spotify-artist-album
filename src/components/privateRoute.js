import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const PrivateRoute = ({ component: Component, ...rest }) => {
  if(rest.auth !== "init") {
    return(
      <Route {...rest} render={(routerProps)=> (
        rest.auth !=="0" ? <Component {...routerProps}/> : <Redirect to="/login" />
      )} />
    )
  } else {
    return(

        <Grid container justify="center" alignItems="center" style={{height: 'calc(100vh - 64px)'}}>
          <Grid item >
            <CircularProgress/>
          </Grid>
        </Grid>

    )
  }
}
export default PrivateRoute;
