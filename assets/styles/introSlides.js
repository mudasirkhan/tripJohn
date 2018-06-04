import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    blurBgWrap: {
        position: 'absolute',
        top:0,
        left: 0,
        right:0,
        bottom:0,
        alignItems: 'center',
        justifyContent:'center'
    },
    blurBg: {
        flex: 1,
        resizeMode: 'center',
        alignSelf: 'center',
    },
    slideContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        paddingHorizontal: 40
    },
    slideWrap: {
        flex: 1,alignItems: 'center',justifyContent: 'flex-end', marginBottom: 16
    },
    slideTitle: {
        color: '#EFEDF5',
        fontFamily: 'Lato-R',
        ...Platform.select({
            ios: {
                fontSize: 18,
            },
            android: {
                fontSize: 16,
            },
        }),
    },
    slideContentWrap: {
        marginTop: 12
    },
    slideContentText: {
        textAlign: 'center',color: '#EFEDF5', fontFamily: 'SSP-L',
        ...Platform.select({
            ios: {
                fontSize: 14,
            },
            android: {
                fontSize: 12,
            },
        }),
    },
    paginationWrap: {
        flexDirection: 'row',
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                marginTop: 24,
            },
            android: {
                marginTop: 16,
            },
        }),
    }
});

export default styles;