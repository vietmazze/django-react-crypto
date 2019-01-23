import axios from 'axios';
import * as actionTypes from './actionTypes';


export const userLoading= (user) => {
    return {
        type: actionTypes.USER_LOADING,
    }
}


export const userLoaded = (user) => {
    return {
        type: actionTypes.USER_LOADED,
        isAuthenticated:true,
        user: user
    }
}


export const loadUser = ()=> {
    return (dispatch,getState) => {
        dispatch(userLoading());
        const token = getState().auth.token;

        let headers = {
            "Content-Type" : "application/json",
        };

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }

        return axios.get("", {headers,})
            .then(response => {
                dispatch(userLoaded(response.data));
        })
        .catch( error => {
            console.log(error);
        })

    }
}