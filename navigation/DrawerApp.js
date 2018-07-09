import React from 'react'
import { View, TouchableHighlight, Text, Image, Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Vip from '../components/Vip';

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
                    labelStyle: {
                    },
                },
            }
            return (<View style={{ flexDirection: 'column', flex: 1 }}>
              <View style={{ height: '19.25%', width: '100%' }}>
                    <View style={{ paddingTop: 28, paddingBottom: 23, flexDirection: 'row' }}>
                        <Image
                              style={{
                                    marginLeft: 23, height: 60, width: 60, borderRadius: 30, borderWidth: 1, borderColor: 'rgb(128, 77, 156)',
                                }} source={{ uri: 'https://www.gsmarena.com/xiaomi_mi_8-pictures-9065.php' }}
                            />
                            <View style={{ flexDirection: 'column', marginLeft: 14, flex: 1 }}>
                      <Text
                                numberOfLines={1} style={{
                                        backgroundColor: 'transparent', color: 'white',
                                    }}
                              >Mudasir
                                </Text>
                      <Text
                                numberOfLines={1} style={{
                                        backgroundColor: 'transparent', color: 'white', marginTop: 6,
                                    }}
                              >emailID
                              </Text>
                    </View>
                        </View>
                </View>
              <View style={{ flex: 1 }}>
                    <DrawerItems {...newProps} />
                </View>
              <View>
                    <TouchableHighlight onPress={props.screenProps.logout}>
                  <View style={{
                            paddingTop: 17, paddingBottom: 17, borderTopColor: '#EEE', borderTopWidth: 1,
                        }}
                        >
                            <Text style={{
                                color: 'black', textAlign: 'center',
                            }}
                    >
                                Logout
                    </Text>
                        </View>
                </TouchableHighlight>
                </View>
                    </View>)
        },
    },
)

export { DrawerApp }
