import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'privateRoute';
import Search from './Search/search';


class Routes extends React.Component {
  render(){


    return (
      <div>
          <Switch>
            <PrivateRoute path="/search/" component = {Search} auth={this.props.auth}/>
          </Switch>
      </div>
    );
  }
}


export default Routes;
