import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default class Application extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello</Text>
                </View>    
            </Provider>    
        );
    }
}

