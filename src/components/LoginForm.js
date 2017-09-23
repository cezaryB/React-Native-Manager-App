import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
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
                   <Button>Login</Button>
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

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);

