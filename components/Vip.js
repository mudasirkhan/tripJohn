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
import commonStyles from '../assets/styles/common';
import styles from '../assets/styles/searchBar';
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
        let a=[];
        a.push(this.props.navigation.getParam('car', {}));
        this.setState({cars: a},()=>{console.log(this.state.cars)})
    }
    componentDidCatch(err) {
        console.log(err)
    }

    renderCars = (resArr) => {
                return (<TouchableOpacity key={resArr} style={{borderColor: 'red', borderWidth: 1}}
                                          style={styles.carListCard}
                                          onPress={() => {
                                              this.setState({
                                                  selectedLocation: this.state.resp[resArr].english_name,
                                                  showLocation: !this.state.showLocation
                                              })
                                          }}>
                        <View style={styles.oneHalfSection}>
                            <Image
                                // source={{uri: 'https://tripjhon.insightssoftwares.com//api/v1/' + this.state.cars[resArr].car_image}}
                                source={require('../assets/images/car.png')}
                                style={{height: 50, width: 120}}
                            />
                            <View style={styles.carProviderContainer}>
                                <Text style={styles.providedByText}>Provided by:</Text>
                                <View style={styles.carProviderWrap}>
                                    <SvgUri source={require('../assets/icons/car-n-key.svg')} style={styles.carKey}/>
                                    <Text style={styles.providerName}>Al Jumeirah Travels</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.oneHalfSection}>
                            <Text style={styles.carTitle}>{this.state.cars[resArr].english_name}</Text>
                            <View style={styles.carPriceWrap}>
                                <Text style={styles.carPriceMonth}>{this.state.cars[resArr].price_per_month}</Text>
                                <Text>{this.state.cars[resArr].price_per_week}</Text>
                                {/*<Text>{this.state.cars[resArr].description}</Text>*/}
                                {/*<Text>{this.state.cars[resArr].security_deposit}</Text>*/}
                            </View>
                            <View style={styles.carProviderContainer}>
                                <View style={styles.carProviderWrap}>
                                    <SvgUri source={require('../assets/icons/pin.svg')} style={styles.pin}/>
                                    <Text style={styles.providerName}>Jumeriah Lakes Towers</Text>
                                    <Text>

                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )

        };
    render() {
        return <View style={styles.container}>
            <View>
                    {this.state.cars.length > 0 && this.renderCars(0)}
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
