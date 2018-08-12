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
import {LinearGradient} from 'expo';
import AddCar from '../components/addCar'
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
                return (<View style={{backgroundColor: 'transparent', paddingHorizontal: 8}}>
                        <View style={styles.topDateBadge}>
                            <View><Text style={styles.dateText}>6th May, 2018</Text></View>
                            <View style={styles.topInfoSeparator}></View>
                            <View><Text style={styles.statusText}>CANC</Text></View>
                        </View>
                        <View style={styles.leadsListCardContainer}>
                            <TouchableOpacity key={resArr.id}
                                              activeOpacity=".7"
                                              style={styles.leadsListCard}
                                              onPress={() => {
                                                  this.props.navigation.navigate('Vip', {
                                                      token: this.props.token,
                                                      id: this.state.cars[resArr].id
                                                  })
                                              }}>
                                <View>
                                    <View>
                                        <Text style={styles.carName}>Kia Sportage 2018</Text>
                                        {/*<Text>{resArr.contact_number}</Text>*/}
                                        <Text style={styles.carMessage}>{resArr.message}</Text>
                                        <View style={styles.extraInfoWrap}>
                                            <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                            <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                            <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.bottomBtnWrap}>
                                <View style={styles.oneHalfSection}>
                                    <Text style={styles.btnText}>Approve</Text>
                                </View>
                                <View style={commonStyles.graySeparatorVertical}>
                                    <View style={commonStyles.graySeparatorVerInner}/>
                                </View>
                                <View style={styles.oneHalfSection}>
                                    <Text style={styles.btnText}>Decline</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })
        }
    };
    renderNewLeads = () => {
        if (this.state.new_leads && this.state.new_leads.length > 0) {
            return this.state.new_leads.map(resArr => {
                return (<View style={{backgroundColor: 'transparent', paddingHorizontal: 8}}>
                        <View style={[styles.topDateBadge, {backgroundColor: '#4A90E2'}]}>
                            <View><Text style={styles.dateText}>6th May, 2018</Text></View>
                            <View style={styles.topInfoSeparator}></View>
                            <View><Text style={styles.statusText}>CANC</Text></View>
                        </View>
                        <View style={styles.leadsListCardContainer}>
                            <TouchableOpacity key={resArr.id}
                                              activeOpacity=".7"
                                              style={styles.leadsListCard}
                                              onPress={() => {
                                                  // this.props.navigation.navigate('Vip', {token: this.props.token, id: this.state.cars[resArr].id})
                                              }}>
                                <View>
                                    <View>
                                        <Text style={styles.carName}>Kia Sportage 2018</Text>
                                        {/*<Text>{resArr.contact_number}</Text>*/}
                                        <Text style={styles.carMessage}>{resArr.message}</Text>
                                        <View style={styles.extraInfoWrap}>
                                            <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                            <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                            <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.bottomBtnWrap}>
                                <View style={styles.oneHalfSection}>
                                    <Text style={styles.btnText}>Approve</Text>
                                </View>
                                <View style={commonStyles.graySeparatorVertical}>
                                    <View style={commonStyles.graySeparatorVerInner}/>
                                </View>
                                <View style={styles.oneHalfSection}>
                                    <Text style={styles.btnText}>Decline</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })
        }
    };


    renderLeads = () => {
        if (this.state.approved_leads && this.state.approved_leads.length > 0) {
            return this.state.approved_leads.map(resArr => {
                return (<View style={{backgroundColor: 'transparent', paddingHorizontal: 8}}  key={resArr.id}>
                        <View style={[styles.topDateBadgeGradient]}>
                            <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 1}} colors={['#FAD961', '#F76B1C']}
                                            style={[styles.topDateBadgeGradientInner]}>
                                <View><Text style={styles.dateText}>6th May, 2018</Text></View>
                                <View style={styles.topInfoSeparator}></View>
                                <View><Text style={styles.statusText}>DONE</Text></View>
                            </LinearGradient>
                        </View>
                    <View style={styles.leadsListCardContainer}>
                        <TouchableOpacity
                                          activeOpacity={.7}
                                          style={styles.leadsListCard}
                                          onPress={() => {
                                              // this.props.navigation.navigate('Vip', {token: this.props.token, id: this.state.cars[resArr].id})
                                          }}>
                                <View>
                                    <View>
                                        <Text style={styles.carName}>Kia Sportage 2018</Text>
                                        {/*<Text>{resArr.contact_number}</Text>*/}
                                        <Text style={styles.carMessage}>{resArr.message}</Text>
                                        <View style={styles.extraInfoWrap}>
                                            <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                            <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                            <Text style={styles.extraInfoText}>{resArr.name}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.bottomBtnWrap}>
                                <View style={styles.oneHalfSection}>
                                    <Text style={styles.btnText}>Approve</Text>
                                </View>
                                <View style={commonStyles.graySeparatorVertical}>
                                    <View style={commonStyles.graySeparatorVerInner}/>
                                </View>
                                <View style={styles.oneHalfSection}>
                                    <Text style={styles.btnText}>Decline</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })
        }
    };

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
            <View>
                <ScrollView style={{paddingTop: 16, width: '100%', height: '100%', zIndex: 9}}>
                    {/*{this.renderNewLeads()}*/}
                    {this.props.leadType !== 'all' ? this.props.leadType === 'cancelled' ? this.renderCanceledLeads() : this.renderNewLeads() : this.renderLeads()}

                    {/*{this.renderLeads()}*/}
                    {/*{this.renderCanceledLeads()}*/}
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
