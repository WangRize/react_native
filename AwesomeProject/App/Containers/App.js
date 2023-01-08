/**
 * Created by jason .
 */
import React from 'react';
import {
    Navigator,
    View,
    StyleSheet,
    Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Splash from '../Components/Splash';
import StatusBarIOS from '../Components/StatusBarIOS';

import HomePage from '../Pages/HomePage';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// StackRouter.js
function StackRouter(props) {
    return (
      <Stack.Navigator initialRouteName="Splash">
         <Stack.Screen
            name="Splash"
            component={Splash}
            {...props}
        />
        <Stack.Screen
            name="HomePage"
            component={HomePage}
            {...props}
        />
        
      </Stack.Navigator>
    );
  }

export class App extends React.Component {
    render() {
        console.log("App render ~~")
        return (
            <View style={{ flex: 1, backgroundColor: '#ff0000' }}>
                {/* <StatusBarIOS barStyle="default"/> */}

                {/* <Navigator
                    initialRoute={{ name: 'Splash', component: Splash }}

                    configureScene={(route) => {
                        if (route.sceneConfig) {
                            return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromRight;
                    } }
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps} />
                        )
                    } }
                    /> */}
                    <NavigationContainer>
                    {/* 导航组件 */}
                    <StackRouter {...this.props} ></StackRouter>
                </NavigationContainer>
            </View>
        )
    }
}

export default App;