import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerTopBg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        left: 0,
        height: '100%',
        right: 0
    },
    profileName: {
        fontSize: 16,
        textShadowColor: 'rgba(0,0,0,0.16)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 4,
        color: 'white',
        fontFamily: 'Lato-R'
    },
    profileEmail: {
        fontSize: 13,
        fontFamily: 'SSP-L',
        color: 'white',
        paddingTop: 4
    },
    profileInfoWrap: {
        paddingLeft: 16,
    },
    blackTint: {
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.65)',
        left: 0,
        flex: 1,
        right: 0,
        bottom: 0
    },
});

export default styles;