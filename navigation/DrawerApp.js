import React from 'react'
import {View, TouchableHighlight, Text, Image, Platform, Dimensions} from 'react-native'
import {createDrawerNavigator, DrawerItems} from 'react-navigation'

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Vip from '../components/Vip';
import styles from '../assets/styles/drawer';

const dimen = Dimensions.get('window')
const DrawerApp = createDrawerNavigator(
    {
        Home: {
            path: '/',
            screen: Home,
        },
        Profile: {
            path: '/',
            screen: Profile,
        },
        Vip: {
            path: '/',
            screen: Vip
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
                            }} source={require('../assets/images/photo.jpg')}/>
                        />
                        <View style={styles.profileInfoWrap}>
                            <Text
                                numberOfLines={1} style={styles.profileName}>Abdul Majid</Text>
                            <Text
                                numberOfLines={1} style={styles.profileEmail}>maajidz@yahoo.com</Text>
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
