import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import AuthFlow from './AuthFlow';
import {PersistGate} from 'redux-persist/es/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthFlow />
      </PersistGate>
    </Provider>
  );
}
