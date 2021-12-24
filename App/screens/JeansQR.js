import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View ,Image,Button, TouchableOpacity,BackHandler,ScrollView,Dimensions} from 'react-native';
import { firebase,storageRef } from '../firebase/config';


class JeansQR extends Component{
 
    constructor(props)
    {
      super(props);
      this.state={
        imageRef: ''
        
      }
    }
   
    async getItems()
    {   
        let imageRef = storageRef.ref('Clothing/Jeans/QR code (7).jpg');
        imageRef
        .getDownloadURL()
        .then((url) => {
        //from url you can fetched the uploaded image easily
        this.setState({imageRef: url});
       
      })
    .catch((e) => console.log('getting downloadURL of image error => ', e));
  
    }
   
  
    componentDidMount(){
      this.getItems();
      
     
    }
    render()
    {
      return(
        <View  style={{alignItems:"center",justifyContent:"center"}}>
           <Image source={this.state.imageRef} style={{width:"100%",height:500}} />
           <View style={{alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>alert("Open QR Scanner from other device or Use built-in scanners")} style={{marginVertical:10 ,borderRadius:10,backgroundColor: "#00008b",width:150,height:45,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"#FFFFFF"}}>Scan QR</Text>
                </TouchableOpacity>
            </View>
        </View>
             
                
      );
    }
  }
  
  export default JeansQR;