import React from 'react';
import {StyleSheet, Platform, PixelRatio} from 'react-native';

var flexSize   = 1;

if (PixelRatio.get() === 1) {
    flexSize = 1;
}
if (PixelRatio.get() === 1.5) {
    flexSize = 1;
}
if (PixelRatio.get() === 3) {
    flexSize = .85;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchWrap: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        backgroundColor: 'white',
        height: 100,
        width: '100%',
        zIndex: 99999,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    searchTextInput: {
        height: '50%',
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
        fontFamily: 'SSP-L'
    },
    selectLocationContainer: {
        flex: 1,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selectLocationWrap: {
        flex: 1,
        // backgroundColor: 'red',
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    selectLocationText: {
        fontFamily: 'SSP-L',
        fontSize: 16,
        // backgroundColor: 'green',
        paddingRight: 10,
        // alignSelf: 'left',
        color: '#9B9B9B',
    },
    chevronDown: {
        top: 1.5
        // transform: ([{rotateX: '65deg'}, {origin: '50% 50%'}]),
    },
    locationListContainer: {
        width: '50%',
        position: 'absolute',
        left: 0,
        top: 49,
        zIndex: 99999,
        right: 0,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.11)',
                shadowRadius: 5,
                shadowOffset: {width: 0, height: 2}
            },
            android: {
                elevation: 4,
            },
        }),
    },
    locationList: {
        flex: 1,
        zIndex: 99999,
    },
    locationListWrap: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        zIndex: 99999,
    },
    locationListTouch: {
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
        zIndex: 99999,
    },
    locationListItem: {
        paddingVertical: 8,
        color: '#4A4A4A',
        zIndex: 99999,
        fontFamily: 'SSP-R',
        fontSize: 16,
    },
    nearMeWrap: {
        width: '50%',
        flexDirection: 'row'
    },
    nearMeText: {
        color: '#777278',
        fontFamily: 'SSP-R',
        paddingLeft: 12,
        ...Platform.select({
            ios: {
                fontSize: 15
            },
            android: {
                fontSize: 14,
            },
        }),
    },
    nearMeIcon: {
        marginBottom: -2
    },
    topHalfSection: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'green',
        justifyContent: 'space-between'
    },
    bottomHalfSection: {
        flexDirection: 'column',
        // backgroundColor: 'green',
        marginTop: 8,
        justifyContent: 'space-between'
    },
    rightSection: {
        flex: flexSize,
        // backgroundColor:'red',
        justifyContent: 'space-between'
    },
    oneHalfSection: {
        flex: 1,
        // backgroundColor: 'green',
        justifyContent: 'space-between'
    },
    carListCard: {
        flexDirection: 'column',
        zIndex: 9,
        alignSelf: 'center',
        flex: 1,
        height: 160,
        paddingLeft: 20,
        overflow: 'visible',
        backgroundColor: '#821B24',
        paddingBottom: 10,
        marginVertical: 5,
        paddingTop: 14,
        borderRadius: 4,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, 0.9)',
                shadowRadius: 4,
                shadowOffset: {width: 0, height: 2}
            },
            android: {
                elevation: 2,
            },
        }),
    },
    carListCardContainer: {
        paddingHorizontal: 28,
        flexDirection: 'row',
        width: '100%',
        paddingTop: 8,
        zIndex: 9,
        alignSelf: 'center'
    },
    carPriceWrap: {
        backgroundColor: '#70161D',
        width: '100%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        paddingHorizontal: 14,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    carTitle: {
        color: '#fff',
        paddingBottom: 8,
        fontFamily: 'Lato-B',
        ...Platform.select({
            ios: {
                fontSize: 16
            },
            android: {
                fontSize: 14,
            },
        }),
    },
    carPriceMonth: {
        color: '#fff',
        fontFamily: 'SSP-EL',
        paddingRight: 6,
        marginBottom: -8,
        ...Platform.select({
            ios: {
                fontSize: 38,
            },
            android: {
                fontSize: 36,
            },
        }),
    },
    carPriceWeek: {
        color: '#fff',
        marginTop: 8,
        marginBottom: 10,
        paddingLeft: 3,
        fontFamily: 'SSP-L',
        ...Platform.select({
            ios: {
                fontSize: 12,
            },
            android: {
                fontSize: 10,
            },
        }),
    },
    carPriceMonthCurrency: {
        fontSize: 12,
        color: '#fff',
        fontFamily: 'SSP-L'
    },
    carPriceCurrency: {
        color: '#fff',
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
        flexDirection: 'row',
        width: '80%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        alignSelf: 'flex-start'
    },
    providedByText: {
        color: '#f5f5f5',
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
        color: '#f5f5f5',
        ...Platform.select({
            ios: {
                fontSize: 12
            },
            android: {
                fontSize: 10,
            },
        }),
    },
    addCarWrap: {
        width: '100%',
        paddingBottom: 12,
        paddingTop: 60,
        backgroundColor: '#AC2733',
        zIndex: 99,
        overflow: 'visible',
        paddingHorizontal: 30,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowRadius: 5,
                shadowOpacity: 0.11,
                shadowOffset: {width: 0, height: 2}
            },
            android: {
                elevation: 2
            },
        }),
    },
    addCarBtn: {
        width: '100%',
        paddingVertical: 14,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        alignSelf: 'center',
        zIndex: 99999999,
        backgroundColor: '#fff'
    },
    addCarBtnText: {
        fontFamily: 'Lato-R',
        color: '#483F61',
        ...Platform.select({
            ios: {
                fontSize: 15,
                shadowColor: '#ACA8B6',
                shadowOpacity: .20,
                shadowRadius: 5,
                shadowOffset: {width: 0, height: 2}
            },
            android: {
                fontSize: 14,
                elevation: 4
            },
        }),
    }
});

export default styles;