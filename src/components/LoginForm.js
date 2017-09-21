import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import * as actions from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {

    }
    render() {
        return (
           <Card>
               <CardSection>
                   <Input 
                    label='Email'
                    placeholder='email@gmail.com'
                    onChangeText={this.EmailChange.bind(this)}
                   />
               </CardSection>
                    <Input 
                    label='Password'
                    placholder='password'
                    secureTextEntry
                    />
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

export default connect(null, actions)(LoginForm);

