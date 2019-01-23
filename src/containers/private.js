import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';



class PrivateRoute extends React.Component {


render() {
  const {component: Component, ...rest} = this.props;
    
  return (
    <Route {...rest} render={(props) => (
          this.props.isAuthenticated === true  
          ?  <Component {...props}/>
          : <Redirect to ={{
            pathname:'/login',
            state: {from:props.location}}} />
          
    )} />
  )
  }
}


const mapStateToProps = state => {
  return {
      isAuthenticated: state.authReducer.token !== null,
  }
}


export default connect(mapStateToProps,null,null, {pure:false})(PrivateRoute);