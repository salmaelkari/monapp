
import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View ,TouchableOpacity,StatusBar,Text} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../Components/config';
import { Appbar} from 'react-native-paper';
import {Ionicons}from '@expo/vector-icons';


export default class ParametreScreen extends Component {


    static navigationOptions={
        header:null
      };
      render() {
        return (
          <View  style={styles.container}>
          <StatusBar barStyle="light-content"></StatusBar>
          <TouchableOpacity  onPress={()=>this.props.navigation.navigate("App")}>
          <Ionicons name="ios-arrow-round-back" size={32} color="#e81123"></Ionicons>

      </TouchableOpacity>

            <Text style={{ color:"#e81123",fontSize:20,marginLeft:150}}> Give Blood sssssest une application développée </Text>
            <Text style={{ color:"#e81123",fontSize:20,marginLeft:150}}> par deux èleves ingénieurs
            </Text>
            <Text style={{ color:"#e81123",fontSize:20,marginLeft:150}}>  comme étant un projet de fin d'année
            </Text>
     </View>


      )}}


      const styles=StyleSheet.create({

        container :{

        flex : 1,
        backgroundColor:"#ffffff",
        //justifyContent:'center',
        //alignItems : 'center'
        },


      button:{
        marginTop:10,
        marginHorizontal:30,
        width:200,
        height:48,
        backgroundColor:'#ff5a4d',
        borderRadius:20,
        marginLeft:300,
        borderColor:'#ffffff',
        alignItems:"center",
        justifyContent:"center"
      },});
