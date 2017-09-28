import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    static navigationOptions = {
        title: 'Please login',
    }
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
        console.log(this.props.password);
    }
    onButtonPress() {
        const { email, password, navigation } = this.props;
        this.props.loginUser({ email, password, navigation });
        console.log(this.props.navigation);
    }
    renderButton() {
        if (!this.props.loading) {
            return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
        }
        return <Spinner size='large' />;
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
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>      
               <CardSection>
                   {this.renderButton()}
               </CardSection>       
           </Card>    
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

const mapStateToProps = ({ auth: { email, password, user, error, loading } }) => {
    return {
        email,
        password,
        user,
        error,
        loading
    };
};

export default connect(mapStateToProps, { 
    emailChanged, 
    passwordChanged, 
    loginUser 
})(LoginForm);

