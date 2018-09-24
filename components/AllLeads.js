import React from 'react';
import {Text, View, TextInput, Image, ScrollView, TouchableOpacity, Alert} from 'react-native'
import {TopNav} from "../components/TopNav";
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import HomeTopSection from '../components/homeTopSection'
import CarsList from '../components/carsList'
import LeadsList from '../screens/Leads'
import SvgUri from 'react-native-svg-uri';
import styles from '../assets/styles/leads';
import {connect} from "react-redux";
import axios from "axios/index";
import * as _ from "lodash";

class Leads extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            showLocation: false,
            resp: {},
            selectedLocation: '',
            cars: [],
            showApprovedLeads: true,
            showCancelledLeads: true,
            showNewLeads: true,
            approved_leads: [],
            canceled_leads: [],
            new_leads: [],
        }
    }

    static navigationOptions = {
        drawerLabel: () => 'Leads',
        drawerIcon: ({tintColor}) => (
            <SvgUri
                source={require('../assets/icons/nav-icon-leads.svg')}
            />
        ),
    }

    componentDidMount() {
        this.getLeads();
        this.getCarDetails();
    }

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    renderCanceledLeads = () => {
        if (this.state.canceled_leads && this.state.canceled_leads.length > 0) {
            return this.state.canceled_leads.map(resArr => {
                return (<View style={{backgroundColor: 'transparent', paddingHorizontal: 8}} key={resArr.id}>
                        <View style={[styles.topDateBadgeGradient]}>
                            <View style={styles.topInfoSeparator}></View>
                        </View>
                        <View style={styles.leadsListCardContainer}>
                            <TouchableOpacity
                                activeOpacity={.7}
                                style={styles.leadsListCard}
                                onPress={() => {
                                    // this.props.navigation.navigate('Vip', {token: this.props.token, id: this.state.cars[resArr].id})
                                }}>
                                <View style={styles.cardLeftSide}>
                                    <Text
                                        style={styles.dateText}>{resArr.created_on && resArr.created_on.split(" ")[0]}</Text>
                                    <Text
                                        style={styles.timeText}>{resArr.created_on && (resArr.created_on.split(" ")[1].split(":")[0] + ":" + resArr.created_on.split(" ")[1].split(":")[1])}</Text>
                                    <View>
                                        <Text style={styles.dateText}>{resArr.status}</Text>
                                    </View>
                                </View>
                                <View style={styles.cardRightSide}>
                                    {(this.state.cars && this.state.cars[resArr.car_id]) &&
                                    <Text
                                        style={[styles.carName, {marginBottom: 4}]}>{this.state.cars[resArr.car_id].english_name}</Text>}
                                    <Text style={styles.carName}>Car ID: {resArr.car_id}</Text>
                                    {/*<Text>{resArr.contact_number}</Text>*/}
                                    <Text style={styles.carMessage}>{resArr.message}</Text>
                                    <View style={styles.extraInfoWrap}>
                                        <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })
        }
    };
    renderNewLeads = () => {
        if (this.state.new_leads && this.state.new_leads.length > 0) {
            return this.state.new_leads.map(resArr => {
                return (<View style={{backgroundColor: 'transparent', paddingHorizontal: 8}} key={resArr.id}>
                        <View style={[styles.topDateBadgeGradient]}>
                            <View style={styles.topInfoSeparator}></View>

                            {/*<View><Text style={styles.statusText}>DONE</Text></View>*/}
                        </View>
                        <View style={styles.leadsListCardContainer}>
                            <TouchableOpacity
                                activeOpacity={.7}
                                style={styles.leadsListCard}
                                onPress={() => {
                                    // this.props.navigation.navigate('Vip', {token: this.props.token, id: this.state.cars[resArr].id})
                                }}>
                                <View style={styles.cardLeftSide}>
                                    <Text
                                        style={styles.dateText}>{resArr.created_on && resArr.created_on.split(" ")[0]}</Text>
                                    <Text
                                        style={styles.timeText}>{resArr.created_on && (resArr.created_on.split(" ")[1].split(":")[0] + ":" + resArr.created_on.split(" ")[1].split(":")[1])}</Text>
                                    <View>
                                        <Text style={styles.dateText}>{resArr.status}</Text>
                                    </View>
                                </View>
                                <View style={styles.cardRightSide}>
                                    {(this.state.cars && this.state.cars[resArr.car_id]) &&
                                    <Text
                                        style={[styles.carName, {marginBottom: 4}]}>{this.state.cars[resArr.car_id].english_name}</Text>}
                                    <Text style={styles.carName}>Car ID: {resArr.car_id}</Text>
                                    {/*<Text>{resArr.contact_number}</Text>*/}
                                    <Text style={styles.carMessage}>{resArr.message}</Text>
                                    <View style={styles.extraInfoWrap}>
                                        <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                    </View>
                                </View>
                                <View style={styles.buttonWrap}>
                                    <TouchableOpacity onPress={() => {
                                        this.approve(resArr.id)
                                    }}>
                                        <SvgUri width="21"
                                                height="27"
                                                source={require('../assets/icons/approve.svg')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        this.cancell(resArr.id)
                                    }}>
                                        <SvgUri width="21"
                                                height="27"
                                                source={require('../assets/icons/decline.svg')}/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })
        }
    };


    renderLeads = () => {
        if (this.state.approved_leads && this.state.approved_leads.length > 0) {
            return this.state.approved_leads.map(resArr => {
                return (<View style={{backgroundColor: 'transparent', paddingHorizontal: 8}} key={resArr.id}>
                        <View style={[styles.topDateBadgeGradient]}>
                            <View style={styles.topInfoSeparator}></View>

                            {/*<View><Text style={styles.statusText}>DONE</Text></View>*/}
                        </View>
                        <View style={styles.leadsListCardContainer}>
                            <TouchableOpacity
                                activeOpacity={.7}
                                style={styles.leadsListCard}
                                onPress={() => {
                                    // this.props.navigation.navigate('Vip', {token: this.props.token, id: this.state.cars[resArr].id})
                                }}>
                                <View style={styles.cardLeftSide}>
                                    <Text
                                        style={styles.dateText}>{resArr.created_on && resArr.created_on.split(" ")[0]}</Text>
                                    <Text
                                        style={styles.timeText}>{resArr.created_on && (resArr.created_on.split(" ")[1].split(":")[0] + ":" + resArr.created_on.split(" ")[1].split(":")[1])}</Text>
                                    <View>
                                        <Text style={styles.dateText}>{resArr.status}</Text>
                                    </View>
                                </View>
                                <View style={styles.cardRightSide}>
                                    {(this.state.cars && this.state.cars[resArr.car_id]) &&
                                    <Text
                                        style={[styles.carName, {marginBottom: 4}]}>{this.state.cars[resArr.car_id].english_name}</Text>}
                                    <Text style={styles.carName}>Car ID: {resArr.car_id}</Text>
                                    {/*<Text>{resArr.contact_number}</Text>*/}
                                    <Text style={styles.carMessage}>{resArr.message}</Text>
                                    <View style={styles.extraInfoWrap}>
                                        <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                    </View>
                                </View>
                                <View style={styles.buttonWrap}>
                                    <TouchableOpacity onPress={() => {
                                        this.approve(resArr.id)
                                    }}>
                                        <SvgUri width="21"
                                                height="27"
                                                source={require('../assets/icons/approve.svg')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        this.cancell(resArr.id)
                                    }}>
                                        <SvgUri width="21"
                                                height="27"
                                                source={require('../assets/icons/decline.svg')}/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })
        }
    };
    approve = async (id) => {
        alert(id)
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/update_lead', {
            access_token: this.props.token,
            lead_id: id,
            status: "approved"

        })
            .then(response => {
                console.log(response.data)
                this.getLeads()
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
    }
    cancell = async (id) => {
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/update_lead', {
            access_token: this.props.token,
            lead_id: id,
            status: "canceled"

        })
            .then(response => {
                console.log(response.data)
                this.getLeads()
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
    }
    getLeads = async () => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_dashboard_data', {
            access_token: this.props.token
        })
            .then(response => {
                console.log("This is data: ", response.data)
                resp = response.data.leads;
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp, this.props.token);
        resp !== undefined && this.setState({
            approved_leads: resp.approved_leads,
            canceled_leads: resp.canceled_leads,
            new_leads: resp.new_leads
        });
    }
    getCarDetails = async (id) => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_cars', {
            access_token: this.props.token
        })
            .then(response => {
                resp = response.data.cars;
                resp = _.keyBy(resp, (car) => car.id);
                this.setState({cars: resp}, () => {
                    console.log("This is data: ", this.state.cars)
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
    }

    render() {
        return (<View style={[styles.container, {backgroundColor: '#AC2733'}]}>
            <TopNav title={""} openDrawer={this.openDrawer} style={{zIndex: 9999999}}/>
            <View style={styles.topTabContainer}>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({showApprovedLeads: true, showCancelledLeads: true, showNewLeads: true})
                    }}
                    style={[styles.tabTextWrap, {borderBottomWidth: (this.state.showApprovedLeads && this.state.showCancelledLeads && this.state.showNewLeads) ? 2 : 0}]}>
                    <Text style={styles.tabText}>All</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({showApprovedLeads: true, showCancelledLeads: false, showNewLeads: false})
                    }}
                    style={[styles.tabTextWrap, {borderBottomWidth: (this.state.showApprovedLeads && !this.state.showCancelledLeads) ? 2 : 0}]}><Text
                    style={styles.tabText}>Approved</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({showApprovedLeads: false, showCancelledLeads: false, showNewLeads: true})
                    }}
                    style={[styles.tabTextWrap, {borderBottomWidth: (this.state.showNewLeads && !this.state.showCancelledLeads) ? 2 : 0}]}><Text
                    style={styles.tabText}>New</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({showApprovedLeads: false, showCancelledLeads: true, showNewLeads: false})
                    }}
                    style={[styles.tabTextWrap, {borderBottomWidth: (this.state.showCancelledLeads && !this.state.showNewLeads) ? 2 : 0}]}><Text
                    style={styles.tabText}>Cancelled</Text></TouchableOpacity>
            </View>
            <View style={{flex: 1, marginTop: 20}}>
                <ScrollView style={{
                    paddingVertical: 0,
                    paddingHorizontal: 12,
                    alignSelf: 'center',
                    backgroundColor: '#821B24',
                    width: '92%',
                    height: '100%',
                    zIndex: 9,
                    borderRadius: 12
                }}>
                    {/*{this.props.leadType !== 'all' ? this.props.leadType === 'cancelled' ? this.renderCanceledLeads() : this.renderNewLeads() : this.renderLeads()}*/}

                    {this.state.showApprovedLeads ? this.renderLeads() : null}
                    {this.state.showCancelledLeads ? this.renderCanceledLeads() : null}
                    {this.state.showNewLeads ? this.renderNewLeads() : null}
                    {/*{this.renderNewLeads()}*/}
                    {/*{this.renderCanceledLeads()}*/}
                </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Leads);