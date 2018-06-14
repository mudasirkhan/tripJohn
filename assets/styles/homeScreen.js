import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    welcomeContainer: {
        alignItems: 'center',
        position: 'relative',
        flex: 2,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .31,
        shadowRadius: 5,
        zIndex: 2
    },
    welcomeGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        right: 0,
        bottom: 0
    },
    registrationContainer: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#F5F6FD'
    },
    registrationWrap: {
        alignSelf: 'center',
        position: 'relative',
        width: '85%',
        flex: 1,
        marginTop: 40,
    },
    regTextInputContainer: {
        marginBottom: 12,
        borderRadius: 4,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'none',
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    loginContainer: {
        backgroundColor: '#F3F1F7',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        paddingVertical: 16,
        zIndex: 1
    },
    loginWrap: {
        width: '80%',
        alignItems: 'center',
        elevation: 4,
        marginTop: -16,
        flexDirection: 'column',
    },
    loginbg: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        flex: 1,
        width: '100%',
        height: '100%',
        right: 0,
        top: 0,
        resizeMode: 'stretch'
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
    tnctext: {
        fontSize: 11,
        alignSelf: 'center',
        position: 'absolute',
        color: '#ACA8B6',
        fontFamily: 'Lato-L',
        ...Platform.select({
            ios: {
                bottom: 16,
            },
            android: {
                bottom: 8,
            },
        }),
    },
    regLinkWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%'
    },
    regLinkText: {
        fontSize: 12,
        display: 'flex',
        alignSelf: 'flex-start',
        color: '#483F61',
        paddingBottom: 8,
        paddingRight: 4,
        fontFamily: 'SSP-L'
    },
    backBtn: {
        backgroundColor: '#F5F6FD',
        borderRadius: 4,
        borderWidth: 2,
        bottom: 8,
        position: 'absolute',
        left: 0,
        right: 0,
        borderColor: '#ACA8B6',
        padding: 12
    },
    backBtnTouch: {
        alignItems: 'center'
    },
    backBtnText: {
        fontFamily: 'Lato-R',
        color: '#7C7B81',
        fontSize: 16
    }
});

export default styles;