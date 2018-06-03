import React from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native'

var {height, width} = Dimensions.get('window')
export default class Slide3 extends React.Component {
    render () {
        return (
            <View style={{flex: 1, backgroundColor: '#00000000', height: '100%', alignItems: 'center'}}>
                <Image source={require('../assets/images/robot-prod.png')} style={[ {width: '100%'}]} resizeMode='contain'/>
                <View style={{marginTop: 50}}>
                    <Text style={{fontSize: 19}}>
                        jsbc
                    </Text>
                </View>
                <View style={{margin: 20}}>
                    <Text style={{textAlign: 'center', fontSize: 16}}>
                        s,ndclskdcksndc
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: 'green', opacity: .2, margin: 5 }} />
                    <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: 'green', opacity: .2, margin: 5 }} />
                    <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: 'green', margin: 5 }} />
                </View>
            </View>
        )
    }
}
