import React from'react'
import {View , Text , StyleSheet,TextInput,TouchableOpacity,Image,StatusBar,LayoutAnimation } from 'react-native'

import { firebaseAuth } from '../Components/config';

export default class LoginScreen  extends React.Component {


  static navigationOptions={
    header:null
  };
  state = { email: '',
   password: '',
   name:'',
    errorMessage: null }
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log('handleLogin')
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

render(){
 LayoutAnimation.easeInEaseOut();

return (

  <View style={styles.container}>
  <StatusBar barStyle="light-content"></StatusBar>



  <Image source={require('../image/ma.jpg')} style={{width:150, height:150, alignSelf:'center',borderRadius:100,
   marginBottom: 5,marginTop:10}}></Image>



      <View style={styles.errorMessage}>

      {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
</View>
      <View style={styles.form}>


    <View style={{marginTop:5}}>
<Text style={styles.inputTitle}>Adresse email </Text>
      <TextInput style={styles.inputBox}
      onChangeText={email=>this.setState({email})}
      value={this.state.email}
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholderTextColor="#141414"
        />
        </View>
<View style={{marginTop:2}}>
        <Text style={styles.inputTitle}>Mot de passe  </Text>
              <TextInput style={styles.inputBox}
              autoCapitalize="none"
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholderTextColor="#141414"
              secureTextEntry={true}
              onChangeText={password=>this.setState({password})}
              value={this.state.password}
                />

      </View>
    </View>
    <View style={{marginTop:0.1}}>
    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
    <Text style={styles.buttonText}>Se connecter </Text>
    </TouchableOpacity>
    </View>

    <TouchableOpacity style={{alignSelf:"center",marginTop:32}}
     onPress={()=>this.props.navigation.navigate("Register")}>

    <Text>
    Pas encore inscrit ?<Text style={{color:"#ff5a4d" }}>S'inscrire</Text>
    </Text>
    </TouchableOpacity>





    </View>


);
}
}

const styles=StyleSheet.create({
container :{

flex : 1,
flexGrow: 1 ,
backgroundColor:"#e81123",
justifyContent:'center',
alignItems : 'center'
},

greeting:{
marginTop:32,
fontSize:18,
fontWeight:"400",
textAlign:"center",
},
errorMessage:{

height:72,
alignItems:"center",
justifyContent:"center",
marginHorizontal:30
},
inputBox:{
  width:250,
  height:50,
  backgroundColor:'rgba(250,250,250,0.999)',
  borderRadius:20,
  paddingHorizontal:10,
  fontSize:17,
  color:"#141414",
  marginVertical:10,
  //textAlign:'center'

},
button:{
  marginHorizontal:30,
  width:250,
  height:50,
  backgroundColor:'#ff5a4d',
  borderRadius:20,
  borderColor:'#ffffff',
  alignItems:"center",
  justifyContent:"center"
},
buttonText:{
fontSize:17,
fontWeight:'500',
color:'#ffffff',
textAlign:'center',
marginVertical:10
},

form:{

  marginBottom:30,
  marginHorizontal:30,
},
inputTitle:{
  color:"#81123",
  fontSize:10,
  textTransform:"uppercase"
},
error:{
color:"#fffff",
fontSize:13,
fontWeight:"600",
textAlign:"center"

},

})
