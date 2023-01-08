import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
        // TabBarIOS,

} from 'react-native';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home page",
        };
    }
    render() {
        return (
            <View>
                <Text>Home Page</Text>
            </View>
        );
    }


}