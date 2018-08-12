import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leadsListCardContainer: {
        backgroundColor: 'white',
        marginBottom: 16,
        position: 'relative',
        borderRadius: 4,
        borderTopLeftRadius: 0,
        width: '100%',
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: .11,
                shadowRadius: 5,
            },
            android: {
                elevation: 2
            },
        }),
    },
    leadsListCard: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        ...Platform.select({
            ios: {
                // shadowColor: '#000',
                // shadowOffset: {width: 0, height: 2},
                // shadowOpacity: .16,
                // shadowRadius: 5,
            },
            android: {
                // elevation: 4
            },
        }),
    },
    carName: {
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
    },
    carMessage: {
        color: '#7C7B81',
        marginTop: 6,
        fontFamily: 'Lato-R',
        ...Platform.select({
            ios: {
                fontSize: 12
            },
            android: {
                fontSize: 10
            },
        }),
    },
    extraInfoWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 14,
        marginBottom: 4
    },
    extraInfoText: {
        color: '#483F61',
        fontFamily: 'Lato-R',
        ...Platform.select({
            ios: {
                fontSize: 12
            },
            android: {
                fontSize: 10
            },
        }),
    },
    bottomBtnWrap: {
        height: 44,
        borderTopColor: '#F5F6FD',
        borderTopWidth: 1,
        // backgroundColor: 'red',
        flexDirection: 'row',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
    graySeparator: {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#F5F6FD'
    },
    graySeparatorInner: {
        width: '100%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: '#F5F5F5'
    },
    graySeparatorVertical: {
        width: 1,
        height: '100%',
        alignSelf: 'center',
        backgroundColor: '#F5F6FD'
    },
    graySeparatorVerInner: {
        width: 1,
        height: '100%',
        alignSelf: 'center',
        backgroundColor: '#F5F6FD'
    },
    oneHalfSection: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    btnText: {
        color: '#483F61',
        fontFamily: 'Lato-R',
        textAlign: 'center',
        ...Platform.select({
            ios: {
                fontSize: 14
            },
            android: {
                fontSize: 12
            },
        }),
    },
    topDateBadge: {
        backgroundColor: '#EF446F',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        zIndex: 999,
        // position: 'absolute',
        // left: 0,
        // top: -16,
        width: 108,
        flexDirection: 'row',
        alignItems: 'center',
        height: 16,
        paddingHorizontal: 9
    },
    topDateBadgeGradient: {
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        zIndex: 999,
        // position: 'absolute',
        // left: 0,
        // top: -16,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        height: 16,
    },
    topDateBadgeGradientInner: {
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        height: 16,
        paddingHorizontal: 9
    },
    dateText: {
        color: '#fff',
        fontFamily: 'Lato-R',
        ...Platform.select({
            ios: {
                fontSize: 10,

            },
            android: {
                fontSize: 8
            },
        }),
    },
    statusText: {
        color: '#fff',
        fontFamily: 'Lato-R',
        ...Platform.select({
            ios: {
                fontSize: 10,

            },
            android: {
                fontSize: 8
            },
        }),
    },
    topInfoSeparator: {
        width: 1,
        marginHorizontal: 8,
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.05)'
    }
});

export default styles;