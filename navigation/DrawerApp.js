import React from 'react'
import {View, TouchableHighlight, Text, Image, Dimensions} from 'react-native'
import {createDrawerNavigator, DrawerItems} from 'react-navigation'

import Home from "../screens/Home";
import Car from "../screens/Cars";
import Profile from "../screens/Profile";
import Vip from '../components/Vip';
import Deals from '../components/AddDeal'
import styles from '../assets/styles/drawer';

const dimen = Dimensions.get('window')
const DrawerApp = createDrawerNavigator(
    {
        Home: {
            path: '/',
            screen: Home,
        },
        Car: {
            path: '/',
            screen: Car,
        },
        Profile: {
            path: '/',
            screen: Profile,
        },
        // Vip: {
        //     path: '/',
        //     screen: Vip
        // },
        Deals: {
            path: '/',
            screen: Deals
        }

    },
    {
        contentComponent: (props) => {
            const newProps = {
                ...props,
                ...{
                    activeTintColor: 'black',
                    activeBackgroundColor: 'white',
                    inactiveTintColor: 'rgba(0, 0, 0, 0.54)',
                    inactiveBackgroundColor: 'white',
                    labelStyle: {},
                },
            }
            console.log(props)
            return (<View style={{flexDirection: 'column', flex: 1}}>
                <View style={{width: '100%', backgroundColor: 'gray', flex: .25, justifyContent: 'center'}}>
                    <Image source={require('../assets/images/drawerbg.jpg')} style={styles.drawerTopBg}/>
                    <View style={styles.blackTint}/>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                        <Image
                            style={{
                                marginLeft: 23,
                                height: 60,
                                width: 60,
                                borderRadius: 30,
                                borderWidth: 1,
                                borderColor: 'rgb(128, 77, 156)',
                            }} source={{uri:'https://tripjhon.insightssoftwares.com/storage/profile_pics/' + props.screenProps.user.dp}}/>
                        <View style={styles.profileInfoWrap}>
                            <Text
                                numberOfLines={1} style={styles.profileName}>{props.screenProps.user.name}</Text>
                            <Text
                                numberOfLines={1} style={styles.profileEmail}>{props.screenProps.user.email}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <DrawerItems {...newProps} />
                </View>
                <View>
                    <TouchableHighlight onPress={props.screenProps.logout}>
                        <View style={{
                            paddingVertical: 17, borderTopColor: '#EEE', borderTopWidth: 1
                        }}>
                            <Text style={{
                                color: 'black', textAlign: 'center'
                            }}>
                                Logout
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>)
        },
    },
)

export {DrawerApp}
