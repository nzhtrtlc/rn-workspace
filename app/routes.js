import React from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { StatusBar, Text, View, Platform, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
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
        <View style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
            <View style={style.drawerHeader}>

            </View>
            <View style={style.drawerContent}>
                <DrawerItems {...props} style={style.drawerItem}/>
            </View>
        </View>
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
            drawer: () => ({
                label: 'Home',
                icon: ({tintColor}) => (
                    <Ionicons name="md-home" size={22} color={tintColor}/>
                ),
            })
        },
    },
    UsersStack: {
        screen: UsersStackNavigator,
        navigationOptions: {
            drawer: () => ({
                label: 'Users',
                icon: ({tintColor}) => (
                    <Ionicons name="md-people" size={22} color={tintColor}/>
                ),
            })
        },
    }
}, {
    drawerWidth: 300,
    contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor : 'transparent'
    },
    contentComponent: props => <DrawerContent {...props}
                                              getLabel={(scene) => (
                                                  <View style={style.drawerItem}>
                                                      <Text>{props.getLabel(scene)}</Text>
                                                      <Text>{console.log("Filter :",props.items.filter(x => x.key == props.activeItemKey).key == scene.route.key)}</Text>
                                                  </View>
                                              )}/>
});

const AppNavigator = StackNavigator({
    Drawer: {screen: MyDrawerNavigator},
}, {
    headerMode: 'none',
    cardStyle: {paddingTop: StatusBar.currentHeight}
});

const style = StyleSheet.create({
    drawerHeader: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    headerImage: {
        flex: 1,
        width: Dimensions.get('window').width - 100,
        height: Dimensions.get('window').width / 2
    },
    drawerContent: {
        flex: 2,
    },
    headerContent: {},
    drawerItem: {
        flex:1,
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    image: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
    },
});

export default AppNavigator;