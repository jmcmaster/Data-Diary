import React, { Component } from "react";
import { View, Alert, Text, SectionList, FlatList, StyleSheet } from "react-native";
import Moment from 'moment';
import Header from './components/Header'

class Diary extends Component {
  constructor(props) {
    super(props)
    Moment.locale('en');

    this.state = {
      listData: [        
        {
          datetime: "2018-01-03T13:07:46+00:00",
          eventType: "breakfast"
        },
        {
          datetime: "2018-01-04T00:02:23+00:00",
          eventType: "dinner"
        },
        {
          datetime: "2018-01-03T17:23:54+00:00",
          eventType: "lunch"
        },
        {
          datetime: "2018-01-02T05:21:38+00:00",
          eventType: "dinner"
        },
        {
          datetime: "2018-01-02T17:12:54+00:00",
          eventType: "lunch"
        },
        {
          datetime: "2018-01-02T06:54:25+00:00",
          eventType: "breakfast"
        },
        {
          datetime: "2018-01-02T10:39:17+00:00",
          eventType: "snack"
        },
        {
          datetime: "2018-01-01T12:41:25+00:00",
          eventType: "dinner"
        },
        {
          datetime: "2017-12-29T18:19:12+00:00",
          eventType: "breakfast"
        },
        {
          datetime: "2017-12-28T03:55:21+00:00",
          eventType: "dinner"
        },
        {
          datetime: "2017-12-28T16:44:32+00:00",
          eventType: "snack"
        },
        {
          datetime: "2017-12-28T01:00:46+00:00",
          eventType: "breakfast"
        }
      ],
      value: ""
    }

    this.handleAddEvent = this.handleAddEvent.bind(this)
  }

  sectionListDataReducer(data) {
    // Create key param for each object and format datime to locale
    let localeData = data.map((item) => {
      item.key = Moment(item.datetime).format('YYYY-MM-DD')
      return item
    });
    // Sort data by datetime
    localeData.sort((a,b) => {
      return Moment(b.datetime).unix() - Moment(a.datetime).unix()
    })
    // Reduce data for SectionList
    const groupedData = localeData.reduce((accumulator, currentValue, currentIndex, array, key = currentValue.key) => {
        const keyObjectPosition = accumulator.findIndex((item) => item.key == key)
        if (keyObjectPosition >= 0) {
          accumulator[keyObjectPosition].data.push(currentValue)
          return accumulator    
        } else {
          return accumulator.concat({ data: [currentValue], key: key })
        }
    }, [])

    return groupedData
  }

  handleAddEvent() {
    if (!this.state.value) return;    

    this.setState({
      listData:[
        ...this.state.listData,
        {
          datetime: Date.now(),
          eventType: this.state.value        
        }
      ],
      value: ""
    })

    Alert.alert(
      'Got it!',
      `${this.state.value} has been added.`,
      [                
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style="">
        <Header 
          value={this.state.value}
          onChange={(value) => this.setState({ value })}
          onAddEventHandler={this.handleAddEvent}
          addButtonLabel="Add"
        />
        <SectionList
          sections={this.sectionListDataReducer(this.state.listData)}          
          keyExtractor={item => item.datetime}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeader}>
              <Text>{Moment(section.key).format('MMM D')}</Text>
            </View>
          )}
          renderItem={({item}) => (
            <View style={styles.listRow}>              
              <Text style={styles.listRowItem}>{Moment(item.datetime).format('h:mm a')}</Text>
              <Text style={styles.listRowItem}>{item.eventType}</Text>              
              <Text style={styles.listRowItem}>{item.eventType.charAt(0).toUpperCase()}</Text>
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
    padding: 10,
    flex: 1,
    flexDirection: "row"
  },
  sectionHeader: {
    backgroundColor: "#EEE",
    padding: 10,
    paddingVertical: 5
  }
})

export default Diary;
