import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from './components/Header'

class AddEvent extends Component {
  constructor(props) {
    super(props)

    this.handleAddEvent = this.handleAddEvent.bind(this)
    this.handleCancelEvent = this.handleCancelEvent.bind(this)
  }

  handleAddEvent() {

  }

  handleCancelEvent() {

  }

  render() {
    return (
      <View>
        <Header 
          onAddEventHandler={this.handleAddEvent}
          addButtonLabel="Add"
          onCancelEventHandler={this.handleCancelEvent}
          cancelButtonLabel="Cancel"
        />
        <Text>Feed</Text> 
      </View>
    );
  }
}

export default AddEvent;