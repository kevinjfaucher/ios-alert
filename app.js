import React, { Component } from 'react';
import { View, Button, AlertIOS, Platform, StyleSheet } from 'react-native';

class IOSApp extends Component {
  
  // This function shows an alert message
  showIOSAlert = () => {
    AlertIOS.alert('Hello from iOS!');
  }

  render() {
    // If this isn't an iOS device, we won't show anything
    if (Platform.OS !== 'ios') return null;

    return (
      <View style={styles.container}>
        <Button title="Press me" onPress={this.showIOSAlert} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default IOSApp;
