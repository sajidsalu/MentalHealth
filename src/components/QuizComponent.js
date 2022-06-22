import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {quiz as Questions} from '../constants/quizQuestions';
import {UPDATE_SCORE} from '../redux/actions/type';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const Quiz = (props) => {
  const navigation = useNavigation();
  const [score, setScore] = React.useState(0);
  const dispatch = useDispatch();

  const updateScore = (option) => {
    setScore(Number(score + option));
    dispatch({
      type: UPDATE_SCORE,
      payload: option,
    });
    if (props.qnIndex + 1 >= Questions.questions.length) {
      navigation.navigate('QuizResultScreen');
    } else {
      navigation.navigate('QuizScreen', {
        index: props.qnIndex + 1,
      });
    }
  };

  return (
    <TouchableOpacity
      style={[styles.Option]}
      onPress={() => {
        console.log(props.optionIdx);
        updateScore(props.optionIdx);
      }}>
      <Text style={styles.OptionText}>{props.value}</Text>
    </TouchableOpacity>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  Option: {
    borderColor: 'black',
    borderWidth: 3,
    margin: 20,
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
