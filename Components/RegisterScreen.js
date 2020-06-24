import React from'react'
import {View , Text , StyleSheet,TextInput,TouchableOpacity,StatusBar,LayoutAnimation, Picker } from 'react-native';

import * as firebase from "firebase";
import { firebaseAuth , db } from '../Components/config';
import {Ionicons}from '@expo/vector-icons'
export default class RegisterScreen  extends React.Component {
static navigationOptions={
    header:null
  };

    /*   this.state = { email: '',
       password: '',
       name:'',
       mobile:'',
       ville:'',
       errorMessage: null }
       handleSignUp = () => {
            console.log('handleSignUp')
            firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => this.props.navigation.navigate('App'))
                .catch(error => this.setState({ errorMessage: error.message }));
      };*/

       constructor() {
          super();
          this.dbRef = firebase.firestore().collection('users');
          this.state = {
            name: '',
            email: '',
            mobile: '',
            ville:'',
            groupesanguin:'',
            isLoading: false
          };
        }

          inputValueUpdate = (val, prop) => {
            const state = this.state;
            state[prop] = val;
            this.setState(state);
          }

          storeUser() {

      firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)

              this.dbRef.add({
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile,
                ville:this.state.ville,
                password:this.state.password,
                groupesanguin:this.state.groupesanguin,
              }).then((res) => {
                this.setState({
                  name: '',
                  email: '',
                  mobile: '',
                  ville:'',
                  password:'',
                  groupesanguin:'',
                  isLoading: false,
                });
                 this.props.navigation.navigate('Login');
                firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)

})
};


render(){

return (

    <View style={styles.container}>
    <StatusBar barStyle="light-content"></StatusBar>
    <TouchableOpacity style={styles.back } onPress={()=>this.props.navigation.goBack()}>
    <Ionicons name="ios-arrow-round-back" size={32} color="#ffffff"></Ionicons>
    </TouchableOpacity>

    <View style={{position:"absolute", top:0.1, alignItems:"center", width:"10%"}}>
    <Text style={styles.greeting}>{'Salut !\n Inscris-toi  '}</Text>
    <TouchableOpacity style={styles.avatar}>
    <Ionicons name="ios-add" size={20} color="#ffffff" style ={{marginTop:6,marginLeft:2}}></Ionicons>

    </TouchableOpacity>
    </View>



      <View style={styles.errorMessage}>

      {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}

      </View>
      <View style={styles.form}>
      <View style={{marginTop:120}}>
      <Text style={styles.inputTitle}>Adresse email </Text>
      <TextInput style={styles.inputBox}
     onChangeText={(val) => this.inputValueUpdate(val, 'email')}
    //  onChangeText={email=>this.setState({email})}
      value={this.state.email}
      underlineColorAndroid='rgba(0,0,0,0)'
      placeholderTextColor="#141414"
        />


        </View>
        <View style={{marginTop:2}}>
        <Text style={styles.inputTitle}>Nom et prénom </Text>
        <TextInput style={styles.inputBox}
        onChangeText={(val) => this.inputValueUpdate(val, 'name')}
      //  onChangeText={name=>this.setState({name})}
        value={this.state.name}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholderTextColor="#141414"
          />
          </View>

          </View>
          <View style={{marginTop:3}}>
          <Text style={styles.inputTitle}>Mobile </Text>
          <TextInput style={styles.inputBox}
          onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
          //  onChangeText={mobile=>this.setState({mobile})}
          value={this.state.mobile}
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
            //  onChangeText={password=>this.setState({password})}
                  onChangeText={(val) => this.inputValueUpdate(val, 'password')}
              value={this.state.password}
                />
</View>


<View style={{marginTop:2}}>

 <Text style={styles.inputTitle}>Ville </Text>
<Picker

selectedValue={this.state.ville}
style={{height: 48, width: 250,  borderRadius:20,}}
onValueChange={(itemValue, itemIndex) =>this.setState({ville: itemValue})}
  onChangeText= {(val) => this.inputValueUpdate(val, 'ville')}
>
<Picker.Item label="choisissez votre ville " value="choisissez votre ville" />
<Picker.Item label="Casablanca" value="Casablanca" />
<Picker.Item label="El Jadida" value="El Jadida" />
<Picker.Item label="Rabat" value="Rabat" />
</Picker>

<Picker

selectedValue={this.state.groupesanguin}
style={{height: 48, width: 250,  borderRadius:20, marginTop:10}}
onValueChange={(itemValue, itemIndex) =>this.setState({groupesanguin: itemValue})}
  onChangeText= {(val) => this.inputValueUpdate(val, 'groupesanguin')}
>
<Picker.Item label="choisissez votre groupe sanguin " value="choisissez votre groupe sanguin " />
<Picker.Item label="A+" value="A+" />
<Picker.Item label="A-" value="A-" />
<Picker.Item label="B+" value="B+" />
<Picker.Item label="B-" value="B-" />
<Picker.Item label="AB+" value="AB+" />
<Picker.Item label="AB-" value="AB-" />
<Picker.Item label="O+" value="O+" />
<Picker.Item label="O-" value="O-" />


</Picker>



</View>












    <TouchableOpacity style={styles.button} onPress={() => this.storeUser()}>
    <Text style={styles.buttonText}>S'inscrire </Text>
    </TouchableOpacity>



    <TouchableOpacity style={{alignSelf:"center",marginTop:16}} onPress={()=> this.props.navigation.navigate("Login")} >

    <Text>
    Déjà inscrit ?<Text style={{color:"#ff5a4d"}}>Se connecter</Text>
    </Text>
    </TouchableOpacity>

    </View>


);
}
}

const styles=StyleSheet.create({
container :{

flex : 1,
backgroundColor:"#e81123",
justifyContent:'center',
alignItems : 'center'
},

greeting:{
marginTop:20,
fontSize:18,
fontWeight:"400",
textAlign:"center",
color:"#fff"
},
errorMessage:{

height:72,
alignItems:"center",
justifyContent:"center",
marginHorizontal:30
},
inputBox:{

  borderBottomColor:"#8A8F9E",
  borderBottomWidth:StyleSheet.hairlineWidth,
  height:48,
  backgroundColor:'rgba(250,250,250,0.999)',
  borderRadius:20,
  paddingHorizontal:20,
  fontSize:17,
  color:"#141414",
  marginVertical:5,
  //textAlign:'center'
},
button:{
  marginTop:10,
  marginHorizontal:30,
  width:200,
  height:48,
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
textAlign:"center",
marginTop:219

},
back:{
position:"absolute",
top:48,
left:32,
width:32,
height:32,
boorderRadius :16,
backgroundColor:"rgba(21,22,48,0.1)",
alignItems:"center",
justifyContent:"center"

},
avatar:{
width:90,
height:90,
borderRadius:50,
backgroundColor:"#E1E2E6",
marginTop:8,
justifyContent:"center",
alignItems:"center"


},

})
