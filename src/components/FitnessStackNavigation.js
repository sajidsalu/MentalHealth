import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FitnessCategories from '../screens/yoga/FitnessCategoryList';
import FitnessDetails from '../screens/yoga/FitnessDetails';
import {colors} from '../constants/theme';

const Stack = createStackNavigator();

const FitnessStackNavigator = () => {
  return (
    <Stack.Navigator
      options={{
        headerShown: true,
        headerTintColor: colors.primary,
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen
        name="FitnessScreen"
        component={FitnessCategories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FitnessDetailsScreen"
        component={FitnessDetails}
        options={{
          headerShown: false,
        }}
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
