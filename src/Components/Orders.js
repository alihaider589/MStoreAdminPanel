
import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,Dimensions,Image} from 'react-native';
import { Container, Header, Left, Icon, Title, Body ,List,ListItem,Thumbnail,Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class Orders extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const screenWidth = Dimensions.get('window').width

    return (
      <Container
      
      style={{flex:1,width:screenWidth}}
      >

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

Orders
</Title>
</Body>

</Header>

<View style={{justifyContent:'center',width:screenWidth}}>

  <ScrollView showsVerticalScrollIndicator={false} >

  <List>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tbn.bidorbuy.co.za/image/fetch/dpr_1.0,f_auto,t_btbnx/https://cdn.shopify.com/s/files/1/0027/6958/4188/products/12_2018-09-25_15-47-32_wPXuGJk8mm.png%3Fv=1537886904' }} />
              </Left>
              <Body>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage",{Picture:"https://tbn.bidorbuy.co.za/image/fetch/dpr_1.0,f_auto,t_btbnx/https://cdn.shopify.com/s/files/1/0027/6958/4188/products/12_2018-09-25_15-47-32_wPXuGJk8mm.png%3Fv=1537886904",Title:"REDRAGON TALOS GAMING HEADSET"})}>
                <Text style={{fontWeight:'bold'}}>REDRAGON TALOS GAMING HEADSET</Text>
                <Text note>Cost 300$</Text>
    </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 1</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://topnewesttrends.com/wp-content/uploads/freshizer/72407b799cc06bb01b54519abeb857c8_zuora4-1000-c-90.png' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage",{Picture:"https://topnewesttrends.com/wp-content/uploads/freshizer/72407b799cc06bb01b54519abeb857c8_zuora4-1000-c-90.png",Title:"ZUOYA Wired USB Gaming Mouse"})}>
        
                <Text style={{fontWeight:'bold'}}>ZUOYA Wired USB Gaming Mouse</Text>

                <Text note>Cost 600$</Text>
</TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 2</Text>
              </Right>
            </ListItem>


            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://tbn.bidorbuy.co.za/image/fetch/dpr_1.0,f_auto,t_btbnx/https://cdn.shopify.com/s/files/1/0027/6958/4188/products/3051388_64382_King_Of_War_CM-382_600x600_2019-02-09_04-52-43_6m5S1Pg7D7.png%3Fv=1549688525' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage",{Picture:"https://tbn.bidorbuy.co.za/image/fetch/dpr_1.0,f_auto,t_btbnx/https://cdn.shopify.com/s/files/1/0027/6958/4188/products/3051388_64382_King_Of_War_CM-382_600x600_2019-02-09_04-52-43_6m5S1Pg7D7.png%3Fv=1549688525",Title:"Redragon KING OF WAR Gaming Chair Black and Red"})}>

                <Text style={{fontWeight:'bold'}}>Redragon KING OF WAR Gaming Chair Black and Red</Text>
                <Text note>Cost 1033$</Text>
              </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 3 </Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://skin-tracker.com/images/fnitems/nvidiapc.png' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage",{Picture:"https://skin-tracker.com/images/fnitems/nvidiapc.png",Title:"Gaming PC with Counterattack Set"})}>

                <Text style={{fontWeight:'bold'}}>Gaming PC with Counterattack Set</Text>
                <Text note>Cost 900$</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 4</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn.shopify.com/s/files/1/0912/7444/products/Bloodstained-PS4_large.png?v=1552317907' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage",{Picture:"https://cdn.shopify.com/s/files/1/0912/7444/products/Bloodstained-PS4_large.png?v=1552317907",Title:" Bloodstained: Curse of the Moon (PS4)"})}>

                <Text style={{fontWeight:'bold'}}> Bloodstained: Curse of the Moon (PS4)</Text>
                <Text note>Cost 150$</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 5</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://asset.msi.com/resize/image/global/product/product_0_20180417114910_5ad56eb6add6d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png' }} />
              </Left>
            
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage",{Picture:"https://asset.msi.com/resize/image/global/product/product_0_20180417114910_5ad56eb6add6d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",Title:"GeForce GTX 1070 XLR8 Gaming OC"})}>

                <Text style={{fontWeight:'bold'}}>GeForce GTX 1070 XLR8 Gaming OC</Text>
                <Text note>Cost 500$ </Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 6</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/49/7e/61/497e616d49cc821093f852b9eaf28484.png' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage",{Picture:"https://i.pinimg.com/originals/49/7e/61/497e616d49cc821093f852b9eaf28484.png",Title:"90's Cell Phone"})}>

                <Text style={{fontWeight:'bold'}}>90's Cell Phone</Text>
                <Text note>Cost 29$</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 7</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.julienslive.com/images/lot/2444/244442_4.jpg' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage",{Picture:"https://www.julienslive.com/images/lot/2444/244442_4.jpg",Title:"Microphone"})}>

                <Text style={{fontWeight:'bold'}}>Microphone </Text>
                <Text note>Cost 89$</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 1</Text>
              </Right>
            </ListItem>


           

          </List>
  </ScrollView>
</View>
      </Container>
    );
  }
}
