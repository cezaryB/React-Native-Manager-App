import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    onRowPress() {
        this.props.navigation.navigate('employeeEdit', {
            employee: this.props.employee.item
        });
    }
    render() {
        const { name } = this.props.employee.item;
        console.log(this.props);
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>            
        );
    }
}

export default ListItem;

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});
