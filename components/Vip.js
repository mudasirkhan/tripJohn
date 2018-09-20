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
    Platform,
    Modal
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
import UpadateCar from './updateCar'


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
            car: [],
            showNumber: false,
            modalVisible: false,
        }
    }

    static navigationOptions = {
        drawerLabel: () => null,
    }


    async componentDidMount() {
        console.log(this.props, this.state, this.props.navigation.getParam('token', ''))
        let token = await this.props.navigation.getParam('token', '');
        let id = await this.props.navigation.getParam('id', '');
        axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_cars_details', {
            car_id: id,
            access_token: token
        })
            .then(response => {
                const data = response.data.car_details;
                console.log(data)
                this.setState({
                    car: data
                })

            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    showNumber = () => {
        this.setState({showNumber: true})
    }

    componentDidCatch(err) {
        console.log(err)
    }

    render() {
        let token = this.props.navigation.getParam('token', '');
        return <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                presentationStyle="formSheet"
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 44, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <View style={{flex: 1}}>
                        <TouchableHighlight
                            style={styles.modalTopBar}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                        <UpadateCar setModalVisible={this.setModalVisible} token={token} details={this.state.car}/>
                    </View>
                </View>
            </Modal>
            <View style={styles.carImageContainer}>
                <Image style={styles.carFullSizeImage} source={require('../assets/images/carFullSize.png')}/>
            </View>
            <View style={styles.carDetailContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.carTitle}>
                                {this.state.car.english_name}
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
                        <View style={{alignItems: 'center', marginVertical: 12}}>
                            <View style={styles.orangeBtnShadow}>
                                <View style={styles.orangeBtn}>
                                    <LinearGradient start={{x: 1, y: 1}}
                                                    end={{x: 0, y: 0}} colors={['#F76B1C', '#FFC800']}>
                                        <TouchableOpacity onPress={this.showNumber} style={styles.orangeBtnInner}>
                                            <Text
                                                style={styles.orangeBtnText}>{this.state.showNumber ? "  9875543211  " : "View Contact No."}</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{paddingVertical: 12}}
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={styles.requestCallbackText}>Update Car</Text>
                            </TouchableOpacity>
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
                        {/*<TouchableOpacity onPress={() => {*/}
                            {/*this.setModalVisible(!this.state.modalVisible);*/}
                        {/*}} style={styles.bargainBtn}>*/}
                            {/*<Text style={styles.bargainBtnText}>Want to bargain?</Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                </View>
            </View>
            <Text>
                {/*{_.values(Object.keys(this.state.car))}*/}
                {JSON.stringify(this.state.car)}
            </Text>
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
