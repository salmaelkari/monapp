

import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View ,Linking,TouchableOpacity,StatusBar,Text} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../Components/config';
import { Appbar} from 'react-native-paper';
import {Ionicons}from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class ParametreScreen extends Component {

    static navigationOptions={
        header:null
      };

      render() {
        return (


<View  style={styles.container}>


           <Text style={{ color:"#",fontSize:30,marginLeft:20,marginTop:20,fontWeight: 'bold',}}> Paramètres</Text>




           <View  style={styles.container2}>
         <TouchableOpacity   style={styles.button}  onPress={()=>this.props.navigation.navigate("Propos")}>
        <Text style={{color:"#", alignItems:'center',justifyContent:'center', fontSize:20,
        fontFamily: 'Iowan Old Style' }}> A propos de nous </Text>
  </TouchableOpacity>

  <TouchableOpacity   style={styles.button}
  onPress={() => Linking.openURL('https://www.facebook.com/sabelkk')}>
 <Text style={{color:"#", alignItems:'center',justifyContent:'center',  fontFamily: 'Iowan Old Style',fontSize:20}}> Suggérer une idée </Text>

</TouchableOpacity>

<TouchableOpacity   style={styles.button}  onPress={()=>this.props.navigation.navigate("Processus")}>
<Text style={{color:"#", alignItems:'center',justifyContent:'center',fontFamily: 'Iowan Old Style',fontSize:20}}> Processus du don  </Text>
</TouchableOpacity>
<TouchableOpacity   style={styles.button}  onPress={()=>this.props.navigation.navigate("Propos")}>
<Text style={{color:"#", alignItems:'center',justifyContent:'center',fontFamily: 'Iowan Old Style',fontSize:20}}> Compatibilité sanguine  </Text>
</TouchableOpacity>


</View>





     </View>


      )}}


      const styles=StyleSheet.create({

        container :{

        flex : 1,
        backgroundColor:"#e81123",
        //justifyContent:'center',
      //  alignItems : 'center'
        },

        container2 :{

        flex : 1,
        backgroundColor:"#ffffff",
        justifyContent:'center',
        alignItems : 'center',
        marginTop:10,

        },


      button:{
        marginTop:10,
        marginHorizontal:30,
        width:200,
        height:48,
        backgroundColor:'#ffffff',
        borderRadius:20,
        marginLeft:70,
        borderColor:'#ffffff',
        alignItems:"center",
        justifyContent:"center"
      },});
