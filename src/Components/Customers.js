
import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,Dimensions,Image} from 'react-native';
import { Container, Header, Left, Icon, Title, Body ,List,ListItem,Thumbnail,Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class Customers extends Component {
  static navigationOptions={
    drawerLabel:()=>null
  }
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

Customers
</Title>
</Body>

</Header>

<View style={{justifyContent:'center',width:screenWidth}}>

  <ScrollView showsVerticalScrollIndicator={false} >

  <List>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-1/p160x160/48373829_1466766893466889_6332830974740529152_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=5a03f7de637a96a9451bf29c735ca552&oe=5D1BCFAB' }} />
              </Left>
              <Body>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerPage",{Picture:"https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-1/p160x160/48373829_1466766893466889_6332830974740529152_n.jpg?_nc_cat=106&_nc_ht=scontent.fkhi1-1.fna&oh=5a03f7de637a96a9451bf29c735ca552&oe=5D1BCFAB",Title:"Ali Haider"})}>
                <Text>Ali Haider</Text>
                <Text note>Bought Iphone XS</Text>
    </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 1</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://opinionhall.com/wp-content/uploads/2018/07/weird-bug-makes-samsung-phones-text-random-photos-to-random-people.jpg' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerPage",{Picture:"https://opinionhall.com/wp-content/uploads/2018/07/weird-bug-makes-samsung-phones-text-random-photos-to-random-people.jpg",Title:"John Doe"})}>
        
                <Text>John Doe</Text>

                <Text note>Bought Computer By Aptron</Text>
</TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 2</Text>
              </Right>
            </ListItem>


            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://pm1.narvii.com/5866/76b201e12343e860570c62f4067307e04ed545fe_00.jpg' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerPage",{Picture:"http://pm1.narvii.com/5866/76b201e12343e860570c62f4067307e04ed545fe_00.jpg",Title:"Peter Parker"})}>

                <Text>Peter Parker</Text>
                <Text note>Bought SpiderMan Suit</Text>
              </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 3 </Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://images4.fanpop.com/image/answers/246000/246187_1305768308989_470_477.jpg' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerPage",{Picture:"http://images4.fanpop.com/image/answers/246000/246187_1305768308989_470_477.jpg",Title:"Spongebob"})}>

                <Text>Spongebob</Text>
                <Text note>Bought Nothing</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 4</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://1.bp.blogspot.com/_yKv0T3m8Edc/SLzqA11DQsI/AAAAAAAAAFg/Mtmg4mDcN8I/s320/ppg+buttercup.jpg' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerPage",{Picture:"http://1.bp.blogspot.com/_yKv0T3m8Edc/SLzqA11DQsI/AAAAAAAAAFg/Mtmg4mDcN8I/s320/ppg+buttercup.jpg",Title:"Blossom"})}>

                <Text>Blossom</Text>
                <Text note>Bought Iphone XS</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 5</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/be/d4/bb/bed4bbf092ac08861584e105fed6a096.gif' }} />
              </Left>
            
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerPage",{Picture:"https://i.pinimg.com/originals/be/d4/bb/bed4bbf092ac08861584e105fed6a096.gif",Title:"Micky Mouse"})}>

                <Text>Micky Mouse</Text>
                <Text note>Bought Iphone XS</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 6</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://clipart-library.com/images/qTBo44L6c.png' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerPage",{Picture:"http://clipart-library.com/images/qTBo44L6c.png",Title:"Dexter"})}>

                <Text>Dexter</Text>
                <Text note>Bought Iphone XS</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 7</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://i1.wp.com/orig00.deviantart.net/9378/f/2017/291/8/9/cartoon_character__by_dtoro-dbr18pv.jpg' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerPage",{Picture:"https://i1.wp.com/orig00.deviantart.net/9378/f/2017/291/8/9/cartoon_character__by_dtoro-dbr18pv.jpg",Title:"Boy"})}>

                <Text>Boy </Text>
                <Text note>Bought Iphone XS</Text>
                </TouchableOpacity>
              </Body>
              <Right>
                <Text note>Created Jul 1</Text>
              </Right>
            </ListItem>



            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/4e/de/89/4ede89213a280e7be594c96633c56501--anime-manga.jpg' }} />
              </Left>
              <Body>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerPage",{Picture:"https://i.pinimg.com/236x/4e/de/89/4ede89213a280e7be594c96633c56501--anime-manga.jpg",Title:"Anime"})}>

                <Text>Anime</Text>
                <Text note>Bought Iphone XS</Text>
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
