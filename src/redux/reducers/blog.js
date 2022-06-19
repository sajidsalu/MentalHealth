import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {popular} from '../../constants/BlogData';
import {ADD_BLOGS} from '../actions/type';
// {
//     id: 1,
//     title: 'Mastering Depression and Living the Life You Were Meant to Live',
//     likes: 620,
//     image: 'https://miro.medium.com/max/2126/1*luCXoCDBjoqSHu7KqbfJiw.jpeg',
//     profilePic:
//       'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//     author: 'James Molly',
//   },
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
  switch (action.type) {
    case ADD_BLOGS: {
      const blogs = state.blogData;
      blogs.push(action.payload);
      return {
        ...state,
        blogData: blogs,
      };
    }
    default:
      return state;
  }
}
export default persistReducer(blogReducerConfig, blogReducer);
