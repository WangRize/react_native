/**
 * @format
 */

import {AppRegistry, Text, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);



import Root from './App/Root';
AppRegistry.registerComponent(appName, () => Root);




// import React, { Component } from 'react';
// export default class Home extends Component {
//   constructor(props) {
//       super(props);
//   }
//   render() {
//       return (
//           <View style={{flex: 1, backgroundColor: '#89abcd'}}>
//               <Text >hello rn</Text>
//           </View>
//       );
//   }
// }

// AppRegistry.registerComponent(appName, () => Home);