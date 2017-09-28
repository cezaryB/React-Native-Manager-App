import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

export default class EmployeeCreation extends Component {
    static navigationOptions = {
        title: 'Add employee',
        headerLeft: null
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jane'
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label='Phone number'
                        placeholder='501...'
                    />
                </CardSection>  
                <CardSection />  
                <CardSection>
                    <Button>Create</Button>
                </CardSection>      
            </Card>      
        );
    }
}
