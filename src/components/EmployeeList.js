import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: 'Employee list',
            headerLeft: null,
            headerRight: <Text onPress={() => params.handleClick()}>Add</Text>
        };
    }
    componentDidMount() {
        this.props.navigation.setParams({ handleClick: () => this.handleClick() });
    }
    handleClick() {
        this.props.navigation.navigate('employeeCreation');
    }
    showForm() {
        console.log('hello');
    }
    render() {
        return (
            <View>
                <Text>This is EmployeeList component</Text>
             </View>   
        );
    }
}

