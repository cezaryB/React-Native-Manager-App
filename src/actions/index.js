import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';


export const emailChanged = (text) => ({
        type: EMAIL_CHANGED,
        payload: text
    });

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
});

export const loginUser = ({ email, password }) => {
 firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
        console.log(user);
    })
    .catch(err => {
        console.log(err);
    });
};
