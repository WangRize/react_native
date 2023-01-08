'use strict';

import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
} from 'react-native';

// import TabBarView from '../Containers/TabBarView';
import HomePage from '../Pages/HomePage';

var {height, width} = Dimensions.get('window');

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {navigation} = this.props;
    console.log("Splash 1111111111")
     this.timer=setTimeout(() => {
      console.log("Splash 22222222222")
      InteractionManager.runAfterInteractions(() => {
        navigation.push('HomePage')
        // .resetTo({
        //   component: HomePage,
        //   name: 'HomePage'
        // });
      });
    }, 2000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
 
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#fadc98'}}>
      <Image
        style={{flex:1,width:width,height:height}}
        source={require('../Img/10.png')}
        />
      </View>
    );
  }
}
export default Splash;