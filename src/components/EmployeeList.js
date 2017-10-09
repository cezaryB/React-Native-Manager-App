import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


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
        // this.createDataSource(this.props);
    }
    componentDidMount() {
        this.props.navigation.setParams({ handleClick: () => this.handleClick() });
    }
    // componentWillReceiveProps(nextProps) {
    //     this.createDataSource(nextProps);
    // }
    // createDataSource({ employees }) {
    //     const ds = new ListView.DataSource({
    //         rowHasChanged: (r1, r2) => r1 !== r2
    //     });
    //     this.dataSource = ds.cloneWithRows(employees);
    // }
    handleClick() {
        this.props.navigation.navigate('employeeCreation');
    }
    showForm() {
        console.log('hello');
    }
    renderItem(employee) {
        return <ListItem employee={employee} navigation={this.props.navigation} />;
    }
    render() {
        return (
            <FlatList 
            data={this.props.employees}
            renderItem={this.renderItem.bind(this)}
            navigation={this.props.navigation}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return {
        employees
    };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
