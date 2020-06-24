import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animbutton from './animbutton'
const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {"quiz" : {
  "quiz1" : {

    "question1" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "Vrai",
          "option2" : "Faux",
        },
      "question" : "On doit être à jeun pour faire un don du sang "
    },
    "question2" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "Vrai",
          "option2" : "Faux",

        },
      "question" : "Il y a risque de contracter une infection transmissible lors d'un don du sang "
    },
    "question3" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "45",
          "option2" : "50",
          "option3" : "60",

        },
      "question" : "On peut donner son sang si on pèse au minimum __ kilos "
    },
    "question4" : {
      "correctoption" : "option1",
      "options" : {
        "option1" : "4 fois ",
        "option2" : "5 fois ",
        "option3" : "6 fois ",
      },
      "question" : "Chaque année une femme peut donner son sang __  "
    },
    "question5" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "Vrai",
          "option2" : "Faux",

        },
      "question" : "Le corps humain contient en moyenne 10 litres de sang "
    },

    "question6" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "3",
          "option2" : "4",
          "option3" : "5",

        },
      "question" : "Il existe trois __ groupes sanguins  "
    },
    "question7" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "Vrai",
          "option2" : "Faux",

        },
      "question" : "Un donneur du groupe O peut donner son sang à tous les malades "
    },

    "question8" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "400",
          "option2" : "460 ou 480 ",

        },
      "question" : "La quantité maximum d'une poche de sang prélevée est de __ mL  "
    },
    "question9" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "Transmettre l'oxygène dans le sang",
          "option2" : "Empecher le saignement ",
          "option3" : "Combattre les infections ",

        },
      "question" : "Les globules rouges servent à __ "
    },
    "question10" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "un mois",
          "option2" : "deux mois ",
          "option3" : "un an  ",

        },
      "question" : "On peut concerver le plasma congelé pendant __ "
    },

  }
}
}
export default class Quiz extends Component {
  constructor(props){
    super(props);
    this.qno = 0
    this.score = 0

    const jdata = jsonData.quiz.quiz1
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    this.state = {
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0
    }

  }
  prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++

      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{

      this.props.quizFinish(this.score*100/10)
     }
  }
  _answer(status,ans){

    if(status == true){
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
        if(ans == this.state.correctoption ){
          this.score += 1
        }
      }else{
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || ans == this.state.correctoption){
        this.score -= 1
       }
      }

  }
  render() {
    let _this = this
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      return (  <View key={k} style={{margin:10}}>

        <Animbutton countCheck={_this.state.countCheck} onColor={"blue"} effect={"tada"} _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]} />

      </View>)
    });

    return (
      <ScrollView style={{backgroundColor: '#F5FCFF',paddingTop: 10}}>
      <View style={styles.container}>

      <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>

      <View style={styles.oval} >
        <Text style={styles.welcome}>
          {this.state.question}
        </Text>
     </View>
        <View>
        { options }
        </View>
        <View style={{flexDirection:"row"}}>
      {/*   <Button
          onPress={() => this.prev()}
          title="Prev"
          color="#841584"
        />
        <View style={{margin:15}} />*/}

        <TouchableOpacity onPress={() => this.next()} >
          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, backgroundColor:"white"}}>
            <Icon name="md-arrow-round-forward" size={30} color="red" />
          </View>
        </TouchableOpacity >

        </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  oval: {
  width: width ,
  borderRadius: 50,
  backgroundColor: 'red'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 16.5,
    alignItems:'center',
    margin: 15,
    color: "white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
