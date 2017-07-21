import React, { Component } from 'react';
import {View, Animated, StyleSheet, TouchableOpacity,Text, Easing, Dimensions , ActivityIndicator,TextInput} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

class Login extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false
        };
        this._onPress = this._onPress.bind(this);
        this._onGrow = this._onGrow.bind(this);
        this.gotoHome = this.gotoHome.bind(this);
        this.buttonAnimated = new Animated.Value(0);
        this.growAnimated = new Animated.Value(0);
    }


    _onGrow() {
        Animated.timing(
            this.growAnimated,
            {
                toValue: 1,
                duration: 300,
                easing: Easing.linear
            }
        ).start();
    }


    _onPress() {
        if (this.state.isLoading) return;

        this.setState({isLoading: true});

        console.log('on press');
        Animated.timing(
            this.buttonAnimated,
            {
                toValue: 1,
                duration: 300,
                easing: Easing.linear
            }
        ).start();

        setTimeout(() => {
            this._onGrow();
        }, 2000);

        setTimeout(() => {
            this.gotoHome();
        }, 2500);
    }

    gotoHome(){
        this.props.navigation.navigate('Home');
    }

    render() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH, MARGIN]
        });
        const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, MARGIN]
        });
        return (
            <View style={styles.container}>
                <TextInput underlineColorAndroid="#fff" placeholderTextColor="#fff" style={{color:"#fff", width:300}}/>
                <Animated.View style={{width: changeWidth}}>
                    <TouchableOpacity style={styles.button}
                                      onPress={this._onPress}
                                      activeOpacity={1} >
                        {this.state.isLoading ?
                            <ActivityIndicator color="#fff" />
                            :
                            <Text style={styles.text}>LOGIN</Text>
                        }
                    </TouchableOpacity>
                    <Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
                </Animated.View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#091705'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: '#F035E0',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#F035E0',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    },
});

export default Login;