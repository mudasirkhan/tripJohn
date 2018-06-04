import React from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import styles from '../assets/styles/introSlides.js'

var {height, width} = Dimensions.get('window')
export default class Slide1 extends React.Component {
    render () {
        return (
            <View style={styles.slideContainer}>
                <View style={styles.blurBgWrap}>
                    <Image source={require('../assets/images/blurcircle.png')} style={styles.blurBg} resizeMode='contain'/>
                </View>
                <View style={styles.slideWrap}>
                    <View>
                        <Text style={styles.slideTitle}>
                            Simple, Fast & Secure
                        </Text>
                    </View>
                    <View style={styles.slideContentWrap}>
                        <Text style={styles.slideContentText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                        </Text>
                    </View>
                    <View style={styles.paginationWrap}>
                        <View style={{ height: 6, width: 12, borderRadius: 5, backgroundColor: 'green', opacity: .2, margin: 5 }} />
                        <View style={{ height: 6, width: 24, borderRadius: 5, backgroundColor: 'white', margin: 5, elevation: 2,
                            shadowColor: '#000',
                            shadowOffset: {width: 0,height: 2},
                            shadowOpacity: .16,
                            shadowRadius: 4, }} />
                        <View style={{ height: 6, width: 12, borderRadius: 5, backgroundColor: 'green', opacity: .2, margin: 5 }} />
                    </View>
                </View>
            </View>
        )
    }
}
