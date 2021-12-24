import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View ,Image,Button, TouchableOpacity,BackHandler,ScrollView,Dimensions} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import { firebase,storageRef } from '../firebase/config';
import { Rating } from 'react-native-ratings';
const images=[]

class Mixer_Grinder extends Component{
 
    constructor(props)
    {
      super(props);
      this.state={
        imageRef1: '',
        imageRef2: ''
      }
    }
   
    async getItems1()
    {   
        let imageRef = storageRef.ref('/Home_Appliances/Mixer Grinder/mixer grinder.jpg');
        imageRef
        .getDownloadURL()
        .then((url) => {
        //from url you can fetched the uploaded image easily
        this.setState({imageRef1: url});
        images.push(url)
      })
    .catch((e) => console.log('getting downloadURL of image error => ', e));
  
    }
    async getItems2()
    {   
        let imageRef = storageRef.ref('/Home_Appliances/Mixer Grinder/mixergrinder2 (1).jfif');
        imageRef
        .getDownloadURL()
        .then((url) => {
        //from url you can fetched the uploaded image easily
        this.setState({imageRef2: url});
        images.push(url)
      })
    .catch((e) => console.log('getting downloadURL of image error => ', e));
  
    }
  
    componentDidMount(){
      this.getItems1();
      this.getItems2();
      console.log(images);
    }
    render()
    {
      return(
        <View  style={{marginTop:50,width:'100%',height:800}}>
             <ImageSlider  images={images}/>
             
             <Rating
            showRating
            color="black"
            defaultRating={4.5}
            count={5}
            style={{ paddingVertical: 10 }}
            />
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Mixer_GrinderQR")}} style={{marginVertical:10 ,borderRadius:10,backgroundColor: "#00008b",width:150,height:45,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"#FFFFFF"}}>Generate QR</Text>
                </TouchableOpacity>
            </View>
            
        </View>
             
                
      );
    }
  }
  
  export default Mixer_Grinder;