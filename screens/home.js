import React from 'react';
import { Image,Text, View,SafeAreaView,Platform,StatusBar ,StyleSheet} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      photoUrl : this.props.photoUrl
    }
  }
  render() {
    return (
      <View style={{backgroundColor:'#5653D4',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
      }}>
     <Image source={{uri:this.state.photoUrl}} 
     style={styles.profileImage}
     ></Image>
     <Text >Hello {this.state.name} 
     </Text>
     <Text > {this.state.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
profileImage:{
width:RFValue(140),
height:RFValue(140),
borderRadius:20
},

})
