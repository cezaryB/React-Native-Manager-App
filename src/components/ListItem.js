import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { name } = this.props.employee.item;
        console.log(this.props);
        return (
            <CardSection>
                <Text style={styles.titleStyle}>{name}</Text>
            </CardSection>    
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
