import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import {useSelector} from 'react-redux';
import {getUserData} from '../redux/reducers/auth';

const Stack = createStackNavigator();

const LoginStackNavigation = () => {
  const user = useSelector(getUserData);
  return (
    <Stack.Navigator
      initialRouteName={user.length === 0 ? 'SignUp' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LoginStackNavigation;
