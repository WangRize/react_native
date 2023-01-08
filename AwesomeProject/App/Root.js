





import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store/Store';

import App from './Containers/App';

export default class Root extends Component {
    render() {
        console.log("Root render ~~")
        // return (<View style={{flex: 1, backgroundColor: '#89abcd'}}>
        //       <Text >hello rn</Text>
        //   </View>
        // )
        
        return (
            <Provider store = {store} >
                <App />
            </Provider>
        )
    }
}