import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Dimensions,
} from 'react-native'
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import {connect} from 'react-redux'
import SvgUri from 'react-native-svg-uri';
import styles from '../assets/styles/leads';
import axios from "axios/index";
import commonStyles from "../assets/styles/common";


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
}

class LeadsList extends React.Component {

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
            approved_leads: [],
            canceled_leads: [],
            new_leads: [],
        }
    }

    componentDidMount() {
        this.getLeads();
        console.log(this.props, this.state)
    }

    componentDidCatch(err) {
        console.log(err)
    }

    renderCanceledLeads = () => {
        if (this.state.canceled_leads && this.state.canceled_leads.length > 0) {
            return this.state.canceled_leads.map(resArr => {
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
                                </View>
                                <View style={styles.cardRightSide}>
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
                return (<View style={{overflow: 'visible', paddingTop: 12, paddingHorizontal: 8}} key={resArr.id}>
                        {/*<View style={[styles.topDateBadgeGradient]}>*/}
                        {/*<View style={styles.topInfoSeparator}></View>*/}

                        {/*<View><Text style={styles.statusText}>DONE</Text></View>*/}
                        {/*</View>*/}
                        <View style={styles.leadcsListCardContainer}>
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
                                </View>
                                <View style={styles.cardRightSide}>
                                    <Text style={styles.carName}>Car ID: {resArr.car_id}</Text>
                                    {/*<Text>{resArr.contact_number}</Text>*/}
                                    <Text style={styles.carMessage} numberOfLines={2}
                                          ellipsizeMode='tail'>{resArr.message}</Text>
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
        else {
            return <Text style={{color: 'white', textAlign: 'center', flex: 1}}>
                No Leads
            </Text>
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
                                </View>
                                <View style={styles.cardRightSide}>
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
                console.log(response.data)
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

    render() {
        return <View style={styles.container}>
            <View style={{paddingHorizontal: 12,}}>
                <Text style={{color: 'white', marginBottom: 12}}>Recent Leads</Text>
                <ScrollView style={{
                    paddingTop: 4,
                    paddingHorizontal: 8,
                    paddingBottom: 24,
                    alignSelf: 'center',
                    backgroundColor: '#821B24',
                    width: '100%',
                    height: '100%',
                    zIndex: 9,
                    borderRadius: 12
                }}>
                    {/*{this.renderNewLeads()}*/}
                    {/*{this.props.leadType !== 'all' ? this.props.leadType === 'cancelled' ? this.renderCanceledLeads() : this.renderNewLeads() : this.renderLeads()}*/}
                    {/*<View><Text style={styles.statusText}>Approved Leads</Text></View>*/}
                    {/*{this.renderLeads()}*/}
                    {/*<View><Text style={styles.statusText}>New Leads</Text></View>*/}
                    {/*<View><Text style={styles.statusText}>Cancelled Leads</Text></View>*/}
                    {/*{this.renderCanceledLeads()}*/}
                    {this.renderNewLeads()}
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

export default connect(mapStateToProps, mapDispatchToProps)(LeadsList);
