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
import UpdateCar from './updateCar'
import modalStyles from "../assets/styles/modal";
import {TopNav} from "./TopNav";


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
        drawerLabel: () => null
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

    openDrawer = () => {
        this.props.navigation.openDrawer()
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
            <TopNav title={""} openDrawer={this.openDrawer} style={{zIndex: 9999999}}/>
            <Modal
                animationType="slide"
                style={{width: '100%'}}
                transparent={false}
                presentationStyle="formSheet"
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={styles.modalTopBar}>
                    <View style={styles.modalTopBarInner}>
                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <SvgUri source={require('../assets/icons/arrow-back.svg')}
                                    style={{
                                        height: 24, width: 24,
                                        paddingHorizontal: 24,
                                    }}/>
                        </TouchableHighlight>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                fontFamily: 'Lato-B',
                                marginTop: -12,
                                marginLeft: -16,
                                fontSize: 18, color: '#fff'
                            }}>Update Car Details</Text>
                        </View>
                    </View>
                </View>
                <UpdateCar setModalVisible={this.setModalVisible} token={token} details={this.state.car}/>
            </Modal>
            <View style={styles.carImageContainer}>
                <Image style={styles.carFullSizeImage}
                       source={{uri: 'https://tripjhon.insightssoftwares.com/storage/car_images/' + this.state.car.car_image}}
                />
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
                                        <Text style={styles.providerName}>{this.state.car.created_by} Al Jumeira
                                            travels</Text>
                                    </View>
                                </View>
                                <View style={styles.carProviderWrap}>
                                    <View style={{flexDirection: 'row'}}>
                                        <SvgUri source={require('../assets/icons/car-n-key.svg')}
                                                style={styles.carKey}/>
                                        <Text
                                            style={styles.providerName}><Text>{this.state.car.created_by} Al Jumeira
                                            travels</Text></Text>
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
                        </View>
                    </View>
                    <View style={styles.rightSection}>
                        <View style={styles.carPriceWrap}>
                            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Text
                                    style={styles.carPriceMonth}>AED {this.state.car.price_per_month}/month</Text>
                            </View>
                            <Text style={styles.carPriceWeek}>AED {this.state.car.price_per_week}/Week</Text>

                            <Text style={styles.taxText}>+ 5% VAT applicable</Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                paddingVertical: 12,
                                backgroundColor: '#A21B24',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                            }}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text style={styles.requestCallbackText}>Update Car</Text>
                        </TouchableOpacity>
                        {/*<TouchableOpacity onPress={() => {*/}
                        {/*this.setModalVisible(!this.state.modalVisible);*/}
                        {/*}} style={styles.bargainBtn}>*/}
                        {/*<Text style={styles.bargainBtnText}>Want to bargain?</Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                </View>
                <View style={styles.carBottomDetailContainer}>
                    <ScrollView style={{width: '100%', height: '100%', zIndex: 9}}>
                        {/*<Text>*/}
                        {/*{JSON.stringify(this.state.car)}*/}
                        {/*</Text>*/}
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Arabic Name: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.arabic_name}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Description: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.description}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Colors: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.colours}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Security Deposit: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.security_deposit}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Accept In: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.accept_in}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Driver: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.driver}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Mileage Charge: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.additional_mileage_charge}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Mileage Daily Limit: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.mileage_limit_daily}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Mileage Weekly Limit: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.mileage_limit_weekly}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Mileage Weekly Monthly: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.mileage_limit_monthly}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Insurance Included: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.insurance_included}</Text>
                        </View>
                        <View style={styles.carDetailItemWrap}>
                            <Text style={styles.carDetailLabel}>Car Type ID: </Text>
                            <Text style={styles.carDetailValue}>{this.state.car.car_type_id}</Text>
                        </View>
                    </ScrollView>
                    {/*<View style={styles.carDetailItemWrap}>*/}
                    {/*<Text style={styles.carDetailLabel}>Featured: </Text>*/}
                    {/*<Text style={styles.carDetailValue}>{this.state.car.is_featured}</Text>*/}
                    {/*</View>*/}
                </View>
            </View>
            {/*{_.values(Object.keys(this.state.car))}*/}
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
