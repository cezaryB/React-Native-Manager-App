import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class Application extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDtaXBoidF8Vn3QkEStSUyU4T50F7xPSrM',
            authDomain: 'manager-app-c39fa.firebaseapp.com',
            databaseURL: 'https://manager-app-c39fa.firebaseio.com',
            projectId: 'manager-app-c39fa',
            storageBucket: 'manager-app-c39fa.appspot.com',
            messagingSenderId: '130746645634'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello</Text>
                    <LoginForm />
                </View>    
            </Provider>    
        );
    }
}

