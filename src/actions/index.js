import firebase from 'firebase';

import {  
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START  
} from './types';

const loginUserSuccess = (dispatch, user, navigation) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    navigation.navigate('employeeList');
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

export const emailChanged = (text) => ({
        type: EMAIL_CHANGED,
        payload: text
    });

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
});

export const loginUser = ({ email, password, navigation }) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER_START
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user, navigation))
            .catch(err => {
                console.log(err);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user, navigation))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};
