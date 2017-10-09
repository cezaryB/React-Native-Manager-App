import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';

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
            uid: this.props.navigation.state.params.employee.uid 
        });
    }
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save changes</Button>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
