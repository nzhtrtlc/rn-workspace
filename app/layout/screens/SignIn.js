import React, { Component } from 'react';
import {
    View,
    Animated,
    StyleSheet,
    TouchableOpacity,
    Text,
    Easing,
    Dimensions,
    ActivityIndicator,
    TextInput,
    Image,
    StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from "@expo/vector-icons/index";

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

    gotoHome() {
        console.log('navigate');
        this.props.navigation.navigate('Drawer');
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
            <Image resizeMode="stretch" style={{flex: 1}} source={{uri: "https://s-media-cache-ak0.pinimg.com/originals/8c/09/29/8c0929ae7c67d19986f66a1d1a3ec0ed.jpg"}}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image resizeMode="contain" style={styles.logoImage}
                               source={{uri: "http://static.stereogum.com/uploads/2017/05/Papa-Johns-1494277489.png"}}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.textInputContainer}>
                            <TextInput underlineColorAndroid="transparent" placeholder="username or email"
                                       placeholderTextColor="#686868" returnKeyType="next" style={styles.textInput}/>
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput secureTextEntry underlineColorAndroid="transparent" placeholder="password"
                                       placeholderTextColor="#686868" returnKeyType="go" style={styles.textInput}/>
                        </View>
                    </View>
                    <View style={styles.orLoginWith}>
                        <Text>OR</Text>
                    </View>
                    <View style={styles.socialLoginContainer}>
                        <View style={{marginTop: 10, alignItems: 'flex-start'}}>
                            <TouchableOpacity activeOpacity={0.6}>
                                <LinearGradient
                                    start={{x: 0.2, y: 0.0}} end={{x: 0.4, y: 1.1}}
                                    locations={[0.1, 0.2, 1.1]}
                                    colors={['#4c669f', '#3b5998', '#192f6a']}
                                    style={styles.linearGradient}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Ionicons name="logo-facebook" size={20} color="#fff"/>
                                        <Text style={{
                                            backgroundColor: 'transparent',
                                            fontSize: 15,
                                            color: '#fff',
                                            marginLeft: 10
                                        }}>
                                            Sign In With Facebook
                                        </Text>
                                    </View>

                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        <View style={{marginTop: 10, alignItems: 'flex-start'}}>
                            <TouchableOpacity activeOpacity={0.6}>
                                <LinearGradient
                                    start={{x: 0.1, y: 0.2}} end={{x: 0.2, y: 2.2}}
                                    locations={[0.3, 0.2, 1.1]}
                                    colors={['#C3382B', '#cf372b', '#fffbf6']}
                                    style={styles.linearGradient}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Ionicons name="logo-google" size={20} color="#fff"/>
                                        <Text style={{
                                            backgroundColor: 'transparent',
                                            fontSize: 15,
                                            color: '#fff',
                                            marginLeft: 10
                                        }}>
                                            Sign In With Google
                                        </Text>
                                    </View>


                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/*<TextInput underlineColorAndroid="#fff" placeholderTextColor="#fff" returnKeyType="next" style={{color:"#fff", width:300}}/>*/}
                    {/*<Animated.View style={{width: changeWidth}}>*/}
                    {/*<TouchableOpacity style={styles.button}*/}
                    {/*onPress={this._onPress}*/}
                    {/*activeOpacity={1} >*/}
                    {/*{this.state.isLoading ?*/}
                    {/*<ActivityIndicator color="#fff" />*/}
                    {/*:*/}
                    {/*<Text style={styles.text}>LOGIN</Text>*/}
                    {/*}*/}
                    {/*</TouchableOpacity>*/}
                    {/*<Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />*/}
                    {/*</Animated.View>*/}
                </View>
            </Image>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,.7)',
    },
    bg: {
        flex : 1
    },
    logoContainer: {
        flex: 2,
        borderColor: 'yellow',
        //borderWidth: 1,
    },
    logoImage: {
        width: 200,
        height: 150,
        marginTop: StatusBar.currentHeight
    },
    inputContainer: {
        flex: 1,
        borderColor: 'blue',
        //borderWidth: 1
    },
    textInputContainer: {
        borderWidth: 1,
        borderColor: '#686868',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textInput: {
        color: "#fff",
        width: 300,
        padding : 10
    },
    orLoginWith: {},
    socialLoginContainer: {
        flex: 3
    },


    linearGradient: {
        alignItems: 'center',
        padding: 8,
        borderRadius: 5
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