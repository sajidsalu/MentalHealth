import {createStore, applyMiddleware, combineReducers} from 'redux';

import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import persistStore from 'redux-persist/es/persistStore';

import authReducer from './reducers/auth';
import quoteReducer from './reducers/quote';
import userReducer from './reducers/user';
import persistReducer from 'redux-persist/es/persistReducer';
import journalsReducer from './reducers/journals';
import blogReducer from './reducers/blog';
import quizReducer from './reducers/quiz';
const rootReducerConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'quote', 'auth', 'journals', 'blogs', 'quiz'],
};

const rootReducer = persistReducer(
  rootReducerConfig,
  combineReducers({
    user: userReducer,
    quote: quoteReducer,
    auth: authReducer,
    journals: journalsReducer,
    blogs: blogReducer,
    quiz: quizReducer,
  }),
);

//const store = createStore(rootReducer, applyMiddleware(thunk));

function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
const store = configureStore();
export const persistor = persistStore(store);
export default store;
