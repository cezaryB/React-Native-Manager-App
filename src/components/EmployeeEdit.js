import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {
    componentWillMount() {
        const { employee } = this.props.navigation.state.params;
        _.each(employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        }); 
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, 
            phone, 
            shift, 
            uid: this.props.navigation.state.params.employee.uid,
            navigation: this.props.navigation 
        });
    }
    onTextPress() {
        console.log('text!');
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save changes</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text user</Button>
                </CardSection>    
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
