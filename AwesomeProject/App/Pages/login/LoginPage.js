import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
        // TabBarIOS,

} from 'react-native';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={[styles.container, {flexDirection: 'column'}]}>
                <Text>ECO</Text>
                <Text>开启你的装备世界</Text>


                <Text>手机号码登录</Text>
                <Text>微信登录</Text>

                <View style={{flexDirection: 'row'}}>
                    <Image></Image>
                    <Text>已阅读并同意<Text style={styles.linkText}>用户协议</Text>和<Text style={styles.linkText}>隐私政策</Text></Text>
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    linkText: {
        color: '#7BF231'
    }
});