import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';
import HomeScreen from './HomeScreen';

export default class App extends Component {
  render() {
    return(
      <View style={styles.section}>
        <View style={styles.headerSection}>
          <Header />
        </View>
        <View style={styles.homeSection}>
          <HomeScreen />
        </View>
      </View>
    );
  }
}

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
