import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {color} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import YogaScreenOne from './YogaScreenOne';
import YogaScreenTwo from './YogaScreenTwo';
import {colors} from '../../constants/theme';
import FitnessCategories from './FitnessCategoryList';

// function AddBlogScreen() {
//   return <BlogMainScreen />;
// }

// function AddJournalScreen() {
//   return <JournalScreen />;
// }

const Tab = createMaterialTopTabNavigator();
function YogaTabScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20,
        },
        style: {backgroundColor: '#74b35b'},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Add Blog') {
            return <Feather name="home" size={size} color={color} />;
          } else if (route.name === 'My Journals') {
            return <Entypo name="book" size={size} color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Fitness Category" component={FitnessCategories} />
      <Tab.Screen name="Yoga" component={YogaScreenOne} />
      <Tab.Screen name="Fitness" component={YogaScreenTwo} />
    </Tab.Navigator>
  );
}

export default YogaTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
