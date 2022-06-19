import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {concerns} from '../../constants/concerns';
import {SET_USER, UPDATE_USER} from '../actions/type';

const initialState = {
  uid: '5fa3dca1f9cccc112e458fff',
  name: 'Camilla',
  email: 'camilla@gmail.com',
  bio: '',
  gender: 'female',
  age: '18',
  phone_no: '123456789',
  concerns: concerns,
  loggedInUser: {},
};

const userReducerConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, ...action.payload};

    case UPDATE_USER:
      return {...state, ...action.payload};

    default:
      return state;
  }
};
export default persistReducer(userReducerConfig, userReducer);
