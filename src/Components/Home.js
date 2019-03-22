import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,Dimensions} from 'react-native';
import { Container, Header, Left, Icon, Body, Title, Image } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    const screenWidth = Dimensions.get('window').width
    return (
<Container style={{flex:1,width:screenWidth}} >

<Header 
style={{backgroundColor:'white',borderBottomWidth:2,borderBottomColor:'rgb(207, 207, 207)'}}


>
<Left >

<TouchableOpacity
onPress={()=>this.props.navigation.toggleDrawer()}
>

  <Icon name="bars" type="FontAwesome"/>
</TouchableOpacity>
</Left>


<Body >
<Title style={{color:'rgb(33, 33, 33)',fontSize:20,fontWeight:'bold'}}>Home</Title>
</Body>
</Header>

<View>


<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{margin:20}}>
<View style={{margin:10}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate("Analytics")}
style={{alignSelf:'center',borderColor:'rgb(95, 101, 252)',borderWidth:3,borderRadius:50,backgroundColor:'rgb(158, 162, 253)'}}>
<View style={{height:80,width:80,justifyContent:'center',marginLeft: 5,alignItems: 'center',}}>

<Icon  name="pulse" style={{color:'rgb(95, 101, 252)'}}/>

</View>
</TouchableOpacity>
<Text style={{fontSize:15,color:'rgb(95, 101, 252)',marginLeft:10,marginTop:5}}>Analytics</Text>
</View>

<View style={{margin:10}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate("Customers")}

style={{alignSelf:'center',borderColor:'rgb(255, 140, 6)',borderWidth:3,borderRadius:50,backgroundColor:'rgb(255, 233, 207)'}}>
<View style={{height:80,width:80,justifyContent:'center',marginLeft: 5,alignItems: 'center',}}>

<Icon  name="chatboxes" style={{color:'rgb(255, 140, 6)'}}/>

</View>
</TouchableOpacity>
<Text style={{fontSize:15,color:'rgb(255, 140, 6)',marginLeft:10,marginTop:5}}>Customers</Text>
</View>

<View style={{margin:10}}>

<TouchableOpacity style={{alignSelf:'center',borderColor:'rgb(224, 144, 215)',borderWidth:3,borderRadius:50,backgroundColor:'rgb(249, 234, 247)'}}>
<View style={{height:80,width:80,justifyContent:'center',marginLeft: 5,alignItems: 'center',}}>

<Icon  name="calculator" style={{color:'rgb(224, 144, 215)'}}/>

</View>
</TouchableOpacity>
<Text style={{fontSize:15,color:'rgb(224, 144, 215)',marginLeft:18,marginTop:5}}>Orders</Text>
</View>

<View style={{margin:10}}>

<TouchableOpacity style={{alignSelf:'center',borderColor:'rgb(111, 177, 104)',borderWidth:3,borderRadius:50,backgroundColor:'rgb(228, 240, 227)'}}>
<View style={{height:80,width:80,justifyContent:'center',marginLeft: 5,alignItems: 'center',}}>

<Icon  name="bookmarks" style={{color:'rgb(111, 177, 104)'}}/>

</View>
</TouchableOpacity>
<Text style={{fontSize:15,color:'rgb(111, 177, 104)',marginLeft:10,marginTop:5}}>Tasks</Text>
</View>

<View style={{margin:10}}>

<TouchableOpacity style={{alignSelf:'center',borderColor:'rgb(248, 210, 70)',borderWidth:3,borderRadius:50,backgroundColor:'rgb(254, 247, 220)'}}>
<View style={{height:80,width:80,justifyContent:'center',marginLeft: 5,alignItems: 'center',}}>

<Icon  name="pulse" style={{color:'rgb(248, 210, 70)'}}/>

</View>
</TouchableOpacity>
<Text style={{fontSize:15,color:'rgb(248, 210, 70)',marginLeft:10,marginTop:5}}>Sales</Text>
</View>

<View style={{margin:10}}>

<TouchableOpacity style={{alignSelf:'center',borderColor:'rgb(188, 110, 126)',borderWidth:3,borderRadius:50,backgroundColor:'rgb(242, 228, 231)'}}>
<View style={{height:80,width:80,justifyContent:'center',marginLeft: 5,alignItems: 'center',}}>

<Icon  name="pulse" style={{color:'rgb(188, 110, 126)'}}/>

</View>
</TouchableOpacity>
<Text style={{fontSize:15,color:'rgb(188, 110, 126)',marginLeft:10,marginTop:5}}>Products</Text>
</View>


</ScrollView>

</View>


</Container>
    );
  }
}
