import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import {Container,Header,Content,Thumbnail,Title,Left,Right,Body,List,ListItem, Icon} from 'native-base'

export default class Sales extends Component {
  static navigationOptions={
    drawerLabel:()=>null
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
     <Header  style={{backgroundColor:'white',borderBottomWidth:3,borderBottomColor:'rgb(207, 207, 207)'}}>
<Left>
  <TouchableOpacity
  onPress={()=>this.props.navigation.navigate("Home")}
  >

<Image source={{uri:"https://image.flaticon.com/icons/png/512/60/60972.png" }}style={{height:20,width:20}}/>
  </TouchableOpacity>
</Left>
<Body>
<Title style={{fontSize:15,fontWeight:'bold',color:'black'}} >

Sales
</Title>
</Body>

</Header>
      <Content>
        <List>

          <View style={{flexDirection:'row'}}>

          <ListItem itemHeader first>
         
      
        
            <Text style={{fontSize:20,fontWeight:'bold'}}>Product Ratings (4.5)</Text>
      
            <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
            <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
            <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
            <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
            <Icon name="star-half" style={{color:'yellow',marginLeft:8,}}/>

          </ListItem>
          </View>
          <ListItem avatar >
  <Left>
<Image source={{uri:"https://tbn.bidorbuy.co.za/image/fetch/dpr_1.0,f_auto,t_btbnx/https://cdn.shopify.com/s/files/1/0027/6958/4188/products/12_2018-09-25_15-47-32_wPXuGJk8mm.png%3Fv=1537886904" }}style={{height:40,width:40}}/>
    
  </Left>
  <Body>
  <Text style={{fontWeight:'bold'}}>REDRAGON TALOS GAMING HEADSET</Text>
 </Body>
  <Right>
    <Text>Done</Text>
  </Right>
</ListItem>

          <ListItem avatar >
            <Left>
<Image source={{uri:"https://topnewesttrends.com/wp-content/uploads/freshizer/72407b799cc06bb01b54519abeb857c8_zuora4-1000-c-90.png" }}style={{height:40,width:40}}/>
              
            </Left>
            <Body>
            <Text style={{fontWeight:'bold'}}>ZUOYA Wired USB Gaming Mouse</Text>

            </Body>
            <Right>
              <Text>Done</Text>
            </Right>
          </ListItem>


          <View style={{flexDirection:'row'}}>

<ListItem itemHeader first>



  <Text style={{fontSize:20,fontWeight:'bold'}}>Product Ratings (4)</Text>

  <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
  <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
  <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
  <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>

</ListItem>
</View>

<ListItem avatar >
  <Left>
<Image source={{uri:"https://tbn.bidorbuy.co.za/image/fetch/dpr_1.0,f_auto,t_btbnx/https://cdn.shopify.com/s/files/1/0027/6958/4188/products/3051388_64382_King_Of_War_CM-382_600x600_2019-02-09_04-52-43_6m5S1Pg7D7.png%3Fv=1549688525" }}style={{height:40,width:40}}/>
    
  </Left>
  <Body>
  <Text style={{fontWeight:'bold'}}>Redragon KING OF WAR Gaming Chair Black and Red</Text>

  </Body>
  <Right>
    <Text>Done</Text>
  </Right>
</ListItem>



<View style={{flexDirection:'row'}}>

<ListItem itemHeader first>



  <Text style={{fontSize:20,fontWeight:'bold'}}>Product Ratings (3.5)</Text>

  <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
  <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
  <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
  <Icon name="star-half" style={{color:'yellow',marginLeft:8,}}/>

</ListItem>
</View>
<ListItem avatar >
  <Left>
<Image source={{uri:"https://skin-tracker.com/images/fnitems/nvidiapc.png" }}style={{height:40,width:40}}/>
    
  </Left>
  <Body>
  <Text style={{fontWeight:'bold'}}>Gaming PC with Counterattack Set</Text>

  </Body>
  <Right>
    <Text>Done</Text>
  </Right>
</ListItem>
<ListItem avatar >
  <Left>
<Image source={{uri:"https://cdn.shopify.com/s/files/1/0912/7444/products/Bloodstained-PS4_large.png?v=1552317907" }}style={{height:40,width:40}}/>
    
  </Left>
  <Body>
  <Text style={{fontWeight:'bold'}}> Bloodstained: Curse of the Moon (PS4)</Text>

  </Body>
  <Right>
    <Text>Done</Text>
  </Right>
</ListItem>

<ListItem avatar >
  <Left>
<Image source={{uri:"https://asset.msi.com/resize/image/global/product/product_0_20180417114910_5ad56eb6add6d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png" }}style={{height:40,width:40}}/>
    
  </Left>
  <Body>
  <Text style={{fontWeight:'bold'}}>GeForce GTX 1070 XLR8 Gaming OC</Text>

  </Body>
  <Right>
    <Text>Done</Text>
  </Right>
</ListItem>



<View style={{flexDirection:'row'}}>

<ListItem itemHeader first>



  <Text style={{fontSize:20,fontWeight:'bold'}}>Product Ratings (3)</Text>

  <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
  <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>
  <Icon name="star" style={{color:'yellow',marginLeft:8,}}/>

</ListItem>
</View>

<ListItem avatar >
  <Left>
<Image source={{uri:"https://i.pinimg.com/originals/49/7e/61/497e616d49cc821093f852b9eaf28484.png" }}style={{height:40,width:40}}/>
    
  </Left>
  <Body>
  <Text style={{fontWeight:'bold'}}>90's Cell Phone</Text>

  </Body>
  <Right>
    <Text>Done</Text>
  </Right>
</ListItem>



















        </List>
      </Content>
    </Container>
    );
  }
}
