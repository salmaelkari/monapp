import React, { Component } from 'react';
import {  FlatList, StyleSheet, Text, View,Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import {Ionicons}from'@expo/vector-icons';
import{FontAwesome}from'@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {AntDesign}from'@expo/vector-icons';
import flatListData from '../Components/flatListData';

class FlatListItem extends Component {

      render() {
       return (
           <View style={{
               flex: 1,
               flexDirection:'column',
           }}>
               <View style={{
                       flex: 1,
                       flexDirection:'row',
                        backgroundColor: this.props.index % 2 == 0 ? '#C0CFC6': '#D0A9A0',
                      // backgroundColor: 'mediumseagreen'
               }}>
                   <Image
                       source={{uri: this.props.item.imageUrl}}
                       style={{width: 100, height: 100, margin: 5}}
                   >

                   </Image>
                   <View style={{
                           flex: 1,
                           flexDirection:'column',
                           height: 105
                       }}>
                           <Text style={styles.flatListItem}> {this.props.item.name}</Text>
                           <Text style={styles.flatListItem2}><EvilIcons name="location" size={24} color="red" /> {this.props.item.Description}</Text>
                           <Text style={styles.flatListItem}> <Ionicons name="ios-call" size={24} color="red" />{this.props.item.phone}</Text>
                   </View>
               </View>
               <View style={{
                   height: 1,
                   backgroundColor:'white'
               }}>

               </View>
         </View>
       );
   }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'blue',
        padding: 10,
        fontSize: 16,

    },
    flatListItem2: {
        color: 'blue',
        fontSize: 16,

    },

});

export default class CentresScreen extends Component {
    render() {
      return (


        <View style={{flex: 1}}>
        <View style={{backgroundColor:'#e81123'}}>
                <Text style={{ color:"#ffffff",fontSize:30,marginLeft:20,fontWeight: 'bold',marginTop:30,alignItems:'center',justifyContent:'center'}}> Centres De Transfusion Sanguine</Text>
                </View>

            <FlatList
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
        </View>
      );
    }
}
