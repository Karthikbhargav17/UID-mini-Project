import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View ,Image,Button, TouchableOpacity,BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/Logo.png'
export default class FirstPage extends Component{
    onPressFunction()
    {
        
            alert("Displays the brand of the product")
        
    }
    onExit()
    { BackHandler.exitApp();
    }
    Products()
    {
      this.props.navigation.navigate("Products")
    }
 render(){
  return (
    <View style={{alignItems: 'center', justifyContent:'center',paddingTop: 80,backgroundColor:"white"}}>
     <Image source={Logo} style={{height:100,width:100}}/>
     <Text style={{fontSize: 25,paddingBottom:50}}>Brand Identifier</Text>
    <TouchableOpacity onPress={()=>this.Products()} style={{marginVertical:10 ,borderRadius:10,backgroundColor: "#00008b",width:150,height:45,alignItems:"center",justifyContent:"center"}}>
    <Text style={{color:"#FFFFFF"}}>View Products</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>this.onExit()} style={{marginVertical:10 ,borderRadius:10,backgroundColor: "#00008b",width:150,height:45,alignItems:"center",justifyContent:"center"}}>
    <Text style={{color:"#FFFFFF"}}>Exit</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.onPressFunction}>
        <Text>About us</Text>
    </TouchableOpacity>
    <View style={{paddingTop:50}}>
      <Text>Contact us on</Text>
    </View>
    <View  style={{paddingTop:30,flexDirection:'row'}}>
      <TouchableOpacity><Icon name="logo-google" size={40} color="red" style={{paddingRight:10}}/></TouchableOpacity>
      <TouchableOpacity><Icon name="logo-facebook" size={40} color="#00008b" style={{paddingRight:10}}/></TouchableOpacity>
      <TouchableOpacity><Icon name="logo-instagram" size={40} color="pink" style={{paddingRight:10}}/></TouchableOpacity>
    </View>
    
    </View>
  );
}
}

