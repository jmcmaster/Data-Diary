import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Button
          onPress={this.props.onCancelEventHandler}
          title={this.props.cancelButtonLabel}
          color="#000"
          accessibilityLabel="Cancel new event"
        />
        <Text>Title</Text>
        <Button
          onPress={this.props.onAddEventHandler}
          title={this.props.addButtonLabel}
          color="#000"
          accessibilityLabel="Add new event"
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
  }
});

export default Header;