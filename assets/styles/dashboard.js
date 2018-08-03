import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        position: 'relative',
    },
    topInfo: {
        flex: 3,
        backgroundColor: '#483F61',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 28,
        justifyContent: 'center'
    },
    changePlanBtn: {
        alignSelf: 'flex-end',
        marginBottom: 12
    },
    changePlanBtnText: {
        fontFamily: 'Lato-R',
        color: '#fff',
        ...Platform.select({
            ios: {
                fontSize: 14
            },
            android: {
                fontSize: 12,
            },
        }),
    },
    planNameWrap: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        width: '100%',
        backgroundColor: 'white',
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: .50,
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
        color: '#483F61',
        ...Platform.select({
            ios: {
                fontSize: 22
            },
            android: {
                fontSize: 20
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
        justifyContent: 'center',
        alignItems: 'center'
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
    numberBadge: {
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F6FD',
        paddingVertical: 6,
        paddingHorizontal: 8
    },
    numberBadgeText: {
        fontFamily: 'SSP-R',
        color: '#483F61',
        ...Platform.select({
            ios: {
                fontSize: 14
            },
            android: {
                fontSize: 12,
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
        position: 'relative',
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
        flexDirection: 'row',
        alignItems: 'center'
    },
    chevronDown: {
        top: 2
    },
    listSortBtnText: {
        fontFamily: 'Lato-R',
        color: '#7C7B81',
        marginRight: 8,
        ...Platform.select({
            ios: {
                fontSize: 14
            },
            android: {
                fontSize: 12
            },
        }),
    },
    sortListWrap: {
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        position: 'absolute',
        top: '100%',
        right: 24,
        backgroundColor: 'white',
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
    sortListItem: {
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
    },
    sortListText: {
        color: '#7C7B81',
        paddingVertical: 12,
        paddingHorizontal: 18,
        fontFamily: 'SSP-R',
        ...Platform.select({
            ios: {
                fontSize: 14
            },
            android: {
                fontSize: 12
            },
        }),
    },
});

export default styles;