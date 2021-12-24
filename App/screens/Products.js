import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View ,Image,Button, TouchableOpacity,BackHandler, TextInput,FlatList,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/Logo.png'
import { SearchBar } from 'react-native-elements';
import { ListItem,Avatar } from 'react-native-elements';
var name=''
const DATA = [
  {
    id:"1",
    title:"Clothing",
    image:require ("../assets/cloth.png")
  },
  {
    id:"2",
    title:"Electronics",
    image: require("../assets/laptop.png")
   
  },
  {
    id:"3",
    title:"Footwear",
    image: require("../assets/shoe.png")
  },
  {
    id:"4",
    title:"Home Appliances",
    image: require("../assets/mixer.jpg")
   
  },
  {
    id:"5",
    title:"Mobiles",
    image: require("../assets/mobile.jpg")
  }
];
const Item = ({title}) => {
  return( 
    <View style={styles.item}>

      <Text>{title}</Text>
    </View>
  );
}
export default class FirstPage extends Component{

   renderItem = ({item})=>( 
    <Item title={item.title}/>
  );
    constructor(props){
        super(props);
       
        this.state = {
        search: '',
        filteredList: DATA,
        Products: [] };
    };
    updateSearch = (search) => {
      this.setState({ search });
      this.setState({
          filteredList: DATA.filter(i=>
              i.title.toLowerCase().includes(search.toLowerCase()),),
      });

    }
   /* renderMainCategories()
    {   const prod = ['Clothing','Electronics','Mobiles','Footwear']
        return(
           prod.forEach((item)=>{
          <ListItem>{item}</ListItem>
           })
        )
    }*/
   
 render(){
  const { search } = this.state;
  
  return (
    
    <View style={{backgroundColor: "#FFFFFF"}}>
        <SearchBar style={{backgroundColor: "#FFFFFF"}}
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
                />
            <View style={{paddingBottom:30,paddingTop:15}}>
            <Text style={{paddingLeft:150,fontWeight:1000,fontSize:25}}>Main <Text style={{color:"green"}}>Categories</Text></Text>
            </View>
            <TouchableOpacity>
            {
              this.state.filteredList.map((l) => (
                 
              <ListItem key={l.id} bottomDivider>
                <Avatar rounded source={{uri: l.image}} />
                <ListItem.Content>
                  <TouchableOpacity onPress={()=> this.props.navigation.navigate(l.title)}><ListItem.Title>{l.title}</ListItem.Title></TouchableOpacity>
                </ListItem.Content>
              </ListItem>
              ))
            }
            </TouchableOpacity>

                
               
    </View>

  );
}
}

