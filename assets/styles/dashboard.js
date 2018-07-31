import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        position: 'relative'
    },
    topInfo: {
        flex: 3,
        backgroundColor: '#F5F6FD',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 28,
        justifyContent: 'center'
    },
    planNameWrap: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        width: '100%',
        backgroundColor: 'white',
        paddingVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: .07,
                shadowRadius: 5,
            },
            android: {
                fontSize: 16,
                elevation: 4
            },
        }),
    },
    planName: {
        fontFamily: 'Lato-L',
        ...Platform.select({
            ios: {
                fontSize: 20
            },
            android: {
                fontSize: 18
            },
        }),
    },
    planDetailsWrap: {
        padding: 16,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        width: '100%',
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: .07,
                shadowRadius: 5,
            },
            android: {
                fontSize: 16,
                elevation: 4
            },
        }),
    },
    planDetailsItem: {
        flexDirection: 'row',
    },
    planDetailsText: {
        fontFamily: 'SSP-R',
        color: '#484848',
        ...Platform.select({
            ios: {
                fontSize: 16
            },
            android: {
                fontSize: 14,
            },
        }),
    },
    smallGreyBorderBtnWrap: {
        borderWidth: 1,
        height: 36,
        borderColor: '#ACA8B6',
        borderStyle: 'solid',
        borderRadius: 4,
        width: 100
    },
    smallGreyBorderBtn: {
        flex: 1,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallBtnText: {
        ...Platform.select({
            ios: {
                fontSize: 12
            },
            android: {
                fontSize: 10
            },
        }),
    },
    bottomContainer: {
        flex: 1,
    },
    leadsListHeader: {
        height: 44,
        zIndex: 99,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: .07,
                shadowRadius: 5,
            },
            android: {
                fontSize: 16,
                elevation: 4
            },
        }),
    },
    listHeaderTitle: {
        color: '#483F61',
        fontFamily: 'Lato-R',
        ...Platform.select({
            ios: {
                fontSize: 16
            },
            android: {
                fontSize: 14
            },
        }),
    },
    listSortBtn: {

    },
    listSortBtnText: {
        fontFamily: 'Lato-R',
        color: '#483F61',
        ...Platform.select({
            ios: {
                fontSize: 14
            },
            android: {
                fontSize: 12
            },
        }),
    }
});

export default styles;