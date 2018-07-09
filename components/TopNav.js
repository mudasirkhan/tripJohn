import React from 'react'
import {TouchableHighlight, TouchableOpacity, View, Image, Text} from 'react-native';
import styles from '../assets/styles/topNav';
import SvgUri from 'react-native-svg-uri';

class TopNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unread: props.unread,
        }
    }

    render() {
        return (
            <View style={[styles.topNavContainer]}>
                <View style={{flexDirection: 'row', flex: 1,}}>
                    <TouchableOpacity
                        onPress={this.props.openDrawer} style={{
                        height: '100%',
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}
                    >
                        <Image source={require('../assets/icons/ham.png')} style={{width: 24, height: 16}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export {TopNav}
