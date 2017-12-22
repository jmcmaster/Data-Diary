import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Diary from './scenes/Diary'

export default class App extends Component {
  render() {
    return (
      <View>
        <Diary />
      </View>
    );
  }
}
