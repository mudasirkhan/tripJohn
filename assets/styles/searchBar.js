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
        height: 120,
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    searchTextInput: {
        height: '50%',
        paddingHorizontal: 16,
        fontSize: 16,
        fontFamily: 'SSP-L'
    },
    selectLocationContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selectLocationWrap: {
        flex: 1
    },
    nearMeWrap: {
        flex: 1
    }
});

export default styles;