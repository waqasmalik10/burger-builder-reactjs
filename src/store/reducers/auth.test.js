import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            idToken: null, 
            userId: null,
            error: null,
            loading: null,
            authRedirectPath: '/'
        })
    });

    it('should store the token upon login', () => {
        expect(reducer({
            idToken: null, 
            userId: null,
            error: null,
            loading: null,
            authRedirectPath: '/'
        }, 
        {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-userId'
        })).toEqual(
            {
                idToken: 'some-token', 
                userId: 'some-userId',
                error: null,
                loading: false,
                authRedirectPath: '/'
            }
        )
    })
})