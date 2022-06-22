import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {UPDATE_SCORE} from '../actions/type';

const initialState = {
  quizScore: 0,
  userId: 0,
};

const quizReducerConfig = {
  key: 'quiz',
  storage: AsyncStorage,
};

export const getScoreOfTheQuiz = (state) => {
  return state.quiz.quizScore;
};

function quizReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCORE: {
      const score = state.quizScore;
      return {
        ...state,
        quizScore: Number(score) + Number(action.payload),
      };
    }
    default:
      return state;
  }
}
export default persistReducer(quizReducerConfig, quizReducer);
