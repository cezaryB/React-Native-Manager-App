import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class EmployeeCreation extends Component {
    static navigationOptions = {
        title: 'Add employee',
        headerLeft: null
    }
    render() {
        return (
            <View>
                <Text>Employee creation form</Text>
            </View>    
        );
    }
}
