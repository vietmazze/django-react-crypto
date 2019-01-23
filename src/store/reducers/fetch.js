import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState2 = {
    data: [],
    error:null,

}

const fetchCoincapSuccess = (state,action) => {
    return updateObject(state,{
        data: action.data,
        error:null
    } )
}

const fetchCoincapFailure = (state,action) => {
    return updateObject(state,{
        error: action.error
    } )
}




export const fetchReducer = (state=initialState2, action) => {
    switch(action.type) {
        case actionTypes.COINCAP_SUCCESS: return fetchCoincapSuccess(state, action);
        case actionTypes.COINCAP_FAILURE: return fetchCoincapFailure(state, action);
        default: 
            return state;
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////

const initialState3 = {
    status: null,
    error:null,

}

const fetchCoinformSuccess = (state,action) => {
    return updateObject(state,{
        status: action.status,
        error:null
    } )
}

const fetchCoinformFailure = (state,action) => {
    return updateObject(state,{
        error: action.error
    } )
}



export const coinformReducer = (state=initialState3, action) => {
    switch(action.type) {
        case actionTypes.COINFORM_SUCCESS: return fetchCoinformSuccess(state, action);
        case actionTypes.COINFORM_FAILURE: return fetchCoinformFailure(state, action);
        default: 
            return state;
    }
}
///////////////////////////////////////////////////////////////////////////
const initialState5 = {
    data: [],
    error:null,

}

const fetchCoinformdetailSuccess = (state,action) => {
    return updateObject(state,{
        data: action.data,
        error:null
    } )
}

const fetchCoinformdetailFailure = (state,action) => {
    return updateObject(state,{
        error: action.error
    } )
}



export const coinformdetailReducer = (state=initialState5, action) => {
    switch(action.type) {
        case actionTypes.COINFORMDETAIL_SUCCESS: return fetchCoinformdetailSuccess(state, action);
        case actionTypes.COINFORMDETAIL_FAILURE: return fetchCoinformdetailFailure(state, action);
        default: 
            return state;
    }
}

///////////////////////////////////////////////////////////////////////////

const initialState4 = {
    data: [],
    error:null,
    loading: false,

}


// const fetchPorfolioStart = (state,action) => {
//     return updateObject(state,{
//         error:null,
//         loading: action.loading
//     } )
// }


const fetchPorfolioSuccess = (state,action) => {
    return updateObject(state,{
        data: action.data,
        error:null
    } )
}

const fetchPorfolioFailure = (state,action) => {
    return updateObject(state,{
        error: action.error
    } )
}



export const PorfolioReducer = (state=initialState4, action) => {
    switch(action.type) {
        // case actionTypes.PORFOLIO_START: return fetchPorfolioStart(state, action);
        case actionTypes.PORFOLIO_SUCCESS: return fetchPorfolioSuccess(state, action);
        case actionTypes.PORFOLIO_FAILURE: return fetchPorfolioFailure(state, action);
        default: 
            return state;
    }
}
