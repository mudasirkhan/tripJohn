import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Dimensions,
    PixelRatio,
    Image,
    Modal
} from 'react-native'
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import {connect} from 'react-redux'
import SvgUri from 'react-native-svg-uri';
import modalStyles from '../assets/styles/modal';
import styles from '../assets/styles/searchBar';
import axios from "axios/index";
import AddCar from './addCar'


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
            cars: [],
            modalVisible: false,
        }
    }

    componentDidMount() {
        this.getCars();
        console.log(this.props, this.state)
    }

    componentDidCatch(err) {
        console.log(err)
    }

    renderCars = () => {
        if (this.state.cars && this.state.cars.length > 0) {
            let resArr = Object.keys(this.state.cars);
            return resArr.map(resArr => {
                return (<View style={styles.carListCardContainer} key={resArr}>
                        <TouchableOpacity
                            activeOpacity={.7}
                            style={styles.carListCard}
                            onPress={() => {
                                this.props.navigation.navigate('Vip', {
                                    token: this.props.token,
                                    id: this.state.cars[resArr].id
                                })
                            }}>
                            <View style={styles.topHalfSection}>
                                <Image
                                    source={{uri: 'https://tripjhon.insightssoftwares.com/storage/car_images/' + this.state.cars[resArr].car_image}}
                                    style={{height: 50, width: 120, marginTop: 6}}
                                />
                                <View style={styles.rightSection}>
                                    <Text style={styles.carTitle}>{this.state.cars[resArr].english_name}</Text>
                                    <View style={styles.carPriceWrap}>
                                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                            <Text
                                                style={styles.carPriceMonth}>{this.state.cars[resArr].price_per_month}</Text><Text
                                            style={styles.carPriceMonthCurrency}>AED / month</Text>
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
                                            <Text style={styles.providerName}>{this.state.provider}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.carProviderWrap}>
                                        <View style={{flexDirection: 'row'}}>
                                            <SvgUri source={require('../assets/icons/car-n-key.svg')}
                                                    style={styles.carKey}/>
                                            <Text style={styles.providerName}>{this.state.providerAddress}</Text>
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

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
        this.getCars();

    }

    render() {
        return <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                presentationStyle="fullScreen"
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={modalStyles.modalWrap}>
                    <View style={{flex: 1}}>
                        <View style={modalStyles.modalTopBar}>
                            {/*<View styles={modalStyles.backButton}>*/}
                            <TouchableOpacity
                                style={modalStyles.backButton}
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <SvgUri source={require('../assets/icons/arrow-back.svg')}
                                        height='20.9'
                                        width='18.7'
                                        style={modalStyles.arrowBack}/>
                            </TouchableOpacity>
                            {/*</View>*/}
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                                <Text style={modalStyles.modalTitleText}>Add a car</Text>
                            </View>
                        </View>
                        <AddCar setModalVisible={this.setModalVisible.bind(this,!this.state.modalVisible)} token={this.props.token} navigation={this.props.navigation}/>
                    </View>
                </View>
            </Modal>
            <View style={styles.addCarWrap}>
                <TouchableOpacity onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                }} style={styles.addCarBtn}>
                    <Text style={styles.addCarBtnText}>Add new car</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{width: '100%', height: '100%', zIndex: 9}}>
                {this.renderCars()}
            </ScrollView>
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
