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
import styles from '../assets/styles/leads';
import axios from "axios/index";
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
            new_leads: []
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
                return (<View style={styles.carListCardContainer}>

                        <TouchableOpacity key={resArr.id}
                                          activeOpacity=".7"
                                          style={styles.carListCard}
                                          onPress={() => {
                                              // this.props.navigation.navigate('Vip', {token: this.props.token, id: this.state.cars[resArr].id})
                                          }}>
                            <View style={styles.topHalfSection}>
                                <View style={styles.rightSection}>
                                    <Text style={styles.carTitle}>{resArr.name}</Text>
                                    <View style={styles.carPriceWrap}>
                                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                            <Text
                                                style={styles.carPriceMonth}>{resArr.contact_number}</Text><Text
                                            style={styles.carPriceMonthCurrency}>AED
                                            / month</Text>
                                        </View>
                                        <Text style={styles.carPriceWeek}>{resArr.message}</Text>
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
    renderNewLeads = () => {
        if (this.state.new_leads && this.state.new_leads.length > 0) {
            return this.state.new_leads.map(resArr => {
                return (<View style={styles.leadsListCardContainer}>
                        <View style={styles.topDateBadge}>
                            <View><Text style={styles.dateText}>6th May, 2018</Text></View>
                            <View style={styles.topInfoSeparator}></View>
                            <View><Text style={styles.statusText}>NEW</Text></View>
                        </View>
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
                )
            })
        }
    };


    renderLeads = () => {
        if (this.state.approved_leads && this.state.approved_leads.length > 0) {
            return this.state.approved_leads.map(resArr => {
                return (<View style={styles.carListCardContainer}>

                        <TouchableOpacity key={resArr.id}
                                          activeOpacity=".7"
                                          style={styles.carListCard}
                                          onPress={() => {
                                              // this.props.navigation.navigate('Vip', {token: this.props.token, id: this.state.cars[resArr].id})
                                          }}>
                            <View style={styles.topHalfSection}>
                                <View style={styles.rightSection}>
                                    <Text style={styles.carTitle}>{resArr.name}</Text>
                                    <View style={styles.carPriceWrap}>
                                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                            <Text
                                                style={styles.carPriceMonth}>{resArr.contact_number}</Text><Text
                                            style={styles.carPriceMonthCurrency}>AED
                                            / month</Text>
                                        </View>
                                        <Text style={styles.carPriceWeek}>{resArr.message}</Text>
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
                <ScrollView style={{paddingTop: 32, width: '100%', height: '100%', zIndex: 9}}>
                    {this.renderNewLeads()}
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
