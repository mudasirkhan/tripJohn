import React from 'react';
import {StyleSheet, Platform} from 'react-native';

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
        flex: .85,
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
        borderWidth: .5,
        flex: 1,
        borderColor: '#f0f0f0',
        height: 160,
        paddingLeft: 20,
        overflow: 'visible',
        backgroundColor: 'white',
        paddingBottom: 10,
        marginTop: 16,
        paddingTop: 14,
        borderRadius: 4,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, 0.9)',
                shadowRadius: 4,
                shadowOffset: {width: 0, height: 2}
            },
            android: {
                elevation: 4,
            },
        }),
    },
    carListCardContainer: {
        paddingHorizontal: 28,
        flexDirection: 'row',
        width: '100%',
        zIndex: 9,
        alignSelf: 'center'
    },
    carPriceWrap: {
        backgroundColor: '#F5F6FD',
        width: '100%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        paddingHorizontal: 14,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    carTitle: {
        color: '#483F61',
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
        color: '#483F61',
        fontFamily: 'SSP-EL',
        paddingRight: 6,
        ...Platform.select({
            ios: {
                fontSize: 38,
                marginBottom: -8
            },
            android: {
                fontSize: 36,
            },
        }),
    },
    carPriceWeek: {
        color: '#483F61',
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
    }
});

export default styles;