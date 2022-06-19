import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CONCERN_UPDATE,
  UPDATE_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  UPDATE_USER_DATA,
} from '../actions/type';
import user from './user';
import find from 'lodash';
const initialState = {
  isLogin: false,
  user: [],
  profile: {
    name: 'Ritika Tomar',
  },
  loggedInUser: {},
};
export const isLoggedIn = (state) => {
  return state.auth.user;
};
export const getUserData = (state) => {
  return state.auth.user;
};
export const getLoggedInUser = (state) => {
  return state.auth.loggedInUser;
};

const authReducerConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      const userData = state.user;
      userData.push(action.payload);
      return {
        ...state,
        user: userData,
        isLogin: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggedInUser: action.payload,
        isLogin: true,
      };
    }
    case REGISTER_FAIL:
      return {
        ...state,
        user: null,
        profile: null,
        isLogin: false,
      };
    case CONCERN_UPDATE: {
      console.log(
        'logged in user',
        state.loggedInUser,
        state.loggedInUser.name,
      );
      return {
        ...state,
        user: state.user.map((user, i) =>
          user.email === state.loggedInUser.email
            ? {...user, concerns: action.payload}
            : user,
        ),
        loggedInUser: {...state.loggedInUser, concerns: action.payload},
      };
    }
    case UPDATE_USER:
      return {
        ...state,
        // user:action.payload.user,
        profile: action.payload,
      };
    case LOGOUT_USER: {
      return {
        ...state,
        loggedInUser: {},
        isLogin: false,
      };
    }
    case UPDATE_USER_DATA: {
      console.log('user data update ', action.payload);
      const updatedUser = action.payload;
      return {
        ...state,
        loggedInUser: updatedUser,
        user: state.user.map((user, i) =>
          user.email === updatedUser.email ? {...user, updatedUser} : user,
        ),
      };
    }
    default:
      return state;
  }
}

export default persistReducer(authReducerConfig, authReducer);
