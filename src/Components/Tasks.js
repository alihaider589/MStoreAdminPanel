import React, { Component } from 'react';
import {Container,Header,Left,Body,Title,Content,SwipeRow,Icon,Button} from 'native-base'
import {TouchableOpacity,Image,View,Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default class SwipeRowExample extends Component {
  static navigationOptions={
    drawerLabel:()=>null
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

Tasks
</Title>
</Body>

</Header>


        <ScrollView showsVerticalScrollIndicator={false}>
        <Content scrollEnabled={false}>

          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 1 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20}}>Publish Order 1 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 1 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />





<SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 2 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20,marginTop:10}}>Publish Order 2 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 2 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />






<SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 3 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20,marginTop:10}}>Publish Order 3 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 3 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />






<SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 4 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20,marginTop:10}}>Publish Order 4 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 4 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />







<SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 5 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20,marginTop:10}}>Publish Order 5 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 5 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />


<SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 6 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20,marginTop:10}}>Publish Order 6 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 6 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />



<SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 7 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20,marginTop:10}}>Publish Order 7 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 7 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />



<SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 8 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20,marginTop:10}}>Publish Order 8 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 8 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />


<SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 9 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20,marginTop:10}}>Publish Order 9 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 9 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />


<SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 10 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20,marginTop:10}}>Publish Order 10 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 10 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />



<SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => alert('Order 11 is successfully added to MStore')}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <View>
                <Text style={{marginLeft:20,marginTop:10}}>Publish Order 11 to Mstore</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Order 11 is Deleted')}>
                <Icon active name="trash" />
              </Button>
            }
            />








        </Content>
            </ScrollView>
      </Container>
    );
  }
}