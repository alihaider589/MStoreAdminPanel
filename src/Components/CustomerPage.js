import React, { Component } from 'react';
import { View, Text,Image ,Dimensions,TouchableOpacity, ScrollView } from 'react-native';
import { Container, Left,Header,Title,Right,Body,List,ListItem, Thumbnail,Icon, } from 'native-base';

export default class Customerpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    const screenWidth = Dimensions.get('window').width

    const  Picture = this.props.navigation.getParam('Picture')
    const Name = this.props.navigation.getParam('Title')
    return (
   <Container style={{flex:1,width:screenWidth}}> 
<Header  style={{backgroundColor:'white',borderBottomWidth:3,borderBottomColor:'rgb(207, 207, 207)'}}>
<Left>
  <TouchableOpacity
  onPress={()=>this.props.navigation.navigate("Customers")}
  >

<Image source={{uri:"https://image.flaticon.com/icons/png/512/60/60972.png" }}style={{height:20,width:20}}/>
  </TouchableOpacity>
</Left>
<Body>
<Title style={{fontSize:15,fontWeight:'bold',color:'black'}} >

{Name}
</Title>
</Body>

</Header>

       
<ScrollView showsVerticalScrollIndicator={false}>
       <View style={{width:screenWidth,alignItems:'center'}}>
    
           
           <View>
           <Thumbnail style={{height:100,width:100,margin:30}} source={{uri:Picture}}/>
           </View>
<View style={{margin:20}}> 

       <Text style={{fontSize:20,fontWeight:'bold',marginRight:200,}}>{Name}</Text>
       <Text style={{fontSize:15,fontWeight:'500',marginRight:200,marginTop: 10,}}> Iphone Total Spend $4024</Text>
<View>

</View>

<List>
            <ListItem >
              <Body>
                <Text style={{fontWeight:'bold'}}>Name</Text>
              </Body>
              <Right>
                  <Text style={{fontSize:10}}>{Name}</Text>
              </Right>
            </ListItem>


            <ListItem >
              <Body>
                <Text>Email</Text>
              </Body>
              <Right>
                  <Text style={{fontSize:10}}>alihaider589@outlook.com</Text>
              </Right>
            </ListItem>


            <ListItem >
              <Body>
                <Text>Account Created</Text>
              </Body>
              <Right>
                  <Text style={{fontSize:10}}>March 21,2019</Text>
              </Right>
            </ListItem>

            <ListItem >
              <Body>
                <Text>Tottal Spend </Text>
              </Body>
              <Right>
                  <Text style={{fontSize:10}}>203232$</Text>
              </Right>
            </ListItem>

            <ListItem >
              <Body>
                <Text>Total Orders</Text>
              </Body>
              <Right>
                  <Text style={{fontSize:10}}>2</Text>
              </Right>
            </ListItem>
          </List>


</View>
       </View>
</ScrollView>
   </Container>
    );
  }
}
