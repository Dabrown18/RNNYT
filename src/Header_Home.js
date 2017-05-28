import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Provider } from 'react-redux';
import HomeScreen from './components/HomeScreen';
import createStore from './createStore';
import Header from './components/Header';

const store = createStore();

export default () => (
  <Provider store={store}>
    <View style={styles.section}>
      <View style={styles.headerSection}>
        <Header />
      </View>
      <View style={styles.homeSection}>
        <HomeScreen />
      </View>
    </View>
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
