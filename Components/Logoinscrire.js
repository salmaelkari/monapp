import React from 'react'
import {View,Image,StyleSheet , Text  }from 'react-native';

export default class Logoinscrire  extends React.Component {
   render(){
     return(
           <View style={styles.container }>

               <Image
               style={styles.logo}
               source = {require('./utilisateur.png')}/>


     </View>
   );
 }
 }

 const styles = StyleSheet.create({
 container : {
   flexGrow: 1 ,
   backgroundColor:"#e81123",
   justifyContent:'center',
   alignItems : 'center',
   flexDirection:'row'

 },
 logo :{
   width:100,
   height:100,
   borderRadius : 300,
 },

 });
