import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CONCERN_UPDATE,
  UPDATE_USER,
  LOGIN_SUCCESS,
} from '../actions/type';

const initialState = {
  isLogin: false,
  user: null,
  profile: {
    name: 'Ritika Tomar',
  },
};
export const isLoggedIn = (state) => {
  return state.user;
};

export default function(state = initialState, action) {
  console.log(`${action.type} data is$ ${JSON.stringify(action.payload)}`);
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        profile: {name: action.payload.name},
        isLogin: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        user: null,
        profile: null,
        isLogin: false,
      };
    case CONCERN_UPDATE:
      return {
        ...state,
        profile:{concerns: action.payload},
      };
    case UPDATE_USER:
      return {
        ...state,
        // user:action.payload.user,
        profile: action.payload,
      };
    default:
      return state;
  }
}
