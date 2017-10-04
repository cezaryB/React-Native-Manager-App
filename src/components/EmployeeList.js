import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: 'Employee list',
            headerLeft: null,
            headerRight: <Text onPress={() => params.handleClick()}>Add</Text>
        };
    }
    componentWillMount() {
        this.props.employeesFetch();
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

export default connect(null, { employeesFetch })(EmployeeList);
