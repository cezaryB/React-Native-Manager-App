import firebase from 'firebase';
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift, navigation }) => {
    return dispatch => {
        console.log('it started');
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                navigation.navigate('employeeList');
            });
    };
};
