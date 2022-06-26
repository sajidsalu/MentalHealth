import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import YogaScreen from '../screens/YogaScreen';

const Stack = createStackNavigator();

const FitnessStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="YogaScreen"
        component={YogaScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="FitnessScreen"
        component={FitnessScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="FitnessSubScreen"
        component={FitnessSubScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FitnessContent"
        component={FitnessContent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IndividualFitnessContent"
        component={IndividualFitnessContent}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default FitnessStackNavigator;
