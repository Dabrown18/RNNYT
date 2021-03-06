import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image
          style={styles.logo}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5
  },
  logo: {
    width: 275,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
});
