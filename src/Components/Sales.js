import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity 
        onPress={()=>this.props.navigation.navigate("Home")}
        >
        
        <Text> Sales </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}
