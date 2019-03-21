import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>


        <Text> Analytics </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
