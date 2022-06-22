/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Quiz from '../components/QuizComponent';
import {quiz as Questions} from '../constants/quizQuestions';

export default function QuizScreen({route}) {
  const navigation = useNavigation();
  const {index} = route.params;

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.questionNo}>
          {index + 1}/{Questions.questions.length}
        </Text>
      </View>
      <Text style={styles.Question}>{Questions.questions[index].question}</Text>
      {Questions.questions[index].answers.map((option, i) => (
        <Quiz
          value={option}
          navigation={navigation}
          optionIdx={Number(i + 1)}
          qnIndex={index}
          key={i}
        />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  questionNo: {
    color: 'red',
    fontSize: 25,
    margin: 20,
  },
  Question: {
    fontSize: 30,
    margin: 25,
  },
  nextButton: {
    height: 50,
    width: '20%',
    backgroundColor: '#3700B3',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 20,
    borderRadius: 15,
  },
  nextText: {
    color: 'white',
    fontWeight: '900',
  },
});
