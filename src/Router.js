import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreation from './components/EmployeeCreation';

<<<<<<< HEAD
const RouterComponent = StackNavigator({
        login: { screen: LoginForm },
        employeeList: { screen: EmployeeList },
        employeeCreation: { screen: EmployeeCreation }
    }  
);
=======
const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene
                key='login'
                component={LoginForm}
                title='Please login'
                initial
            />
            <Scene
                key='employeeList'
                component={EmployeeList}
                title='Employees'
            />
        </Router>    
    );
};
>>>>>>> 56eea76007df85b03bbe9af0f7144d03485375ec

export default RouterComponent;
