import {CONCERN_UPDATE, UPDATE_USER, UPDATE_USER_DATA} from './type';
import axios from 'axios';
import {ToastAndroid} from 'react-native';
import {api_route} from '../../utils/route';

export const updateConcerns = (concerns, uid) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({concerns});
  try {
    // const res = await axios.post(
    //   `${api_route}/api/profile/add-concerns`,
    //   body,
    //   config
    // );
    dispatch({
      type: CONCERN_UPDATE,
      payload: body,
    });
    ToastAndroid.show('Concerns updated', ToastAndroid.SHORT);
  } catch (err) {
    ToastAndroid.show('Something went wrong!', ToastAndroid.SHORT);
  }
};

export const updateUser = (
  name,
  email,
  phone_no,
  age,
  gender,
  concerns,
  uid,
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    name,
    email,
    phone_no,
    age,
    gender,
    concerns,
    uid,
  });
  try {
    const res = await axios.post(
      `${api_route}/api/profile/edit-profile`,
      body,
      config,
    );
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
    ToastAndroid.show('Succesfully Updated Profile', ToastAndroid.SHORT);
  } catch (err) {
    ToastAndroid.show('Something went wrong!', ToastAndroid.SHORT);
  }
};

export function updateUserConcerns(userConcerns) {
  return {
    type: CONCERN_UPDATE,
    payload: userConcerns,
  };
}

export function updateUserData(user) {
  return {
    type: UPDATE_USER_DATA,
    payload: user,
  };
}
