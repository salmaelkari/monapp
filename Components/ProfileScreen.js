import React,{useState} from 'react'
import {View,StyleSheet , Text ,TextInput,TouchableOpacity,Button,Picker  }from 'react-native';
import * as firebase from 'firebase'
import { firebaseAuth } from '../Components/config';


export default class ProfileScreen extends React.Component {



  onPressButton = () => {
      firebase.auth().signOut()
          .then(() => this.props.navigation.navigate('Login'))
          .catch(error => this.setState({ errorMessage: error.message }));
  }








   render(){
     return(


           <View style={styles.container} >
          <Text style={{ fontSize:40}}>  profil</Text>
          <View>
              <Button
                  onPress={this.onPressButton}
                  title="Deconnexion"
              />
          </View>





     </View>
   );
 }
 }
const styles=StyleSheet.create({




container:{

flex:1,
alignItems:"center",
justifyContent:"center",

}

})
