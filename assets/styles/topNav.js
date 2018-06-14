import React from 'react';
import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    topNavContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9,
        height: 56,
        paddingHorizontal: 28,
        justifyContent: 'space-between'
    }
});

export default styles;
