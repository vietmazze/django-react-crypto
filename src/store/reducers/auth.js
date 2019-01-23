import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import {combineReducers} from 'redux';

const initialState = {
    token: null,
    error: null, 
    loading: false,
    //user: null
}




const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authSuccess = (state, action) => {
    
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false
        
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    });
}

// const fetchCoincapSuccess = (state,action) => {
//     return updateObject(state,{
//         data: action.data,
//         error:null
//     } )
// }

// const fetchCoincapFailure = (state,action) => {
//     return updateObject(state,{
//         error: action.error
//     } )
// }



// Later one when multiple reducer, this would be Auth reducer... and then we can use combineReducers to make it into one.
export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}


// export const fetchReducer = (state=initialState2, action) => {
//     switch(action.type) {
//         case actionTypes.COINCAP_SUCCESS: return fetchCoincapSuccess(state, action);
//         case actionTypes.COINCAP_FAILURE: return fetchCoincapFailure(state, action);
//         default: 
//             return state;
//     }
// }

// const reducer = combineReducers({
//     authReducer,
//     fetchReducer
//   })
