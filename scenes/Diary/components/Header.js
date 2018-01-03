import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          value={this.props.value}
          onSubmitEditing={this.props.onAddEventHandler}
          placeholder="What did you do today?"
          blurOnSubmit={false}
          placeholderTextColor="white"
          returnKeyType="done"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    height: 70,
    backgroundColor: 'powderblue',
    paddingTop: 30,
  },
  input: {
    flex: 1,
    backgroundColor: 'gray',
    color: 'white',
    padding: 10,
    height: 50,
  }
});

export default Header;