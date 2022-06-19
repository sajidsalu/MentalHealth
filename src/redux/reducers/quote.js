import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {UPDATE_QUOTE_OF_THE_DAY} from '../actions/type';

const initialState = {
  quote: '',
};

const quoteReducerConfig = {
  key: 'quote',
  storage: AsyncStorage,
};
function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUOTE_OF_THE_DAY:
      console.log('acndkshdsahdsdhsjdhsjdhsjbjbuiuikj hksasjk', action.payload);
      return {
        ...state,
        quote: action.payload,
      };
    default:
      return state;
  }
}
export default persistReducer(quoteReducerConfig, quoteReducer);
