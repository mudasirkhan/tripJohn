import React from 'react';
import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        padding: 30,
        justifyContent: 'flex-end'
    },
    container: {
        flex: 1
    },
    topHelpContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    headlineWrap: {
        overflow: 'visible',
        position: 'absolute',
        top: 42,
        left: 0,
    },
    boldLine: {
        fontSize: 24,
        fontFamily: 'Lato-B',
        color: 'white',
        textShadowOffset: {width: 0, height: 2},
        textShadowColor: 'rgba(0,0,0,0.11)',
        textShadowRadius: 4
    },
    boldLineOrange: {
        fontSize: 24,
        fontFamily: 'Lato-BlackI',
        color: '#FF7B0D',
        textShadowOffset: {width: 0, height: 2},
        textShadowColor: 'rgba(0,0,0,0.11)',
        textShadowRadius: 4
    },
    welcomeGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        right: 0,
        bottom: 0
    },
    blackTint: {
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.16)',
        left: 0,
        flex: 1,
        right: 0,
        bottom: 0
    },
    dubaiskyline: {
        opacity: .3,
        position: 'absolute',
        bottom: 0
    },
    cloud: {
        position: 'absolute',
        top: '20%',
        right: '35%',
        width: 50,
        height: 18,
        resizeMode: 'contain'
    },
    sunwaves: {
        position: 'absolute',
        top: 0,
        right: -20,
        width: '75%'
    },
    regTopHelpTextTitle: {
        color: '#EFEDF5',
        marginBottom: 8,
        ...Platform.select({
            ios: {
                fontSize: 16,
            },
            android: {
                fontSize: 14,
            },
        }),
        fontFamily: 'Lato-R'
    },
    regTopHelpTextDesc: {
        color: '#EFEDF5',
        ...Platform.select({
            ios: {
                fontSize: 14,
            },
            android: {
                fontSize: 12,
            },
        }),
        fontFamily: 'SSP-L'
    }
});

export default styles;