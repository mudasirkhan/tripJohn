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
                        {/*<SvgUri*/}
                        // source={require('../assets/icons/ham.svg')}/>
                        <Image source={require('../assets/icons/ham.png')} style={{width: 24, height: 16}}/>
                    </TouchableOpacity>
                    {/*<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>*/}
                    {/*<Text>*/}
                    {/*{this.props.title}*/}
                    {/*</Text>*/}
                    {/*</View>*/}
                </View>
                {/*<TouchableHighlight onPress={() => {*/}
                {/*}}*/}
                {/*>*/}
                {/*<View>*/}
                {/*<Image source={require('../assets/images/robot-dev.png')}*/}
                {/*style={{height: 20, width: 20, marginRight: 20}}/>*/}
                {/*{this.state.unread && <View style={{*/}
                {/*backgroundColor: '#ff9600',*/}
                {/*height: 10,*/}
                {/*width: 10,*/}
                {/*borderRadius: 5,*/}
                {/*position: 'absolute',*/}
                {/*left: 10*/}
                {/*}}/>}*/}
                {/*</View>*/}
                {/*</TouchableHighlight>*/}
            </View>
        )
    }
}

export {TopNav}
