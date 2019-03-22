import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,Dimensions,ScrollView } from 'react-native';
import { Container, Header, Left, Icon, Body, Title, Image ,List,ListItem,Thumbnail,Right} from 'native-base';
import {  LineChart,
BarChart,
PieChart,
ProgressChart,
ContributionGraph
} from 'react-native-chart-kit'

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
<ScrollView showsVerticalScrollIndicator={false}>

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

<TouchableOpacity 
onPress={()=>this.props.navigation.navigate("Orders")}
style={{alignSelf:'center',borderColor:'rgb(224, 144, 215)',borderWidth:3,borderRadius:50,backgroundColor:'rgb(249, 234, 247)'}}>
<View style={{height:80,width:80,justifyContent:'center',marginLeft: 5,alignItems: 'center',}}>

<Icon  name="calculator" style={{color:'rgb(224, 144, 215)'}}/>

</View>
</TouchableOpacity>
<Text style={{fontSize:15,color:'rgb(224, 144, 215)',marginLeft:18,marginTop:5}}>Orders</Text>
</View>

<View style={{margin:10}}>

<TouchableOpacity
onPress={()=>this.props.navigation.navigate("Tasks")}

style={{alignSelf:'center',borderColor:'rgb(111, 177, 104)',borderWidth:3,borderRadius:50,backgroundColor:'rgb(228, 240, 227)'}}>
<View style={{height:80,width:80,justifyContent:'center',marginLeft: 5,alignItems: 'center',}}>

<Icon  name="bookmarks" style={{color:'rgb(111, 177, 104)'}}/>

</View>
</TouchableOpacity>
<Text style={{fontSize:15,color:'rgb(111, 177, 104)',marginLeft:10,marginTop:5}}>Tasks</Text>
</View>

<View style={{margin:10}}>

<TouchableOpacity

onPress={()=>this.props.navigation.navigate("Sales")}
style={{alignSelf:'center',borderColor:'rgb(248, 210, 70)',borderWidth:3,borderRadius:50,backgroundColor:'rgb(254, 247, 220)'}}>
<View style={{height:80,width:80,justifyContent:'center',marginLeft: 5,alignItems: 'center',}}>

<Icon  name="bulb" style={{color:'rgb(248, 210, 70)'}}/>

</View>
</TouchableOpacity>
<Text style={{fontSize:15,color:'rgb(248, 210, 70)',marginLeft:10,marginTop:5}}>Sales</Text>
</View>

<View style={{margin:10}}>

<TouchableOpacity 
onPress={()=>this.props.navigation.navigate("Products")}
style={{alignSelf:'center',borderColor:'rgb(188, 110, 126)',borderWidth:3,borderRadius:50,backgroundColor:'rgb(242, 228, 231)'}}>
<View style={{height:80,width:80,justifyContent:'center',marginLeft: 5,alignItems: 'center',}}>

<Icon  name="paper" style={{color:'rgb(188, 110, 126)'}}/>

</View>
</TouchableOpacity>
<Text style={{fontSize:15,color:'rgb(188, 110, 126)',marginLeft:10,marginTop:5}}>Products</Text>
</View>


            
</ScrollView>

</View>
{/* Sales Chart */}
 <View style={{width:"100%",alignItems: 'center',marginTop:30}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Sales</Text>
            <LineChart
                data={{
                  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                  datasets: [{
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }]
                }}
                width={Dimensions.get('window').width - 45} // from react-native
                height={220}
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#00C689',
                  backgroundGradientTo: '#00C689',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  color:"white"
                }}
                />
            </View>
 
            <View >
              <View style={{flexDirection:'row'}}>

              <Text style={{fontWeight:'bold',fontSize:20,marginLeft:30}}>Recent Orders</Text>
              <TouchableOpacity 
              onPress={()=>this.props.navigation.navigate("Orders")}>

              <Text style={{fontWeight:'bold',color:'blue',marginLeft:120}}>See All</Text>
              </TouchableOpacity>
              </View>

<List>

          <ListItem avatar>
            <Left>
              <Thumbnail source={{ uri: 'https://tbn.bidorbuy.co.za/image/fetch/dpr_1.0,f_auto,t_btbnx/https://cdn.shopify.com/s/files/1/0027/6958/4188/products/12_2018-09-25_15-47-32_wPXuGJk8mm.png%3Fv=1537886904' }} />
            </Left>
            <Body>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPagea",{Picture:"https://tbn.bidorbuy.co.za/image/fetch/dpr_1.0,f_auto,t_btbnx/https://cdn.shopify.com/s/files/1/0027/6958/4188/products/12_2018-09-25_15-47-32_wPXuGJk8mm.png%3Fv=1537886904",Title:"REDRAGON TALOS GAMING HEADSET"})}>
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
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage1",{Picture:"https://topnewesttrends.com/wp-content/uploads/freshizer/72407b799cc06bb01b54519abeb857c8_zuora4-1000-c-90.png",Title:"ZUOYA Wired USB Gaming Mouse"})}>
      
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
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage1",{Picture:"https://tbn.bidorbuy.co.za/image/fetch/dpr_1.0,f_auto,t_btbnx/https://cdn.shopify.com/s/files/1/0027/6958/4188/products/3051388_64382_King_Of_War_CM-382_600x600_2019-02-09_04-52-43_6m5S1Pg7D7.png%3Fv=1549688525",Title:"Redragon KING OF WAR Gaming Chair Black and Red"})}>

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
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage1",{Picture:"https://skin-tracker.com/images/fnitems/nvidiapc.png",Title:"Gaming PC with Counterattack Set"})}>

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
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage1",{Picture:"https://cdn.shopify.com/s/files/1/0912/7444/products/Bloodstained-PS4_large.png?v=1552317907",Title:" Bloodstained: Curse of the Moon (PS4)"})}>

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
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage1",{Picture:"https://asset.msi.com/resize/image/global/product/product_0_20180417114910_5ad56eb6add6d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",Title:"GeForce GTX 1070 XLR8 Gaming OC"})}>

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
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage1",{Picture:"https://i.pinimg.com/originals/49/7e/61/497e616d49cc821093f852b9eaf28484.png",Title:"90's Cell Phone"})}>

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
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("OrderPage1",{Picture:"https://www.julienslive.com/images/lot/2444/244442_4.jpg",Title:"Microphone"})}>

              <Text style={{fontWeight:'bold'}}>Microphone </Text>
              <Text note>Cost 89$</Text>
              </TouchableOpacity>
            </Body>
            <Right>
              <Text note>Created Jul 1</Text>
            </Right>
          </ListItem>


         

        </List>
</View>

                </ScrollView>
</Container>
    );
  }
}
