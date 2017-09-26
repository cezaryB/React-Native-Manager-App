import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>    
        );
    }
}

