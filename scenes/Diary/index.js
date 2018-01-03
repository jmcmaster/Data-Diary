import React, { Component } from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import Moment from 'moment';
import Header from './components/Header'

class Diary extends Component {
  constructor(props) {
    super(props)
    Moment.locale('en');

    this.state = {
      listData: [
        {
          data: [
            {
              datetime: '2017-12-24T05:17:59+00:00',
              eventType: "Dinner"
            }
          ],
          key: '2017-12-24'
        },
        {
          data: [
            {
              datetime: '2017-12-23T03:02:35+00:00',
              eventType: "Breakfast"
            },
            {
              datetime: '2017-12-23T12:32:15+00:00',
              eventType: "Lunch"
            },
            {
              datetime: '2017-12-23T12:24:21+00:00',
              eventType: "Dinner"
            }
          ],
          key: '2017-12-23'
        },
        {
          data: [
            {
              datetime: '2017-12-22T02:57:32+00:00',
              eventType: "Breakfast"
            }
          ],
          key: '2017-12-22'
        }      
      ]
    }

    this.handleAddEvent = this.handleAddEvent.bind(this)
  }

  handleAddEvent() {
    console.log('accecpted')
  }

  render() {
    return (
      <View style="">
        <Header 
          onAddEventHandler={this.handleAddEvent}
          addButtonLabel="Add"
        />
        <SectionList
          sections={this.state.listData}
          keyExtractor={item => item.datetime}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeader}>
              <Text>{Moment(section.key).format('ddd MMM D')}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={styles.listRow}>              
              <Text style={styles.listRowItem}>{Moment(item.datetime).format('h:mm a')}</Text>
              <Text style={styles.listRowItem}>{item.eventType}</Text>              
              <Text style={styles.listRowItem}>{item.eventType.charAt(0)}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  listRow: {
    flex: 1,
    flexDirection: "row"
  },
  listRowItem: {
    flex: 1,
    flexDirection: "row"
  },
  sectionHeader: {
    backgroundColor: "#EEE"
  }
})

export default Diary;
