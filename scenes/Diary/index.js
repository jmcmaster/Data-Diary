import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from '../../components/Header'

class Diary extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Feed</Text> 
      </View>
    );
  }
}

export default Diary;