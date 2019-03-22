import React, { Component } from 'react';
import { View, Text,Dimensions ,TouchableOpacity } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'
import { ScrollView } from 'react-native-gesture-handler';

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>

      <View>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>


        <Text> Analytics </Text>
        </TouchableOpacity>

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
            
            {/* Sales chart end */}
            
            {/* Purhase chart */}
            <View style={{width:"100%",alignItems: 'center',marginTop:30}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Purchases</Text>
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
                backgroundGradientFrom: '#3DA5F4',
                backgroundGradientTo: '#3DA5F4',
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
            {/* Purhase chart end */}

             {/* Order chart */}
            <View style={{width:"100%",alignItems: 'center',marginTop:30}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Orders</Text>
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
                  backgroundGradientFrom: '#F1536E',
                  backgroundGradientTo: '#F1536E',
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
            {/* Order chart end */}

            {/* Growth chart */}
            <View style={{width:"100%",alignItems: 'center',marginTop:30}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Growth</Text>
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
                  backgroundGradientFrom: '#FDA006',
                  backgroundGradientTo: '#FDA006',
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
            {/* Growth chart end */}
      </View>
                </ScrollView>
    );
  }
}
