import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert,
  Button,
  Image,
} from 'react-native';

import * as Notifications from 'expo-notifications';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import TimePicker from 'react-native-simple-time-picker';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      setDatePickerVisibility: false,
      setSelectedDate: '',
      selectedDate: '',
      selectedHours: 0,
      setSelectedHours: 0,
      selectedMinutes: 0,
      setSelectedMinutes: 0,
    };
  }
  showDatePicker = () => {
    this.setState({
      setDatePickerVisibility: true,
      isDatePickerVisible: true,
    });
  };
  handleConfirm = (date) => {
    this.setState({
      setSelectedDate: date,
    });
    console.log(date);
    dateSet = moment(this.state.setSelectedDate).format('MM/DD/YYYY');
    console.log(dateSet);
    this.setState({
      selectedDate: dateSet,
    });
    this.hideDatePicker();
  };

  hideDatePicker = () => {
    this.setState({
      setDatePickerVisibility: false,
      isDatePickerVisible: false,
    });
  };

  render() {

    const { isDatePickerVisible, setSelectedDate } = this.state;
    const {
      selectedHours,
      setSelectedHours,
      selectedMinutes,
      setSelectedMinutes,
    } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/background.png')} style = {{width:"100%", height:"100%",resizeMode:"cover"}}>
        <View style={styles.uppercontainer}>
          <View style={{ marginTop: 50 }}>
            <Text style={styles.text}>work on time</Text>
            <Text>
              {`Selected Date: ${
                setSelectedDate
                  ? moment(setSelectedDate).format('DD/MM/YYYY')
                  : ''
              }`}{' '}
            </Text>
            <Button title="please select date" onPress={this.showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
            />
          </View>
        </View>
        <View style={styles.lowercontainer}>
          <Text>
            Selected Time: {setSelectedHours}:{setSelectedMinutes}
          </Text>
          <TimePicker
            selectedHours={selectedHours}
            //initial Hourse value
            selectedMinutes={selectedMinutes}
            //initial Minutes value
            onChange={(hours, minutes) => {
              this.setState({
                setSelectedHours: hours,
                setSelectedMinutes: minutes,
              });
            }}
          />
        </View>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              await schedulePushNotification(
                setSelectedHours,
                setSelectedMinutes
              );
              await this.writeindb(
                setSelectedHours,
                setSelectedMinutes,
                name,
                moment(setSelectedDate).format('DD/MM/YYYY')
              );
            }}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          </ImageBackground>
      </View>
    );
  }
}

async function schedulePushNotification(setSelectedHours, setSelectedMinutes) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hey!! it's time",
      body: 'You have an appointment with the doctor ',
      data: { data: 'goes here' },
    },
    trigger: {
      hour: setSelectedHours,
      minute: setSelectedMinutes,
      repeats: true,
    },
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor:"#e11584"
  },
  text: {
    color: '#792d8f',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:"bold"
  },

  uppercontainer: {
    fles: 0.5,
    alignItems: 'center',
  },
  lowercontainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

});
