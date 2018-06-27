import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const commonStyles = StyleSheet.create({
    graySeparator: {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
    graySeparatorInner: {
        width: '90%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#F5F5F5'
    },
    smallWhiteText: {
        fontFamily: 'Lato-L',
        color: 'white',
        fontSize: 12
    },
    textInput: {
        fontSize: 16,
        paddingVertical: 12,
        fontFamily: 'SSP-L',
        paddingHorizontal: 46,
        width: '100%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    orangeBtnGradient: {
        width: '100%',
    },
    orangeBtn: {
        width: '100%',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        overflow: 'hidden',
        zIndex: 9,
    },
    orangeBtnShadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .11,
        shadowRadius: 4,
        width: '100%'
    },
    orangeBtnInner: {
        paddingVertical: 14,
        alignItems: 'center'
    },
    orangeBtnText: {
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white',
    },
});

export default commonStyles;