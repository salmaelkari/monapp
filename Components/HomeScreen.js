
import {View , Text , Button,StyleSheet,TouchableOpacity,LayoutAnimation } from 'react-native';

import React, { Component } from 'react';
import {  ScrollView, ActivityIndicator} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../Components/config';
import { Appbar} from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

export default class HomeScreen  extends React.Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore()
.collection("users")
.orderBy("ville" , "asc")


    this.state = {
      isLoading: true,
      search:'',
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name, email, mobile,ville,groupesanguin,avatar_url } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        email,
        mobile,
        ville,
        avatar_url,
        groupesanguin,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
  }

  state = {
     search: '',
   };

  searchFilterFunction = search => {
     const newData = this.state.userArr.filter(item => {

       const itemData = item.ville ? item.ville.toUpperCase() : ''.toUpperCase();
     //const itemData = `${item.ville.toUpperCase()}`;
     const textData = search.toUpperCase();
     return itemData.indexOf(textData) > -1;
     });
     this.setState({
       userArr: newData,
     });
   };

   searchFilterFunction2 = search => {
      const newData = this.state.userArr.filter(item => {

        const itemData = item.groupesanguin ? item.groupesanguin.toUpperCase() : ''.toUpperCase();
      //const itemData = `${item.ville.toUpperCase()}`;
      const textData = search.toUpperCase();
      return itemData.indexOf(textData) > -1;
      });
      this.setState({
        userArr: newData,
      });
    };




  render() {
   const { search , userArr} = this.state;
    return (
<>
<View>
<SearchBar
                      ref={o => (this.searchBar = o)}
                       style={styles.searchBar}
                       placeholder="Saisissez votre ville"
                      onChangeText={search => this.searchFilterFunction(search)}
                         underlineColorAndroid="transparent"
                       value={this.state.search}
                        platform="android"
                       placeholderTextColor="grey"
                       placeholderMarginLeft='5'
                       lightTheme={true}

					containerStyle={{ backgroundColor: '#e81123', borderTopWidth: 0, borderBottomWidth: 0 }}
					inputStyle={{ backgroundColor: '#ffffff' }}
                   />
    </View>
    <View style ={styles.container2}>
                   <SearchBar
                                         ref={o => (this.searchBar = o)}
                                          style={styles.searchBar2}
                                          placeholder="Saisissez votre groupe saguin(A+,A-,O+.....) "

                                         onChangeText={search => this.searchFilterFunction2(search)}
                                            underlineColorAndroid="transparent"
                                          value={this.state.search}
                                           platform="android"
                                          placeholderTextColor="grey"
                                          lightTheme={true}

                   					containerStyle={{ backgroundColor: '#e81123', borderTopWidth: 0, borderBottomWidth: 0 }}
                   					inputStyle={{ backgroundColor: '#ffffff' }}
                                      />

</View>
      <ScrollView style={styles.container}>
          {
            this.state.userArr.map((item, i) => {
              return (

                <ListItem
                  key={i}
                   chevron={{ color: '#e81123' }}
                  bottomDivider
                  title={item.name}
                  titleStyle={{ marginLeft:10,color: '#e81123', fontWeight: 'bold' }}
                  //subtitle={item.ville}
                  rightTitle={item.mobile }
                  leftAvatar={{ source: { uri: item.avatar_url } }}
                  //rightSubtitle={item.groupesanguin}
                  rightsubtitleStyle={{ color: '#e81123', fontWeight: 'bold' }}
                  subtitleStyle={{ color: 'blue' }}
                  onPress={() => {
                    this.props.navigation.navigate('HopitauxScreen', {
                      userkey: item.key
                    });
                  }}/>
              );
            })
          }
      </ScrollView>

 </>



    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  container2: {
    marginTop:10,

  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchBar: {

       flexDirection: 'row',
       padding: 1,
       backgroundColor: 'green',
       marginHorizontal: 20,
       shadowColor: 'black',
       shadowOpacity: 0.2,
       shadowOffset: {width: 0, height: 0},
       elevation: 1,

   },
   searchBar2: {
       marginTop:2,
        flexDirection: 'row',
        padding: 1,
        backgroundColor: 'green',
        marginHorizontal: 20,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 0},
        elevation: 1,

    },
})
