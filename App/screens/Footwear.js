import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View ,Image,Button, TouchableOpacity,BackHandler} from 'react-native';
import { firebase,storageRef } from '../firebase/config';
import { ListItem, Avatar,SearchBar} from 'react-native-elements';
const DATA = [
  {
    id:"1",
    title:"Shoe1",
    image:require ("../assets/shoe1.png")
  },
  {
    id:"2",
    title:"Shoe2",
    image: require("../assets/shoe2.jpg")
   
  },
  {
    id:"3",
    title:"Shoe3",
    image: require("../assets/shoe3.png")
   
  }
  
 
];
class Clothing extends Component{
 
  constructor(props)
  {
    super(props);
    this.state={
      imageRef: '',
      search:'',
      filteredList:DATA
    }
  }
  updateSearch = (search) => {
    this.setState({ search });
    this.setState({
        filteredList: DATA.filter(i=>
            i.title.toLowerCase().includes(search.toLowerCase()),),
    });

  }
 /* 
  async getItems()
  {   
      let imageRef = storageRef.ref('Clothing/Jeans/Jeans-icon.png');
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

  }*/
  render()
  {const { search } = this.state;
    return(
      <View>
        <SearchBar style={{backgroundColor: "#FFFFFF"}}
              placeholder="Type Here..."
              onChangeText={this.updateSearch}
              value={search}
              />
              <View>
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
          </View>  
      </View>
            
              
    );
  }
}

export default Clothing;