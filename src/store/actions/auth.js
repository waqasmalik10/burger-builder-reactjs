import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
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
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch(err => {
            console.log("Error is here ", err.response.data.error.message);
            dispatch(authFail(err.response.data.error.message))
        })
    }
}