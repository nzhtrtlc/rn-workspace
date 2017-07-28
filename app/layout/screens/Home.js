import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo';
class Home extends React.Component {

    componentWillMount() {
       //this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image resizeMode="stretch" style={styles.bg} source={{uri : "http://i.imgur.com/bshfOAr.jpg"}}>
                    <View style={{height : '100%',backgroundColor:'rgba(0,0,0,.5)',alignItems :'center', justifyContent :'center'}}>
                        <Text style={{color : '#fff'}}> Test Text </Text>
                    </View>
                </Image>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgContainer : {
        flex : 1,
        backgroundColor : 'rgba(0,0,0,.1)',
        zIndex : 9999
    },
    bg : {
      flex:1
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