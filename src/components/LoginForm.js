import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
        console.log(this.props.password);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    render() {
        return (
           <Card>
               <CardSection>
                   <Input 
                    label='Email'
                    value={this.props.email}
                    placeholder='email@gmail.com'
                    onChangeText={this.onEmailChange.bind(this)}
                   />
               </CardSection>
               <CardSection>
                    <Input 
                    label='Password'
                    value={this.props.password}
                    placholder='password'
                    secureTextEntry
                    onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Text>Some text</Text>
                </CardSection>        
               <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
               </CardSection>       
           </Card>    
        );
    }
}

const mapStateToProps = ({ auth: { email, password } }) => {
    return {
        email,
        password
    };
};

export default connect(mapStateToProps, { 
    emailChanged, 
    passwordChanged, 
    loginUser 
})(LoginForm);

