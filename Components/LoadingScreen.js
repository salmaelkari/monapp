import React from'react';
import {View , Text , StyleSheet,ActivityIndicator ,Image} from 'react-native';
import * as firebase from 'firebase'
 import { firebaseAuth , db } from '../Components/config';
//import Fire from '../Components/Fire'
export default class LoadingScreen extends React.Component {

  componentDidMount() {
      firebaseAuth.onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'App' : 'Auth')
      })
  }

//componentDidMount(){
//   firebase.auth().onAuthStateChanged(user=> {
/*  if(user ){
this.props.navigation.navigate(user ?"App":"Auth");
  }else {
  //  navigate('LoginScreen');
    this.props.navigation.navigate(user ?"Auth":"App");
  }
})
;
}*/




/*          this.props.navigation.navigate(user ?"App":"Auth");
  });
}*/



render(){

return (


  <View style={styles.container}>




    <Text> Loading..</Text>


    <ActivityIndicator size="small "></ActivityIndicator>

    </View>
)
}
}

const styles=StyleSheet.create({
container :{
flex : 1,
justifyContent:"center",
alignItems:"center ",
}

})
