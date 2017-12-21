import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bad} />
        <View style={styles.ok} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  bad: {
    borderColor: 'blue',
    borderRadius: 50,
    borderWidth: 10,
    height: 50,
    width: 50,
    margin: 5,
  },

  ok: {
    backgroundColor: 'blue',
    borderRadius: 50,
    height: 50,
    width: 50,
    margin: 5,
  }
});
