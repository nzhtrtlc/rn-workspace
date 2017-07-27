import React from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { StatusBar, Text, View, Platform, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { LinearGradient, BlurView } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Home from './layout/screens/Home';
import Users from './layout/screens/Users';

const DrawerIcon = ({navigation}) => {
    let iconName = Platform.OS == "ios" ? "ios-menu" : "md-menu";
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} style={{paddingHorizontal: 10}}>
            <Ionicons name={iconName} size={24}/>
        </TouchableOpacity>
    )
};
const DrawerContent = (props) => {
    return (
        <LinearGradient
            colors={['#c7e0ed', '#83a4bf', '#3b5b84']}
            style={{flex: 1}}>
            <LinearGradient
                //colors={['#3b5b84', '#83a4bf', '#c7e0ed']}
                style={style.drawerHeader}>
                <Text>jaskd asd</Text>
            </LinearGradient>
            <View style={style.drawerContent}>
                <DrawerItems {...props} style={style.drawerItem}/>
            </View>
        </LinearGradient>
    )
};

const HomeStackNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: props => ({
            title: 'Home',
            headerLeft: <DrawerIcon {...props}/>
        })
    },
});
const UsersStackNavigator = StackNavigator({
    Users: {
        screen: Users,
        navigationOptions: props => ({
            title: 'Users',
            headerLeft: <DrawerIcon {...props}/>
        })
    },
});

const MyDrawerNavigator = DrawerNavigator({
    HomeStack: {
        screen: HomeStackNavigator,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (<Ionicons name="md-home" size={22} color={tintColor}/>),
        },
    },
    UsersStack: {
        screen: UsersStackNavigator,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (<Ionicons name="md-people" size={22} color={tintColor}/>),
        },
    }
}, {
    drawerWidth: 300,
    contentOptions: {
        activeTintColor: '#e9178a',
    },
    contentComponent: (props) =>
        <View style={style.drawerContainer}>
            <LinearGradient
                colors={['#CE1772','#BD1766' ,'#91174A']}
                style={style.drawerHeader}>
                <View style={style.headerImage}>
                    <Image style={{width:80,height:80}} resizeMode="stretch" source={{uri : 'http://niptara.com/wp-content/uploads/2015/04/Gal-Gadot.jpg?x58279'}}/>
                </View>
                <Text style={{color : '#fff'}}>nezih@cloudnesil.com</Text>
            </LinearGradient>
            <View style={style.drawerContent}>
                <DrawerItems {...props}/>
            </View>
        </View>
});

const AppNavigator = StackNavigator({
    Drawer: {screen: MyDrawerNavigator},
}, {
    headerMode: 'none',
    cardStyle: {paddingTop: StatusBar.currentHeight}
});

const style = StyleSheet.create({
    drawerContainer : {
      flex : 1
    },
    drawerHeader: {
        flex: 1,
        justifyContent :'flex-end',
        paddingVertical: 20,
        paddingHorizontal:10
    },
    drawerContent: {
        flex: 3,
        backgroundColor: '#fff'
    },
    headerImage: {
        flex: 1,
        width: Dimensions.get('window').width - 100,
        height: Dimensions.get('window').width / 2
    },

    // headerContent: {},
    // drawerItem: {
    //     flex: 1,
    //     padding: 10
    // },
    // drawerItemText: {}
});

export default AppNavigator;