import {StyleSheet , Text , View ,Button, Image}from 'react-native';
import {createAppContainer , createSwitchNavigator }from 'react-navigation';
import {createStackNavigator}from 'react-navigation-stack';
import {createBottomTabNavigator}from 'react-navigation-tabs';
import Playquiz from '../Components/Playquiz';
import {Ionicons}from'@expo/vector-icons';
import{FontAwesome}from'@expo/vector-icons';
import {AntDesign}from'@expo/vector-icons';
import LoadingScreen from '../Components/LoadingScreen';
import LoginScreen from '../Components/LoginScreen';
import RegisterScreen from '../Components/RegisterScreen';
import HomeScreen from '../Components/HomeScreen';
import ProfileScreen from '../Components/ProfileScreen';
import ShareScreen from '../Components/ShareScreen';
import ParametreScreen from '../Components/ParametreScreen';
import CentresScreen from '../Components/CentresScreen';
import Propos from '../Components/Propos';
import Processus from '../Components/Processus';
import React, { Fragment } from 'react';
const AppTabNavigator=createBottomTabNavigator(

{  Accueil:{
    screen:HomeScreen,
    navigationOptions:{
      tabBarIcon:({tintColor})=><Ionicons name="ios-home" size={24} color={tintColor}> </Ionicons>
    }
  },

  Quiz:{
    screen:Playquiz,
    navigationOptions:{
      tabBarIcon:({tintColor})=><Ionicons name="help-outline" size={24} color={tintColor}> </Ionicons>
    }
  },

    Centres:{
      screen:CentresScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=><FontAwesome name="hospital-o" size={24} color={tintColor}> </FontAwesome>
      }
    },

    Partager:{
      screen:ShareScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=><AntDesign name="sharealt" size={24} color={tintColor}> </AntDesign>
      }
    },
    Paramètres:{
      screen:ParametreScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="md-settings" size={24} color={tintColor}
        > </Ionicons>
      }
    }

},



{

tabBarOptions:{
activeTintColor:"#e81123",
inactiveTintColor:"#e81123",
showLabel:false


}


}
)

const AuthStack=createStackNavigator({
  Login:LoginScreen,
  Register:RegisterScreen,
  Centres:CentresScreen,
  Propos:Propos,
  Processus:Processus,
  ParametreScreen:ParametreScreen,
  ProfileScreen:ProfileScreen,
  Playquiz:Playquiz,





});

const SwitchNavigator = createSwitchNavigator(
{
Loading:LoadingScreen,
App:AppTabNavigator,
Auth:AuthStack,
Register:RegisterScreen,
Share:ShareScreen,
ParametreScreen:ParametreScreen,
Propos:Propos,
ProfileScreen:ProfileScreen,
Login:LoginScreen,
Playquiz:Playquiz,
Centres:CentresScreen,
},


{
initialRouteName:"Auth",
  headerMode: 'none'
}
)
;


export default createAppContainer(SwitchNavigator)
