import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {popular} from '../../constants/BlogData';
import {ADD_BLOGS} from '../actions/type';

const initialState = {
  blogData: popular,
};

const blogReducerConfig = {
  key: 'blogs',
  storage: AsyncStorage,
};
export const getBlogs = (state) => {
  return state.blogs.blogData;
};

function blogReducer(state = initialState, action) {
  const currentBlogs = state.blogData;
  switch (action.type) {
    case ADD_BLOGS: {
      console.log('add blog--------------');
      const blogs = [...currentBlogs];
      blogs.push(action.payload);
      return {
        ...state,
        blogData: blogs,
      };
    }
    default: {
      return state;
    }
  }
}
export default persistReducer(blogReducerConfig, blogReducer);
