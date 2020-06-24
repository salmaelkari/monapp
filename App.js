
import React, { Fragment } from 'react';
import {StyleSheet , Text , View ,Button, Image}from 'react-native';

import SwitchNavigator from './Components/SwitchNavigator';


import * as  firebase from 'firebase';

export default class App extends React.Component {
	render() {
		return (

				<SwitchNavigator/>

		)
	}
}
