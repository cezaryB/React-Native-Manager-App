import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

function Input({ label, onChangeText, value, placeholder, secureTextEntry }) {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
            secureTextEntry={secureTextEntry}
            autocorrect={false} 
            style={inputStyle} 
            value={value} 
            onChangeText={onChangeText} 
            placeholder={placeholder} />
        </View>    
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingBottom: 5,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    }
});

export { Input };