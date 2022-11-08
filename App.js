

import React, { Component } from 'react';
import { Text, View, Button, Platform,TextInput,StyleSheet } from 'react-native';

import DrawerNavigator from './navigators/drawerNavigator';
import LoginScreen from './screens/login';
import Reminder from './screens/reminder';
import Home from './screens/home'

import { createSwitchNavigator, createAppContainer } from "react-navigation";



import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  
  LoginScreen: LoginScreen,
  DrawerNavigator: DrawerNavigator
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator/>;
}
