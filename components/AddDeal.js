import React from 'react';
import {Text, View, TextInput, Image, ScrollView, TouchableOpacity, Alert, ActivityIndicator} from 'react-native'
import {TopNav} from "../components/TopNav";
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import HomeTopSection from '../components/homeTopSection'
import CarsList from '../components/carsList'
import LeadsList from '../screens/Leads'
import SvgUri from 'react-native-svg-uri';
import styles from '../assets/styles/deals';
import {connect} from "react-redux";
import axios from "axios/index";
import * as _ from "lodash";

class Deals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            showLocation: false,
            resp: {},
            selectedLocation: '',
            cars: [],
            statusTypes: ["newdeal", "approved", "canceled", "paused", "active"],
            loading: false,
        }
    }

    static navigationOptions = {
        drawerLabel: () => 'Deals',
        drawerIcon: ({tintColor}) => (
            <SvgUri
                source={require('../assets/icons/nav-icon-deals.svg')}
            />
        ),
    }

    submitDeal() {
        this.setState({loading: true},()=> {
        axios.post('https://tripjhon.insightssoftwares.com//api/v1/add_deal', {
            access_token: this.props.token,
            car_id: this.state.car_id,
            discount: this.state.discount,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            status: 'newdeal',
            carSelected: '',
            showCars: false
        })
            .then(response => {
                const data = response;
                console.log(data)

                Alert.alert(
                    'Adding Deal',
                    response.data.message,
                    [
                        {text: 'OK', onPress: () => this.setState({
                                car: data,
                                loading: false,
                                car_id: '',
                                discount: '',
                                start_date: '',
                                end_date: '',
                                carSelected: '',
                            })},
                    ],
                    {cancelable: false}
                )


            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        })
    }

    componentDidMount() {
        this.getCars()
    }

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }
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
    renderStatusOptions = (statusMethods) => {
        return _.map(statusMethods, item => {
            return <TouchableOpacity
                key={item}
                style={this.state.status === item ? styles.selectedStatusOption : styles.statusOptions}
                onPress={() => {
                    this.setState({status: item})
                }}>
                <Text style={styles.statusOptionsText}>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderCars = () => {
        let arr = Object.keys(this.state.cars)
        return _.map(arr, car => <TouchableOpacity key={car} onPress={() => {
            this.setState({
                carSelected: this.state.cars[car].english_name,
                car_id: this.state.cars[car].id,
                showCars: false
            })
        }}>
            <View style={{zIndex: 99999, paddingVertical: 12, paddingLeft: 20, width: '100%'}}>
                <Text>
                    {this.state.cars[car].english_name}
                </Text>
            </View>
        </TouchableOpacity>)
    }

    render() {
        return (<View style={{flex: 1, position: 'relative', backgroundColor: '#AC2733'}}>
            <TopNav title={"Add deal"} openDrawer={this.openDrawer}/>
            <View style={{marginTop: 44, justifyContent: 'center', alignContent: 'center', flex: 1}}>
                <View style={[styles.profileInputGroup, {alignSelf: 'center'}]}>
                    <Text style={styles.sectionTitle}> Car deals information </Text>
                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                        <TouchableOpacity onPress={() => {
                            this.setState({showCars: true})
                        }} style={[styles.textInputWrap, {
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4
                        }]}>
                            <Text
                                style={styles.textInput}
                            >
                                {this.state.carSelected ? this.state.carSelected : "Select a car"}
                            </Text>
                        </TouchableOpacity>
                        <View style={{
                            position: 'absolute',
                            top: 40,
                            overflow: 'visible',
                            left: 0,
                            zIndex: 99999,
                            backgroundColor: '#fff',
                            width: '100%',
                            elevation: 4,
                            shadowColor: 'rgba(0,0,0,0.09)',
                            shadowRadius: 4,
                            shadowOffset: {width: 0, height: -2},
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4
                        }}>
                            {this.state.showCars && this.renderCars()}
                        </View>
                        <View style={styles.textInputWrap}><TextInput placeholder={"discount"}
                                                                      value={this.state.discount}
                                                                      style={styles.textInput}
                                                                      underlineColorAndroid="transparent"
                                                                      onChangeText={discount => this.setState({discount})}/></View>
                        <View style={styles.textInputWrap}><TextInput placeholder={"start date (YYYY-MM-DD)"}
                                                                      value={this.state.start_date}
                                                                      style={styles.textInput}
                                                                      underlineColorAndroid="transparent"
                                                                      onChangeText={start_date => this.setState({start_date})}/></View>
                        <View style={[styles.textInputWrap, {
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4
                        }]}><TextInput placeholder={"end date (YYYY-MM-DD)"} value={this.state.end_date}
                                       style={styles.textInput}
                                       underlineColorAndroid="transparent"
                                       onChangeText={end_date => this.setState({end_date})}/></View>

                        {/*<TouchableOpacity onPress={() => {*/}
                        {/*this.renderStatusOptions(this.state.statusTypes)*/}
                        {/*}}><Text*/}
                        {/*style={styles.sectionTitle}> {!this.state.status ? 'Select Status' : null} </Text></TouchableOpacity>*/}

                        {/*<View style={{*/}
                        {/*width: '100%',*/}
                        {/*borderRadius: 4,*/}
                        {/*overflow: 'hidden'*/}
                        {/*}}>{this.renderStatusOptions(this.state.statusTypes)}</View>*/}

                        <TouchableOpacity onPress={() => {
                            this.submitDeal()
                        }} style={styles.addDealBtn}>
                            {this.state.loading ? <ActivityIndicator/> : <Text>Add deal</Text>}
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </View>)
    }
}

const mapDispatchToProps = (dispatch) => ({
    change: (action, value) => {
        dispatch({type: action, payload: value})
    },
})
const mapStateToProps = (state, ownProps) => ({
    userInfo: state.user,
    logged: state.logged,
    token: state.token,
})

export default connect(mapStateToProps, mapDispatchToProps)(Deals);