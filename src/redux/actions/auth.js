import {REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS} from './type';
import axios from 'axios';
import {api_route} from '../../utils/route';
import {ToastAndroid} from 'react-native';
import {fetchQuoteOfTheDay} from './quote';

export const register = ({
  name,
  email,
  password,
  gender,
  age,
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const user = {name, email, password, age, gender};
  console.log('user details to signup', user);
  const body = JSON.stringify({name, email, password, age, gender});
  // console.log('action');
  console.log('axios', api_route + '/api/user');
  // console.log(body);
  try {
    //const res = await axios.post(`${api_route}/api/user`, body, config);
    dispatch({type: REGISTER_SUCCESS, payload: user});
  } catch (err) {
    ToastAndroid.show(err.response.data.errors[0].msg, ToastAndroid.SHORT);
  }
};

export const login = ({email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({email, password});
  console.log('user is', JSON.stringify(body));
  try {
    //const res = await axios.post(`${api_route}/api/auth`, body, config);
    dispatch({type: LOGIN_SUCCESS, payload: body});

    //dispatch(fetchQuoteOfTheDay());
  } catch (err) {
    ToastAndroid.show(err.response.data.errors[0].msg, ToastAndroid.SHORT);
  }
};
