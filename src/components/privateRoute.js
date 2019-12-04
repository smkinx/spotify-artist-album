import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
      <Route {...rest} render={(routerProps)=> (
        rest.auth !=="0" ? <Component {...routerProps}/> : <Redirect to="/login" />
      )} />
    )
}
export default PrivateRoute;
