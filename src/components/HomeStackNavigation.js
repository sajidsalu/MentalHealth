import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import TrackPlayer from '../screens/TrackPlayer';
import TrackList from '../screens/TrackList';
// import TherapistProfile from '../screens/TherapistProfileScreen';
// import FitnessScreen from '../screens/FitnessScreen';
// import FitnessSubScreen from '../screens/FitnessSubScreen';
import ChatWithTink from '../screens/ChatWithTink';
import CreateMeme from '../screens/CreateMeme';
import QuizScreen from '../screens/QuizScreen';
import QuizResultScreen from '../screens/QuizResult';
import {useSelector} from 'react-redux';
import {getLoggedInUser, isFirstTimeLogin} from '../redux/reducers/auth';
// import BubbleWrapGame from '../screens/BubbleWrapGame';
// import PunchGame from '../screens/PunchGame';

const HomeStackNavigator = () => {
  const loggedInUser = useSelector(getLoggedInUser);
  const [initialRoute, setInitialRoute] = React.useState(() =>
    loggedInUser.isFirstTimeLogin ? 'QuizScreen' : 'Home',
  );
  useEffect(() => {
    setInitialRoute(loggedInUser.isFirstTimeLogin ? 'QuizScreen' : 'Home');
  }, [loggedInUser]);
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{headerShown: false, unmountOnBlur: 'true'}}
      />
      <Stack.Screen
        name="Chat"
        component={ChatWithTink}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateMeme"
        component={CreateMeme}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TrackList"
        component={TrackList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Track"
        component={TrackPlayer}
        options={{headerShown: false}}
      />
      {loggedInUser.isFirstTimeLogin && (
        <>
          <Stack.Screen
            name="QuizScreen"
            component={QuizScreen}
            initialParams={{index: 0}}
            options={{
              headerShown: false,
              tabBarStyle: {
                display: 'none',
              },
              tabBarButton: () => null,
            }}
          />
          <Stack.Screen
            name="QuizResultScreen"
            component={QuizResultScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
