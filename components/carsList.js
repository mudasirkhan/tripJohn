import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Dimensions,
    Image,
    Modal
} from 'react-native'
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import {connect} from 'react-redux'
import SvgUri from 'react-native-svg-uri';
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
                return (<View style={styles.carListCardContainer}>
                        <TouchableOpacity key={resArr}
                                          activeOpacity=".7"
                                          style={styles.carListCard}
                                          onPress={() => {
                                              this.props.navigation.navigate('Vip', {token: this.props.token, id: this.state.cars[resArr].id})
                                          }}>
                            <View style={styles.topHalfSection}>
                                <Image
                                    source={{uri: 'https://tripjhon.insightssoftwares.com//api/v1/' + this.state.cars[resArr].car_image}}
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
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return <View style={styles.container}>
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    presentationStyle="formSheet"
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 44 , justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <View style={{flex: 1}}>

                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                            <AddCar setModalVisible={this.setModalVisible} token={this.props.token} />
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                }}>
                    <Text style={styles.requestCallbackText}>Add Car</Text>
                </TouchableOpacity>
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
