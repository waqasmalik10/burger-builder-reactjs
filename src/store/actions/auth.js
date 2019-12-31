import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBtGHiJ0e63A1_PT5lTwSXh5spb1SuiQRQ';
        if(!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBtGHiJ0e63A1_PT5lTwSXh5spb1SuiQRQ';
        }
        dispatch(authStart());
        const authData = {
            email: email, 
            password: password,
            returnSecureToken: true
        }
        axios.post(url, authData)
        .then(response => {
            console.log(response    );
            dispatch(authSuccess(response.data))
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail(err))
        })
    }
}