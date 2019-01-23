// Using the token, we are fetching user info

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState3 = {
    isAuthenticated: null,
    user: [],
    isLoading: false
}

const userLoaded  = (state,action) => {
 
    return updateObject(state, {
        isAuthenticated: true,
        user: action.user
    })
}

const userLoading  = (state,action) => {

    return updateObject(state, {
        isLoading: true
    })
}


export const userLoadedReducer = (state=initialState3, action) => {
    switch(action.type) {
        case actionTypes.USER_LOADING: return userLoading(state,action);
        case actionTypes.USER_LOADED: return userLoaded(state,action);
        default:
            return state;
    }
}

