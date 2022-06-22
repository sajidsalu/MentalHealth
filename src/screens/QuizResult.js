import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getLoggedInUser} from '../redux/reducers/auth';
import {getScoreOfTheQuiz} from '../redux/reducers/quiz';
import {resetFirstTimeLogin} from '../redux/actions/auth';

const QuizResultScreen = () => {
  const navigation = useNavigation();
  const loggedInUser = useSelector(getLoggedInUser);
  const scoreInRedux = useSelector(getScoreOfTheQuiz);
  const dispatch = useDispatch();

  return (
    <View style={styles.cogratsScreen}>
      <Text style={styles.congratsText}>
        Congratulations {loggedInUser.name}, You've scored {scoreInRedux} points
      </Text>
      <TouchableOpacity
        style={styles.Option}
        onPress={() => {
          dispatch(resetFirstTimeLogin());
          navigation.navigate('Home');
        }}>
        <Text style={styles.OptionText}>Proceed to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizResultScreen;

const styles = StyleSheet.create({
  cogratsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratsText: {
    fontSize: 26,
    textAlign: 'center',
  },
  Option: {
    borderColor: 'black',
    borderWidth: 3,
    margin: 40,
    marginBottom: 3,
    borderRadius: 25,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDECEC',
  },
  OptionText: {
    fontSize: 26,
    padding: 10,
  },
});
