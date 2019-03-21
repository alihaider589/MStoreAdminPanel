import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,SafeAreaView,ScrollView} from 'react-native';
import {createBottomTabNavigator,createStackNavigator,createDrawerNavigator,createAppContainer} from 'react-navigation';

import Home from './src/Components/Home'
import Analytics from './src/Components/Analytics'
import Customers from './src/Components/Customers'
import Orders from './src/Components/Orders'
import Tasks from './src/Components/Tasks'
import Sales from './src/Components/Sales'
import Products from './src/Components/Products'

import Drawer from './src/Components/Drawer'








export default class App extends Component {

        render() {
      return (
<Navigator />
      );
    }
  }
  
  
  const DrawerNav= createDrawerNavigator({
    Home:{
      screen:Home      
    }
    ,
    
    Analytics:{
      screen:Analytics
    },
    Customers:{
      screen:Customers
    },
    Orders:{
      screen:Orders
    },
    Tasks:{
      screen:Tasks
    },
    Sales:{
      screen:Sales
    },
    Products:{
      screen:Products
    },
  },
  
  {
    contentComponent:Drawer,
    contentOptions:{
      activeTintColor:"#42C2BF",
      inactiveTintColor:"black",
      activeBackgroundColor:"rgba(0,0,0,0)",
      inactiveBackgroundColor:"rgba(0,0,0,0)",
    }
  })
  const Navigator = createAppContainer(DrawerNav)