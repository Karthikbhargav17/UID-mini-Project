import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Button } from 'react-native';
import { firebase } from '../firebase/config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from './FirstPage';
import Products from './Products';
import Clothing from './Clothing';
import Electronics from './Electronics';
import Footwear from './Footwear';
import HomeAp from './HomeAppliances';
import Mobiles from './Mobiles';
import Jeans from './Jeans';
import JeansQR from './JeansQR';
import Shirt from './Shirt';
import ShirtQR from './ShirtQR';
import SweatShirt from './SweatShirt';
import SweatShirtQR from './SweatShirtQR';
import TV from './TV';
import TVQR from './TVQR';
import Fridge from './Fridge';
import FridgeQR from './FridgeQR';
import Shoe1 from './Shoe1';
import Shoe1QR from './Shoe1QR';
import Shoe2 from './Shoe2';
import Shoe2QR from './Shoe2QR';
import Shoe3 from './Shoe3';
import Shoe3QR from './Shoe3QR';
import Mixer_Grinder from './Mixer_Grinder';
import Mixer_GrinderQR from './Mixer_GrinderQR';
import Water_Purifier from './Water_Purifier';
import Water_PurifierQR from './Water PurifierQR';
import Mobile1 from './Mobile1';
import Mobile1QR from './Mobile1QR';
import Mobile2 from './Mobile2';
import Mobile2QR from './Mobile2QR';
const Stack = createNativeStackNavigator(); 
class Home extends Component {


  
    

    render() {
       return(
           <NavigationContainer independent={true}>
               <Stack.Navigator initialRouteName={FirstPage}>
                   <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown:false}}/>
                   <Stack.Screen name="Products" component={Products} />
                   <Stack.Screen name="Clothing" component={Clothing} />
                   <Stack.Screen name="Electronics" component={Electronics} />
                   <Stack.Screen name="Footwear" component={Footwear} />
                   <Stack.Screen name="Home Appliances" component={HomeAp} />
                   <Stack.Screen name="Jeans" component={Jeans} />
                   <Stack.Screen name="JeansQR" component={JeansQR} />
                   <Stack.Screen name="Mobiles" component={Mobiles} />
                   <Stack.Screen name="Shirt" component={Shirt} />
                   <Stack.Screen name="ShirtQR" component={ShirtQR} />
                   <Stack.Screen name="SweatShirt" component={SweatShirt} />
                   <Stack.Screen name="SweatShirtQR" component={SweatShirtQR} />
                   <Stack.Screen name="TV" component={TV} />
                   <Stack.Screen name="TVQR" component={TVQR} />
                   <Stack.Screen name="Fridge" component={Fridge} />
                   <Stack.Screen name="FridgeQR" component={FridgeQR} />
                   <Stack.Screen name="Shoe1" component={Shoe1} />
                   <Stack.Screen name="Shoe1QR" component={Shoe1QR} />
                   <Stack.Screen name="Shoe2" component={Shoe2} />
                   <Stack.Screen name="Shoe2QR" component={Shoe2QR} />
                   <Stack.Screen name="Shoe3" component={Shoe3} />
                   <Stack.Screen name="Shoe3QR" component={Shoe3QR} />
                   <Stack.Screen name="Mixer_Grinder" component={Mixer_Grinder} />
                   <Stack.Screen name="Mixer_GrinderQR" component={Mixer_GrinderQR} />
                   <Stack.Screen name="Water_Purifier" component={Water_Purifier} />
                   <Stack.Screen name="Water_PurifierQR" component={Water_PurifierQR} />
                   <Stack.Screen name="Mobile1" component={Mobile1} />
                   <Stack.Screen name="Mobile1QR" component={Mobile1QR} />
                   <Stack.Screen name="Mobile2" component={Mobile2} />
                   <Stack.Screen name="Mobile2QR" component={Mobile2QR} />


               </Stack.Navigator>
           </NavigationContainer>
       );
            
        
    }
}






export default Home;

