import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    modalWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        backgroundColor: '#AC2733',
        paddingBottom: 6,
    },
    modalTopBar: {
        flexDirection: 'row',
    },
    backButton: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 72,
    },
    arrowBack: {
        // height: 20,
        // width: 20

    },

    // modalTopBar: {
    //     height: 54,
    //     backgroundColor: '#AC2733',
    //     flexDirection: 'row',
    //     width: '100%',
    //     alignSelf: 'flex-start',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     overflow: 'visible',
    //     ...Platform.select({
    //         ios: {
    //             shadowColor: '#000',
    //             shadowOffset: {width: 0, height: 2},
    //             shadowOpacity: .11,
    //             shadowRadius: 5,
    //         },
    //         android: {
    //             elevation: 4
    //         },
    //     }),
    // },

    modalTitleText: {
        marginTop: -1,
        marginLeft: -48,
        paddingRight: 16,
        alignSelf: 'center',
        fontFamily: 'Lato-R',
        color: '#fff',
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