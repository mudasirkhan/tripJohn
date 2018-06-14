import React from 'react'
import {
    View,
    TouchableHighlight,
    Text,
    TextInput,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    Platform
} from 'react-native'
import {LinearGradient} from 'expo';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3.js'
import SvgUri from 'react-native-svg-uri';
import SearchBar from '../components/searchBar';
import styles from '../assets/styles/homeTopSection';


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
}

class HomeTopSection extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                {key: 'first', title: 'Personal'},
                {key: 'second', title: 'Experience'},
                {key: 'third', title: 'Go'}

            ]
        }
    }

    componentDidMount() {
        console.log(this.props)
    }


    render() {
        return (
            <View style={styles.welcomeContainer}>
                <LinearGradient colors={['#9F19A9', '#F20C46']}
                                start={{x: 0, y: 0.25}}
                                end={{x: 1, y: 1}}
                                style={styles.welcomeGradient}/>
                <Image source={require('../assets/images/sunwaves.png')} style={styles.sunwaves}/>
                <Image style={styles.cloud} source={require('../assets/icons/cloud.png')}/>
                {/*<SvgUri style={styles.cloud} width="40" height="14" source={require('../assets/icons/cloud.png')} />*/}
                <SvgUri style={styles.dubaiskyline} width="400" height="200"
                        source={require('../assets/icons/dubaiskyline.svg')}/>
                <View style={styles.blackTint}/>
                <View style={{
                    elevation: 4,
                    zIndex: 99,
                    overflow: 'visible',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    flexDirection: 'row'
                }}>
                    <View style={styles.headlineWrap}>
                        <Text style={styles.boldLine}>HEY!</Text>
                        <Text style={styles.boldLineOrange}>AWESOME GUY</Text>
                        <Text style={styles.boldLine}>HURRY UP.</Text>
                    </View>
                </View>
                <SearchBar/>
            </View>)
    }
};

export default HomeTopSection;
