import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreation from './components/EmployeeCreation';

const RouterComponent = StackNavigator({
        login: { screen: LoginForm },
        employeeList: { screen: EmployeeList },
        employeeCreation: { screen: EmployeeCreation }
    }  
);

export default RouterComponent;
