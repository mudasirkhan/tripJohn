import React from 'react'
import {
    View,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicator,
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
import * as _ from 'lodash';
import {connect} from 'react-redux'
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3.js'
import SvgUri from 'react-native-svg-uri';
// import commonStyles from '../assets/styles/common';
import styles from '../assets/styles/vip';
import axios from "axios/index";


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
}

class CarsList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            showLocation: false,
            routes: [
                {key: 'first', title: 'Personal'},
                {key: 'second', title: 'Experience'},
                {key: 'third', title: 'Go'}
            ],
            resp: {},
            selectedLocation: '',
            cars: []
        }
    }

    static navigationOptions = {
        drawerLabel: () => null,
    }


    componentDidMount() {
        console.log(this.props, this.state, this.props.navigation.getParam('car', {}))
        let a = [];
        a.push(this.props.navigation.getParam('car', {}));
        this.setState({cars: a}, () => {
            console.log(this.state.cars)
        })
    }

    componentDidCatch(err) {
        console.log(err)
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.carImageContainer}>
                <Image style={styles.carFullSizeImage} source={require('../assets/images/carFullSize.png')}/>
            </View>
            <View style={styles.carDetailContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.carTitle}>
                                Nissan Sunny 2018
                            </Text>
                            <View style={styles.carProviderContainer}>
                                <View style={[styles.carProviderWrap, {paddingBottom: 6}]}>
                                    {/*<Text style={styles.providedByText}>Provided by:</Text>*/}
                                    <View style={{flexDirection: 'row'}}>
                                        <SvgUri source={require('../assets/icons/car-n-key.svg')}
                                                style={styles.carKey}/>
                                        <Text style={styles.providerName}>Al Jumeirah Travels</Text>
                                    </View>
                                </View>
                                <View style={styles.carProviderWrap}>
                                    <View style={{flexDirection: 'row'}}>
                                        <SvgUri source={require('../assets/icons/car-n-key.svg')}
                                                style={styles.carKey}/>
                                        <Text style={styles.providerName}>Jumeriah Lakes Towers</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.orangeBtnShadow}>
                            <View style={styles.orangeBtn}>
                                <LinearGradient start={{x: 1, y: 1}}
                                                end={{x: 0, y: 0}} colors={['#F76B1C', '#FFC800']}>
                                    <TouchableOpacity onPress={this._handleLogin} style={styles.orangeBtnInner}>
                                        <Text style={styles.orangeBtnText}>View Contact No.</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rightSection}>
                        <View style={styles.carPriceWrap}>
                            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Text
                                    style={styles.carPriceMonth}>AED 343/month</Text>
                            </View>
                            <Text style={styles.carPriceWeek}>AED 124/Week</Text>
                            <Text style={styles.taxText}>+ 5% VAT applicable</Text>
                        </View>
                        <View style={styles.bargainBtn}>
                            <Text style={styles.bargainBtnText}>Want to bargain?</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    }

};
const mapDispatchToProps = (dispatch) => ({
    change: (action, value) => {
        dispatch({type: action, payload: value})
    },
})
const mapStateToProps = (state, ownProps) => ({
    token: state.token,
    logged: state.logged
})

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
