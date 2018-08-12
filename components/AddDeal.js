import React from 'react';
import {Text, View, TextInput, Image, ScrollView, TouchableOpacity, Alert} from 'react-native'
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
            statusTypes: ["newdeal", "approved", "canceled", "paused", "active"]
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
        axios.post('https://tripjhon.insightssoftwares.com//api/v1/add_deal', {
            access_token: this.props.token,
            car_id: this.state.car_id,
            discount: this.state.discount,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            status: this.state.statusTypes,
        })
            .then(response => {
                const data = response;
                console.log(data)

                Alert.alert(
                    'Adding Deal',
                    response.data.message,
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
                this.setState({
                    car: data
                })

            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
    }

    componentDidCatch(err) {
        console.log(err)
    }

    openDrawer = () => {
        this.props.navigation.openDrawer()
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

    render() {
        return (<View style={{flex: 1, position: 'relative', backgroundColor: '#483F61'}}>
            <TopNav title={"Add deal"} openDrawer={this.openDrawer}/>
            <View style={{marginTop: 44, justifyContent: 'center', alignContent: 'center', flex: 1}}>
                <View style={[styles.profileInputGroup, {alignSelf: 'center'}]}>
                    <Text style={styles.sectionTitle}> Car deals information </Text>
                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                        <View style={[styles.textInputWrap, {
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4
                        }]}>
                            <TextInput placeholder={"Car Id"} value={this.state.car_id}
                                       style={styles.textInput}
                                       underlineColorAndroid="transparent"
                                       onChangeText={car_id => this.setState({car_id})}/>
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

                        <TouchableOpacity onPress={() => {
                            this.renderStatusOptions(this.state.statusTypes)
                        }}><Text
                            style={styles.sectionTitle}> {!this.state.status ? 'Select Status' : null} </Text></TouchableOpacity>

                        <View style={{
                            width: '100%',
                            borderRadius: 4,
                            overflow: 'hidden'
                        }}>{this.renderStatusOptions(this.state.statusTypes)}</View>

                        <TouchableOpacity onPress={() => {
                            this.submitDeal()
                        }} style={styles.addDealBtn}><Text style={styles.addDealBtnText}>Add
                            Deal</Text></TouchableOpacity>

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