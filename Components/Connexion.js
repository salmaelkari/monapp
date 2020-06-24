import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button} from 'react-native';
//import Button from 'react-native-button';
import { AppStyles, ButtonStyle, TextInputStyle, TextStyle } from '../Components/AppStyles';
import firebase from '../Components/config';

export default class SignupScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      fullname: '',
      phone: '',
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  onRegister = () => {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const { navigation } = this.props;
        const { fullname, phone, email } = this.state;
        const data = {
          email: email,
          fullname: fullname,
          phone: phone,
        };
        firebase.firestore().collection('users').doc(user.uid).set(data);

       //this.props.navigation.navigate('App');
  })}

  render() {
    return (
      <View style={styles.container}>
        <Text style={[TextStyle.title, TextStyle.leftTitle]}>Create new account</Text>
        <View style={TextInputStyle.container}>
          <TextInput style={TextInputStyle.body} placeholder="Full Name" onChangeText={(text) => this.setState({ fullname: text })} value={this.state.fullname} placeholderTextColor={AppStyles.color.grey} underlineColorAndroid='transparent' />
        </View>
        <View style={TextInputStyle.container}>
          <TextInput style={TextInputStyle.body} placeholder="Phone Number" onChangeText={(text) => this.setState({ phone: text })} value={this.state.phone} placeholderTextColor={AppStyles.color.grey} underlineColorAndroid='transparent' />
        </View>
        <View style={TextInputStyle.container}>
          <TextInput style={TextInputStyle.body} placeholder="E-mail Address" onChangeText={(text) => this.setState({ email: text })} value={this.state.email} placeholderTextColor={AppStyles.color.grey} underlineColorAndroid='transparent' />
        </View>
        <View style={TextInputStyle.container}>
          <TextInput style={TextInputStyle.body} placeholder="Password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} value={this.state.password} placeholderTextColor={AppStyles.color.grey} underlineColorAndroid='transparent' />
        </View>
        <Button containerStyle={[ButtonStyle.facebookContainer, { marginTop: 50 }]} style={ButtonStyle.facebookText}
          onPress={() => this.onRegister()}>Sign Up</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

});
