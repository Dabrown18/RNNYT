import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const Header = () => {

  return (
    <View style={styles.viewStyle}>
      <Image
        style={styles.logo}
        source={{uri: 'https://vignette4.wikia.nocookie.net/smurfs/images/a/a1/Netflix-logo.png/revision/latest?cb=20150508223333'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 120,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 20
  }
});

export  default Header;
