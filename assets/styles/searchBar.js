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
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectLocationText: {
        fontFamily: 'SSP-L',
        fontSize: 16,
        flex: 1,
        color: '#9B9B9B',
    },
    chevronDown: {
        // transform: ([{rotateX: '65deg'}, {origin: '50% 50%'}]),
    },
    locationListContainer: {
        flex: 1,
        position: 'absolute',
        left: 0,
        width: '100%',
        top: 48,
        zIndex: 999,
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
        zIndex: 999,
    },
    locationListWrap: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        zIndex: 999,
    },
    locationListTouch: {
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
        zIndex: 999,
    },
    locationListItem: {
        paddingVertical: 8,
        color: '#4A4A4A',
        fontFamily: 'SSP-R',
        fontSize: 16,
    },
    nearMeWrap: {
        flex: 1
    },
    nearMeText: {
        color: '#777278',
        fontFamily: 'SSP-R',
        fontSize: 14
    },
    oneHalfSection: {
        flex: 1,
        // backgroundColor: 'green',
        justifyContent: 'space-between'
    },
    carListCard: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        height: 150,
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 4,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.16)',
                shadowRadius: 4,
                shadowOffset: {width: 0, height: 2}
            },
            android: {
                elevation: 4,
            },
        }),
        marginBottom: 16
    },
    carPriceWrap: {
        backgroundColor: '#F5F6FD',
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
        ...Platform.select({
            ios: {
                fontSize: 38
            },
            android: {
                fontSize: 36,
            },
        }),
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
        paddingHorizontal: 16,
        flexDirection: 'column',
        // backgroundColor: 'red',
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
        flexDirection: 'row',
        width: '100%'
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