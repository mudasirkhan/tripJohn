import React from 'react'
import { View, TouchableHighlight, Text, TextInput, ScrollView, StyleSheet, Dimensions, Image } from 'react-native'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3.js'

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
}

class IntroSlider extends React.Component {
    FirstRoute = () => <Slide1 style={{flex: 1}} next={this._handleIndexChange}  />
    SecondRoute = () => <Slide2 style={{flex: 1}} next={this._handleIndexChange} />
    ThirdRoute = () => <Slide3 style={{flex: 1}} next={this._handleIndexChange} />

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
    _handleIndexChange = index => this.setState({ index });
    _renderScene = SceneMap({ 
        first: this.FirstRoute,
        second: this.SecondRoute,
        third: this.ThirdRoute
    });
    render () {
        return (
            <View style={{ flex: 1, height: '100%', backgroundColor: 'white' }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', borderTopWidth: 2, borderTopColor: 'green', backgroundColor:'red' }}>
                    <Image source={require('../assets/images/robot-dev.png')} style={[ {width: 100, height: 100, position: 'absolute'}]} resizeMode='contain'/>
                    <TabViewAnimated
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderHeader={this._renderHeader}
                        onIndexChange={this._handleIndexChange}
                        initialLayout={initialLayout}
                        style={{flex: 1}}
                    />
                </View>
            </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default IntroSlider
