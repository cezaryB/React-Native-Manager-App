import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    render() {
        return (
           <Card>
               <CardSection>
                   <Input 
                    label='Email'
                    placeholder='email@gmail.com'
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

export default LoginForm;

