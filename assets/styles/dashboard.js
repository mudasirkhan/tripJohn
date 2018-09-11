import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    topContainer: {
        flex: 2,
        position: 'relative',
    },
    topInfo: {
        flex: 2,
        paddingTop: 32,
        backgroundColor: '#AC2733',
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
        borderRadius: 8,
        paddingHorizontal: 24,
        width: '100%',
        backgroundColor: '#F9C947',
        paddingVertical: 18,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: .50,
                shadowRadius: 5,
            },
            android: {
                elevation: 4
            },
        }),
    },
    planName: {
        fontFamily: 'Lato-Black',
        color: '#fff',
        textShadowColor: '#000',
        shadowOpacity: 0.1,
        textShadowOffset: {width: 0, height: 6},
        shadowRadius: 0,
        ...Platform.select({
            ios: {
                fontSize: 74
            },
            android: {
                fontSize: 72
            },
        }),
    },
    planDetailsWrap: {
        justifyContent: 'space-between',
        marginTop: 24,
        flexDirection: 'row',
        width: '100%',
    },
    planDetailsTextWrap: {
       // backgroundColor: 'transparent'
    },
    planDetailsItem: {
        justifyContent: 'flex-start',
        borderRadius: 8,
        width: '45%',
        padding: 16,
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 4},
                shadowOpacity: .07,
                shadowRadius: 5,
            },
            android: {
                elevation: 4
            },
        }),

    },
    planDetailsText: {
        fontFamily: 'SSP-R',
        color: '#333',
        alignSelf: 'flex-start',
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 8
    },
    numberBadgeText: {
        fontFamily: 'SSP-L',
        color: '#483F61',
        ...Platform.select({
            ios: {
                fontSize: 44
            },
            android: {
                fontSize: 42,
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
        backgroundColor: '#AC2733',
        overflow: 'visible',
        position: 'relative'
    },
    leadsListHeader: {
        height: 44,
        zIndex: 99,
        position: 'relative',
        flexDirection: 'row',
        overflow: 'visible',
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
                elevation: 2,
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
        alignItems: 'center',
        height: '100%',
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
        right: 24,
        top: 0,
        backgroundColor: 'white',
        zIndex: 99999999999,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: .11,
                shadowRadius: 5,
            },
            android: {
                elevation: 4,
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