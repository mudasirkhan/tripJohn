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

    componentDidMount() {
        this.getCars();
        console.log(this.props, this.state)
    }

    componentDidCatch(err) {
        console.log(err)
    }

    renderLocations = () => {
        this.setState({showLocation: !this.state.showLocation})
    };

    renderLocationOptions = () => {
        let resArr = Object.keys(this.state.resp);
        return resArr.map(resArr => {
            return (<TouchableOpacity
                style={styles.locationListTouch}
                onPress={() => {
                    this.setState({
                        selectedLocation: this.state.resp[resArr].english_name,
                        showLocation: !this.state.showLocation
                    })
                }}>
                <Text style={styles.locationListItem}>{this.state.resp[resArr].english_name}</Text>
            </TouchableOpacity>)
        })
    };
    renderCars = () => {
        if (this.state.cars && this.state.cars.length > 0) {
            let resArr = Object.keys(this.state.cars);
            return resArr.map(resArr => {
                return (<View style={styles.carListCardContainer}>
                        <TouchableOpacity key={resArr}
                                          activeOpacity=".7"
                                          style={styles.carListCard}
                                          onPress={() => {
                                              this.props.navigation.navigate('Vip', {car: this.state.cars[resArr]})
                                          }}>
                            <View style={styles.topHalfSection}>
                                <Image
                                    source={{uri: 'https://tripjhon.insightssoftwares.com//api/v1/' + this.state.cars[resArr].car_image}}
                                    source={require('../assets/images/car.png')}
                                    style={{height: 50, width: 120, marginTop: 6}}
                                />
                                <View style={styles.rightSection}>
                                    <Text style={styles.carTitle}>{this.state.cars[resArr].english_name}</Text>
                                    <View style={styles.carPriceWrap}>
                                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                            <Text
                                                style={styles.carPriceMonth}>{this.state.cars[resArr].price_per_month}</Text><Text
                                            style={styles.carPriceMonthCurrency}>AED
                                            / month</Text>
                                        </View>
                                        <Text style={styles.carPriceWeek}>AED {this.state.cars[resArr].price_per_week}/Week,
                                            AED 100/Day</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bottomHalfSection}>
                                <View style={styles.carProviderContainer}>
                                    <View style={[styles.carProviderWrap, {paddingRight: 24}]}>
                                        <Text style={styles.providedByText}>Provided by:</Text>
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
                        </TouchableOpacity>
                    </View>
                )
            })
        }
    };

    getCars = async () => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_cars', {
            access_token: this.props.token
        })
            .then(response => {
                resp = response.data.cars;
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp, this.props.token);
        resp !== undefined && this.setState({cars: resp});
    }

    render() {
        return <View style={styles.container}>
            <View>
                <ScrollView style={{width: '100%', height: '100%', zIndex: 9}}>
                    {this.renderCars()}
                </ScrollView>
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
