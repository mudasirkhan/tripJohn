import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // position: 'relative'
    },
    profileDescContainer: {
        flex: 3,
        backgroundColor: '#F5F6FD',
        flexDirection: 'column',
        alignItems: 'center'
    },
    profileInputGroup: {
        width: '85%',
        borderRadius: 4,
    },
    regTextInputContainer: {
        marginBottom: 12,
        borderRadius: 4,
    },
    textInputContainer: {
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .11,
        shadowRadius: 4,
        zIndex: 2
    },
    textInputWrap: {
        width: '100%',
        backgroundColor: 'white',
        position: 'relative',
    },
    iconWrap: {
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        paddingHorizontal: 16,
        bottom: 0,
        left: 0
    },
    textInputIcon: {
        alignSelf: 'center'
    },
    textInput: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 46,
        width: '100%'
    },
    textInputWithoutIcon: {
        paddingLeft: 16
    },
    textArea: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        height: 80
    },
    welcomeContainer: {
        flex: 3,
        width: '100%',
        backgroundColor: '#AC2733',
        position: 'relative',
        flexDirection: 'column',
        padding: 30,
        paddingTop: 48,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        zIndex: 99,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    topHelpContainer: {
        width: '100%',
        justifyContent: 'flex-end'
    },
    profileInfoTop: {
        flexDirection: 'row',
        marginBottom: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImageWrap: {
        flex: 1
    },
    profilePhoto: {
        width: 100,
        height: 100,
        elevation: 4,
        borderRadius: 50,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.16,
                shadowRadius: 3,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    profileTitleInfo: {
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',
        paddingTop: 18,
        paddingBottom: 12
    },
    editBtn: {
        fontFamily: 'Lato-B',
        color: '#ACA8B6',
        fontSize: 14
    },
    profileTitleText: {
        fontFamily: 'Lato-L',
        fontSize: 14,
        color: '#7b7b7b'
    },
    profileNameWrap: {
        flex: 1,
        height: 100,
        paddingLeft: 26,
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    profileNameText: {
        ...Platform.select({
            ios: {
                fontSize: 24
            },
            android: {
                fontSize: 22,
            },
        }),
        fontFamily: 'Lato-B',
        color: 'white',
        textShadowOffset: {width: 0, height: 2},
        textShadowColor: 'rgba(0,0,0,0.11)',
        textShadowRadius: 5
    },
    profileTypeText: {
        color: 'white',
        fontFamily: 'SSP-L',
        ...Platform.select({
            ios: {
                fontSize: 16
                // shadowColor: 'black',
                // shadowOffset: {height: -3},
                // shadowOpacity: 0.1,
                // shadowRadius: 3,
            },
            android: {
                fontSize: 14,
            },
        }),
    },
    boldLine: {
        fontSize: 24,
        fontFamily: 'Lato-B',
        color: 'white',
        textShadowOffset: {width: 0, height: 2},
        textShadowColor: 'rgba(0,0,0,0.11)',
        textShadowRadius: 4
    },
    boldLineOrange: {
        fontSize: 24,
        fontFamily: 'Lato-BlackI',
        color: '#FF7B0D',
        textShadowOffset: {width: 0, height: 2},
        textShadowColor: 'rgba(0,0,0,0.11)',
        textShadowRadius: 4
    },
    welcomeGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        right: 0,
        bottom: 0
    },
    blackTint: {
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.16)',
        left: 0,
        flex: 1,
        right: 0,
        bottom: 0
    },
    dubaiskyline: {
        opacity: .3,
        position: 'absolute',
        bottom: 0
    },
    cloud: {
        position: 'absolute',
        top: '20%',
        right: '35%',
        width: 50,
        height: 18,
        resizeMode: 'contain'
    },
    sunwaves: {
        position: 'absolute',
        top: 0,
        right: -20,
        width: '75%'
    },
    regTopHelpTextTitle: {
        color: '#EFEDF5',
        marginBottom: 8,
        ...Platform.select({
            ios: {
                fontSize: 16,
            },
            android: {
                fontSize: 14,
            },
        }),
        fontFamily: 'Lato-R'
    },
    regTopHelpTextDesc: {
        color: '#EFEDF5',
        ...Platform.select({
            ios: {
                fontSize: 14,
            },
            android: {
                fontSize: 12,
            },
        }),
        fontFamily: 'SSP-L'
    },
    saveProfileButton: {
        backgroundColor: '#333',
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        paddingVertical: 18
    },
    greyBorderBtnWrap: {
        borderWidth: 1,
        alignSelf: 'center',
        height: 40,
        borderColor: '#ACA8B6',
        borderStyle: 'solid',
        borderRadius: 4,
        width: '85%'
    },
    greyBorderBtn: {
        flex: 1,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    saveBtnText: {
        color: '#fff',
        ...Platform.select({
            ios: {
                fontSize: 16,
            },
            android: {
                fontSize: 14,
            },
        }),
        fontFamily: 'Lato-R'
    }

});

export default styles;