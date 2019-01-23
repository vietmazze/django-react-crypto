import {combineReducers} from 'redux';
import {fetchReducer} from './fetch';
import {authReducer} from './auth';
import {coinformReducer} from './fetch';
import {userLoadedReducer} from './loaduser';
import {PorfolioReducer} from './fetch';
import {coinformdetailReducer } from './fetch';

const reducer = combineReducers({
    authReducer,
    fetchReducer,
    coinformReducer,
    userLoadedReducer,
    PorfolioReducer,
    coinformdetailReducer 
  })

export default reducer;


