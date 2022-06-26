/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getLoggedInUser} from '../redux/reducers/auth';
import {getScoreOfTheQuiz} from '../redux/reducers/quiz';
import {resetFirstTimeLogin} from '../redux/actions/auth';
import {DataTable} from 'react-native-paper';
import { calculateConcernScores, getConcernName } from '../utils/user-concerns-utils';
import { updateUserConcerns } from '../redux/actions/profile';

const QuizResultScreen = () => {
  const navigation = useNavigation();
  // const loggedInUser = useSelector(getLoggedInUser);
  // const scoreInRedux = useSelector(getScoreOfTheQuiz);
  const dispatch = useDispatch();
  const route = useRoute();
  let {questions} = route.params;
  const [userConcerns, setUserConcerns] = React.useState([]);

  const calculateScores = () =>{
   const userConcern = calculateConcernScores(questions);
   const userConcernAsKeyValue = Object.entries(userConcern).map(([key, value]) => ({key,value}));
   setUserConcerns(userConcernAsKeyValue);
  };

  useEffect(() => {
    calculateScores();
  }, []);

  return (
    <View style={styles.congratsScreen}>
      <DataTable style={styles.DataTable}>
        <DataTable.Header>
          <DataTable.Title>User Concerns</DataTable.Title>
          <DataTable.Title numeric>Score</DataTable.Title>
        </DataTable.Header>

        {userConcerns.map((item)=>{
            return (
              <DataTable.Row key={item.key}>
                 <DataTable.Cell>{getConcernName(item.key)}</DataTable.Cell>
                 <DataTable.Cell numeric>{item.value}</DataTable.Cell>
              </DataTable.Row>
            );
        })}
      </DataTable>
      <TouchableOpacity
        style={styles.Option}
        onPress={() => {
          dispatch(resetFirstTimeLogin());
          dispatch(updateUserConcerns(userConcerns));
          navigation.navigate('Home');
        }}>
        <Text style={styles.OptionText}>Proceed to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizResultScreen;

const styles = StyleSheet.create({
  congratsScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  congratsText: {
    fontSize: 26,
    paddingLeft: 10,
    paddingRight: 10,
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
  DataTable :{marginTop: 20, padding: 10},
});
