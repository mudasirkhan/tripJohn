import React from 'react'
import { View, TouchableHighlight, Text, TextInput, ScrollView, StyleSheet, Dimensions, Image } from 'react-native'
import { LinearGradient } from 'expo';
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3.js'
import SvgUri from 'react-native-svg-uri';


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
}

class IntroSlider extends React.Component {
    // FirstRoute = () => <Slide1 style={{flex: 1}} next={this._handleIndexChange}  />
    // SecondRoute = () => <Slide2 style={{flex: 1}} next={this._handleIndexChange} />
    // ThirdRoute = () => <Slide3 style={{flex: 1}} next={this._handleIndexChange} />

    constructor (props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Personal' },
                { key: 'second', title: 'Experience' },
                { key: 'third', title: 'Go' }

            ]
        }
    }
    componentDidMount () {
        console.log(this.props)
    }
    // _handleIndexChange = index => this.setState({ index });
    // _renderScene = SceneMap({
    //     first: this.FirstRoute,
    //     second: this.SecondRoute,
    //     third: this.ThirdRoute
    // });
    render () {
        return (
            <View style={{ flex: 1, height: '100%', width: '100%', position: 'relative', flexDirection: 'row'}}>
                <LinearGradient colors={['#9F19A9', '#F20C46']}
                                start={{ x: 0, y: 0.25 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.welcomeGradient} />
                <Image source={require('../assets/images/sunwaves.png')}  style={styles.sunwaves} />
                <Image style={styles.cloud} source={require('../assets/icons/cloud.png')} />
                {/*<SvgUri style={styles.cloud} width="40" height="14" source={require('../assets/icons/cloud.png')} />*/}
                <SvgUri width="400" height="200" source={require('../assets/icons/dubaiskyline.svg')} />
                <View style={styles.blackTint}/>
                    <View style={{elevation: 4,zIndex:99, overflow:'visible', flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'row' }}>
                        <View style={styles.headlineWrap}>
                            <Text style={styles.boldLine}>HEY!</Text>
                            <Text style={styles.boldLineOrange}>AWESOME GUY</Text>
                            <Text style={styles.boldLine}>HURRY UP.</Text>
                        </View>
                        {/*<TabViewAnimated*/}
                            {/*navigationState={this.state}*/}
                            {/*renderScene={this._renderScene}*/}
                            {/*renderHeader={this._renderHeader}*/}
                            {/*onIndexChange={this._handleIndexChange}*/}
                            {/*initialLayout={initialLayout}*/}
                            {/*style={{flex: 1, height: '100%' }}*/}
                        {/*/>*/}
                        <Slide1/>
                    </View>
            </View>)
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headlineWrap: {
        overflow: 'visible',
        position: 'absolute',
        top: 30,
        left: 30,
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
        backgroundColor: 'red',
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
        top: '8%'
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
    }
})

export default IntroSlider;
