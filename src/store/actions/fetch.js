import axios from 'axios';
import * as actionTypes from './actionTypes';


export const fetchCoincapSuccess= coincap => {
    return {
        type: actionTypes.COINCAP_SUCCESS,
        data:coincap
    }
}

export const fetchCoincapFailure = error => {
    return {
        type: actionTypes.COINCAP_FAILURE,
        error: error
    }
}




export const fetchCoincap = () => {
    return (dispatch) => {
        return axios.get("http://django-react-crypto.herokuapp.com/api/coincap/")
            .then(response => {
                console.log(response.data);
                dispatch(fetchCoincapSuccess(response.data));
                
        })
        .catch(error => {
            dispatch(fetchCoincapFailure(error));
        })
    }
}

///////////////////////////////////////////////////////////////////////////////////////////

export const fetchCoinformSuccess= status => {
    return {
        type: actionTypes.COINFORM_SUCCESS,
        status:status
    }
}

export const fetchCoinformFailure = error => {
    return {
        type: actionTypes.COINFORM_FAILURE,
        error: error
    }
}




export const fetchCoinform = (postObj) => {
    return (dispatch,getState) => {
        console.log('Received values of form: ', postObj);
        const token =getState().authReducer.token;
        axios.defaults.headers = {
            'Content-Type': "application/json",
            Authorization: `Token ${token}`
        }
        return axios.post("http://django-react-crypto.herokuapp.com/api/coinform/create/", postObj)
               .then(response => {
                   dispatch(fetchCoinformSuccess(response.status));
                   console.log(response.status);
                   dispatch(fetchPorfolio(token));
                   dispatch(fetchCoinformdetail(token));
                   
              
                
               })
        .catch(error => {
            dispatch(fetchCoinformFailure(error));
        })

    }
}
/////////////////////////////////////////////////////////////////////////////
export const fetchCoinformdetailSuccess= data => {
    return {
        type: actionTypes.COINFORMDETAIL_SUCCESS,
        data: data
    }
}

export const fetchCoinformdetailFailure = error => {
    return {
        type: actionTypes.COINFORMDETAIL_FAILURE,
        error: error
    }
}


export const fetchCoinformdetail = (token)  => {
    return (dispatch,getState) => {
               // dispatch(fetchPorfolioStart());
        // const token =getState().authReducer.token;
        axios.defaults.headers = {
            'Content-Type': "application/json",
            Authorization: `Token ${token}`
        }
        return axios.get("http://django-react-crypto.herokuapp.com/api/coinform/")
            .then(response => {
                // console.log(response.data.filter(el => {

                //     return el.symbol === 'BTC';
                  
                //   }).map(({symbol,quantity}) => {
                  
                //     return {symbol,quantity};
                  
                //   }));
                dispatch(fetchCoinformdetailSuccess(response.data));
                
        })
        .catch(error => {
            dispatch(fetchCoinformdetailFailure(error));
        })
    }
}



/////////////////////////////////////////////////////////////////////////////

export const fetchPorfolioStart= porfolio => {
    return {
        type: actionTypes.PORFOLIO_START,
        loading:true
    }
}



export const fetchPorfolioSuccess= porfolio => {
    return {
        type: actionTypes.PORFOLIO_SUCCESS,
        data:porfolio
    }
}

export const fetchPorfolioFailure = error => {
    return {
        type: actionTypes.PORFOLIO_FAILURE,
        error: error
    }
}




export const fetchPorfolio = (token)  => {
    return (dispatch,getState) => {
                // dispatch(fetchPorfolioStart());
        // const token =getState().authReducer.token;
        axios.defaults.headers = {
            'Content-Type': "application/json",
            Authorization: `Token ${token}`
        }
        return axios.get("http://django-react-crypto.herokuapp.com/api/porfolio/")
            .then(response => {
                console.log(response.data);
                dispatch(fetchPorfolioSuccess(response.data));
                
        })
        .catch(error => {
            dispatch(fetchPorfolioFailure(error));
        })
    }
}

