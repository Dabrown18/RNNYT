import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux';
import NavContainer from './containers/NavContainer';
import createStore from './createStore';
import Header from './components/Header';

const store = createStore();

export default () => (
  <Provider store={store}>
    <NavContainer />
  </Provider>
);

const styles = StyleSheet.create({
  section: {
    flex: 1
  },
  headerSection: {
    flex: 1.28
  },
  homeSection: {
    flex: 8.5
  }
});
