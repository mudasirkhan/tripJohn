import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carImageContainer: {
        height: 200,
        paddingHorizontal: 12,
        justifyContent: 'center',
        width: '100%'
    },
    carFullSizeImage: {
        width: '100%',
        alignSelf: 'center',
        height: '100%',
        resizeMode: 'contain'
    },
    carDetailContainer: {
        paddingLeft: 20,
        paddingTop: 12,
        flex: 1,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.09)',
                shadowRadius: 4,
                shadowOffset: {width: 0, height: -2}
            },
            android: {
                elevation: 7,
            },
        }),
    },
    carDetailTopSection: {
        flexDirection: 'row'
    },
    carTitle: {
        color: '#483F61',
        paddingBottom: 8,
        fontFamily: 'SSP-R',
        ...Platform.select({
            ios: {
                fontSize: 17
            },
            android: {
                fontSize: 16,
            },
        }),
    },
    carKey: {
        width: 18.75,
        height: 16.25,
        marginRight: 4
    },
    pin: {
        width: 11.25,
        height: 18,
        marginRight: 4
    },
    carProviderContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
    },
    providedByText: {
        color: '#7C7B81',
        fontFamily: 'Lato-R',
        paddingBottom: 4,
        ...Platform.select({
            ios: {
                fontSize: 14
            },
            android: {
                fontSize: 12,
            },
        }),
    },
    carProviderWrap: {
        flexDirection: 'column',
    },
    providerName: {
        fontFamily: 'SSP-R',
        color: '#7C7B81',
        ...Platform.select({
            ios: {
                fontSize: 12
            },
            android: {
                fontSize: 10,
            },
        }),
    },
    orangeBtnGradient: {
        width: '100%',
    },
    orangeBtn: {
        width: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        zIndex: 9,
    },
    orangeBtnShadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .11,
        shadowRadius: 4,
        zIndex: 9,
        width: '100%'
    },
    orangeBtnInner: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        zIndex: 9,
    },
    orangeBtnText: {
        ...Platform.select({
            ios: {
                fontSize: 14,
            },
            android: {
                fontSize: 12,
            },
        }),
        fontFamily: 'Lato-R',
        color: 'white',
    },
    requestCallbackText: {
        fontFamily: 'OS-L',
        color: '#483F61',
        ...Platform.select({
            ios: {
                fontSize: 12,
            },
            android: {
                fontSize: 10,
            },
        }),
    },
    taxText: {
        fontFamily: 'Lato-L',
        fontSize: 7,
        color: '#483F61',
    },
    rightSection: {
        flex: .7,
        overflow: 'visible',
        paddingLeft: 4,
        paddingBottom: 4,
        // backgroundColor:'red',
    },
    carPriceWrap: {
        backgroundColor: '#F5F6FD',
        width: '100%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 4,
        paddingHorizontal: 14,
        paddingVertical: 13,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    carPriceMonth: {
        color: '#483F61',
        fontFamily: 'SSP-SB',
        paddingRight: 6,
        ...Platform.select({
            ios: {
                fontSize: 19,
                marginBottom: -6
            },
            android: {
                fontSize: 18,
            },
        }),
    },
    carPriceWeek: {
        color: '#483F61',
        marginTop: 8,
        marginBottom: 10,
        paddingLeft: 1,
        fontFamily: 'SSP-R',
        ...Platform.select({
            ios: {
                fontSize: 13,
            },
            android: {
                fontSize: 12,
            },
        }),
    },
    carPriceMonthCurrency: {
        fontSize: 12,
        color: '#483F61',
        fontFamily: 'SSP-L'
    },
    carPriceCurrency: {
        color: '#483F61',
        fontFamily: 'SSP-L',
        ...Platform.select({
            ios: {
                fontSize: 14
            },
            android: {
                fontSize: 12,
            },
        }),
    },
    bargainBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 4,
        overflow: 'visible',
        paddingVertical: 12,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.9)',
                shadowRadius: 4,
                shadowOffset: {width: 0, height: 3}
            },
            android: {
                elevation: 4,
            },
        }),
    },
    bargainBtnText: {
        fontFamily: 'SSP-L',
        color: '#483F61',
        ...Platform.select({
            ios: {
                fontSize: 13,
            },
            android: {
                fontSize: 12,
            },
        }),
    },

});

export default styles;