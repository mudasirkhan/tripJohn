import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    modalWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        paddingBottom: 6,
        height: 54,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: .11,
                shadowRadius: 5,
            },
            android: {
                elevation: 4
            },
        }),
    },
    arrowBack: {
        // height: 20,
        // width: 20

    },
    modalTopBar: {
        height: 54,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    backButton: {
        width: 54,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    modalTitleText: {
        marginTop: -1,
        paddingRight: 16,
        fontFamily: 'Lato-R',
        color: '#483F61',
        ...Platform.select({
            ios: {
                fontSize: 18
            },
            android: {
                fontSize: 16
            },
        }),
    }
});

export default styles;