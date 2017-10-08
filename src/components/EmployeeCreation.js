import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeUpdate } from '../actions/EmployeeActions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreation extends Component {
    static navigationOptions = {
        title: 'Add employee',
        headerLeft: null
    }
    onButtonPress() {
        const { name, phone, shift, navigation } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday', navigation });
    }
    render() {
        console.log(this.props.navigation.state);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>      
            </Card>      
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreation);
