import React from 'react';
import {Route,Switch} from 'react-router-dom';
import PrivateRoute from  './containers/private'

import Formview from './containers/Formview';
import WrappedNormalLoginForm from "./containers/Login";
import WrappedRegistrationForm from "./containers/Signup";




const BaseRouter = () => (

    <div>
      <Switch>
        <Route exact path="/login" component={WrappedNormalLoginForm} />{" "}
        <Route exact path="/signup" component={WrappedRegistrationForm} />{" "}
        <PrivateRoute exact path = "/portfolio" component = {Formview} /> 
      </Switch>
    </div>
 
  );
  
  export default BaseRouter;