import React from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation';



const Drawer = (props) => (
    <SafeAreaView style={{flex:1,}}>
    <View style={{alignItems:"center"}}>
   <View style={styles.DrawerView}>
   
    <Text style={{color:'black',fontWeight:"bold", fontSize:20}}>Guest</Text>
    <Text style={{color:'black'}}>info@ecommerce.com</Text>
   </View>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>      
    </SafeAreaView>
  );

  
const styles = StyleSheet.create({
    DrawerView:{
      height:150,
      width:"90%", 
      alignItems:'center', 
      justifyContent: 'center', 
      borderBottomWidth: 2, 
      borderColor: 'white',
      marginBottom: 20,
    },
    DrawerIcon:{
      width:24,
      height:24,
      color:"white"
    }
  })

  export default Drawer;