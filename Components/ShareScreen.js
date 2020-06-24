
import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet, Dimensions,Platform, Linking, Alert, Share} from 'react-native';
import {Ionicons}from'@expo/vector-icons';
import{FontAwesome}from'@expo/vector-icons';


let facebookParameters = ""

let TwitterParameters = ""

const WhatsappShareIcon = () => {


      return(

        <Image style={{width:50, height:50, alignSelf:'center', marginBottom: 5}} source={require('../image/whatsapp-android.png')}></Image>

      );

    }





export default class ShareScreen extends Component{

    componentDidMount(){



        // Check which props given and create url query

        if(this.props.FacebookShareURL != undefined)

        {

            if(facebookParameters.includes("?") == false)

            {

                facebookParameters = facebookParameters+"?u="+encodeURI(this.props.FacebookShareURL);

            }else{

                facebookParameters = facebookParameters+"&u="+encodeURI(this.props.FacebookShareURL);

            }

        }

        if(this.props.FacebookShareMessage != undefined)

        {

            if(facebookParameters.includes("?") == false)

            {

                facebookParameters = facebookParameters+"?quote="+encodeURI(this.props.FacebookShareMessage);

            }else{

                facebookParameters = facebookParameters+"&quote="+encodeURI(this.props.FacebookShareMessage);

            }

        }

        if(this.props.TwitterShareURL != undefined)

        {

            if(TwitterParameters.includes("?") == false)

            {

                TwitterParameters = TwitterParameters+"?url="+encodeURI(this.props.TwitterShareURL);

            }else{

                TwitterParameters = TwitterParameters+"&url="+encodeURI(this.props.TwitterShareURL);

            }

        }

        if(this.props.TwitterShareMessage != undefined)

        {

            if(TwitterParameters.includes("?") == false)

            {

                TwitterParameters = TwitterParameters+"?text="+encodeURI(this.props.TwitterShareMessage);

            }else{

                TwitterParameters = TwitterParameters+"&text="+encodeURI(this.props.TwitterShareMessage);

            }

        }

        if(this.props.TwitterViaAccount != undefined)

        {

            if(TwitterParameters.includes("?") == false)

            {

                TwitterParameters = TwitterParameters+"?via="+encodeURI(this.props.TwitterViaAccount);

            }else{

                TwitterParameters = TwitterParameters+"&via="+encodeURI(this.props.TwitterViaAccount);

            }

        }

    }

    render(){

        return(
<View style={styles.container}>
<View style={styles.logo}>


<Image source={require('../image/ma.jpg')} style={{width:150, height:150, alignSelf:'center',borderRadius:100,
 marginBottom: 5,marginTop:50}}></Image>

</View>
            <View style={styles.ShareArea}>

                <View style={styles.ShareTitleArea}>


                  <Text style={styles.ShareTitle}>Partager l'application </Text>
<FontAwesome name="heart" size={20}  color={'#ffffff'} style={{marginTop:'10'}}></FontAwesome>
                </View>

                <View style={styles.ShareItems}>

                <TouchableOpacity onPress={() => {

                  let url = 'whatsapp://send?text='+this.props.WhatsappMessage;

                  Linking.openURL(url).then((data) => {

                    console.log('open whatsapp');

                  }).catch(() => {

                    Alert.alert('Error',

                    'Make sure Whatsapp installed on your device',

                    {cancelable: true})

                  });

                }}>

                {WhatsappShareIcon()}

                <Text style={{ fontFamily: 'Iowan Old Style',fontSize: 17 ,color:'white'}} > WhatsApp</Text>

                </TouchableOpacity>

                </View>

                <View style={styles.ShareItems}>

                <TouchableOpacity onPress={() => {

                  let url = 'https://www.facebook.com/sharer/sharer.php'+facebookParameters;

                  Linking.openURL(url).then((data) => {

                    console.log('open facebook')

                  }).catch(() => {

                    Alert.alert('Error',

                    'An error occurred while share',

                    {cancelable: true})

                  });

                }}>

                <Image source={require('./image/facebook.png')} style={{width:50, height:50, alignSelf:'center', marginBottom: 5}}></Image>

                <Text style={{ fontFamily: 'Iowan Old Style' ,fontSize: 17,color:'white'}}> Facebook</Text>

                </TouchableOpacity>


                </View>


                <View style={styles.ShareItems}>

                <TouchableOpacity onPress={() => {

                    console.log(this.props.TwitterShareURL)

                    let url = 'https://twitter.com/intent/tweet'+TwitterParameters;

                  Linking.openURL(url).then((data) => {

                    console.log('open twitter')

                  }).catch(() => {

                    Alert.alert('Error',

                    'An error occurred while share',

                    {cancelable: true})

                  });

                }}>

                <Image source={require('../image/twitter.png')} style={{width:50, height:50, alignSelf:'center', marginBottom: 5}}></Image>

                <Text style={{ fontFamily: 'Iowan Old Style',fontSize: 17,color:'white' }}>Twitter</Text>

                </TouchableOpacity>

                </View>

                <View style={styles.ShareItems}>

                <TouchableOpacity onPress={() => {

                  Share.share({

                    message: this.props.NativeShareMessage != undefined?this.props.NativeShareMessage:null,

                    url: this.props.NativeShareURL != undefined?this.props.NativeShareURL:null, //only for ios

                    title: this.props.NativeShareTitle != undefined?this.props.NativeShareTitle:null

                  });

                }}>

                <Image source={require('../image/more.png')} style={{width:50, height:50, alignSelf:'center', marginBottom: 5}}></Image>

                <Text style={{textAlign: 'center', fontSize: 17 , color:'white',fontFamily: 'Iowan Old Style'}}>Plus</Text>

                </TouchableOpacity>

                </View>

            </View>
</View>
        );

    }

}



const screenWidth = Math.round(Dimensions.get('window').width);

const screenHeight = Math.round(Dimensions.get('window').height);



const styles = StyleSheet.create({

    ShareArea: {

      backgroundColor: '#e81123',

      //width: screenWidth-20,

      alignSelf: 'center',

      marginTop: 5,

      marginBottom: 10,

      flexWrap: 'wrap',

      flexDirection: 'row',

      justifyContent: 'center'

    },
    container:{
      flex:1,
        backgroundColor: '#e81123',
        marginTop:0.1,
    },

logo:{
  marginTop:0.1,
},
    ShareTitleArea: {

      height: 100,

      width: screenWidth-20,

      backgroundColor: '#e81123',

      alignItems: 'center',

      justifyContent: 'center',
      marginTop:0.0000002,

    },


    ShareTitle:{

      fontSize: 20,
      alignItems:'center',

      fontFamily: 'Iowan Old Style'

    },

    ShareItems:{

      width: 70,

      height: 100,

      alignItems: 'center',

      justifyContent: 'center',

      marginLeft: 75,

      marginRight: 7,
    marginTop:3,

    }

  });
