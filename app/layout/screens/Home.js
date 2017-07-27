import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo';
class Home extends React.Component {

    componentWillMount() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={{padding: 15, alignItems: 'center', borderRadius: 5}}>
                    <Text style={{backgroundColor: 'transparent', fontSize: 15, color: '#fff'}}>
                        Sign in with Facebook
                    </Text>
                </LinearGradient>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default Home;