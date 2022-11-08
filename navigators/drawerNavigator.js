import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from '../screens/home'
import Reminder from '../screens/reminder'
import Logout from '../screens/logout'

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {

renderHome = props =>{
  return <Home email = {this.props.navigation.getParam('email')}
  name = {this.props.navigation.getParam('name')}
  photoUrl = {this.props.navigation.getParam('photoUrl')}
  />
}



  render(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={this.renderHome} />
        <Drawer.Screen name="Reminder" component={Reminder} />
         <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
  }
}


