import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreation from './components/EmployeeCreation';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = StackNavigator({
        login: { screen: LoginForm },
        employeeList: { screen: EmployeeList },
        employeeEdit: { screen: EmployeeEdit },
        employeeCreation: { screen: EmployeeCreation }
    }  
);

export default RouterComponent;
