import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions/EmployeeActions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                        <Input
                            label='Name'
                            placeholder='Jane'
                            value={this.props.name}
                            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input 
                            label='Phone number'
                            placeholder='501...'
                            value={this.props.phone}
                            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                        />
                    </CardSection>  
                    <CardSection style={{ flexDirection: 'column' }}>
                        <Text style={styles.pickerTextStyle}>Shift</Text>
                        <Picker
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        >
                            <Picker.Item label='Monday' value='Monday' />
                            <Picker.Item label='Tuesday' value='Tuesday' />
                            <Picker.Item label='Wednesday' value='Wednesday' />
                            <Picker.Item label='Thursday' value='Thursday' />
                            <Picker.Item label='Friday' value='Friday' />
                            <Picker.Item label='Saturday' value='Saturday' />
                            <Picker.Item label='Sunday' value='Sunday' />
                        </Picker>    
                    </CardSection>
                </View>  
        );
    }
}

const styles = StyleSheet.create({
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
});

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};
    
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
