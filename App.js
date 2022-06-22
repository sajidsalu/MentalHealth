import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import AuthFlow from './AuthFlow';
import {PersistGate} from 'redux-persist/es/integration/react';
import QuizScreen from './src/screens/QuizScreen';
import {StateProvider} from './src/utils/useStateProvider';
import quizReducer, {initialState} from './src/redux/reducers/quiz';
export default function App() {
  return (
    <StateProvider initialState={initialState} reducer={quizReducer}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthFlow />
        </PersistGate>
      </Provider>
    </StateProvider>
  );
}
