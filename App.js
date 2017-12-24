import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Diary from './scenes/Diary'
import AddEvent from './scenes/AddEvent'

export default class App extends Component {
  render() {
    return (
      <View>
        <Diary />
      </View>
    );
  }
}
