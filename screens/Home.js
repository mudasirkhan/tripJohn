import React from 'react';
import {Text, View, TextInput, Image, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native'
import {TopNav} from "../components/TopNav";
import HomeTopSection from '../components/homeTopSection'
import CarsList from '../components/carsList'
import LeadsList from '../screens/Leads'
import styles from "../assets/styles/dashboard";
import commonStyles from "../assets/styles/common";
import axios from "axios/index";
import {connect} from "react-redux";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            showLocation: false,
            resp: {},
            selectedLocation: '',
            cars: [],
            leadType: 'all',
            showWebView: false,
            plans: null,
            currentPlan: 1,
            loading: false
        }
    }

    static navigationOptions = {
        drawerLabel: () => 'Home',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../assets/icons/nav-icon-home.png')}
            />
        ),
    }

    componentDidMount() {
        // console.log(this.props)
        this.getMeta()

    }

    componentDidCatch(err) {
        console.log("error", err)
    }

    getMeta = async () => {
        let resp = {};
        this.setState({loading: true}, async () => {
            await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_plans', {
                access_token: this.props.token
            })
                .then(response => {
                    console.log(response.data)
                    if (response.data.status === 500) {
                        this.props.change('LOGIN', false)
                    }
                    //let a = response.data.filter()
                    this.setState({
                        plans: response.data.plans,
                        currentPlan: response.data.currentPlan ? response.data.currentPlan : this.state.currentPlan,
                        loading: false
                    })
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({loading: false, error: true},()=> {this.props.change('LOGIN', false)})

                });
            console.log(resp, this.props.token);
        })
    }
    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render() {
        return <View style={{flex: 1, position: 'relative'}}>
            <TopNav title={""} openDrawer={this.openDrawer}/>
            <View style={styles.topContainer}>
                {(this.state.loading || (!this.state.plans)) ? <View style={styles.topInfo}><ActivityIndicator/><Text
                        style={{color: 'white', paddingVertical: 16}}> Loading...</Text></View> :
                    <View style={styles.topInfo}>
                        {/*<TouchableOpacity*/}
                        {/*style={styles.changePlanBtn}*/}
                        {/*onPress={() => {*/}
                        {/*this.setState({showWebView: true})*/}
                        {/*}}>*/}
                        {/*<Text style={styles.changePlanBtnText}>CHANGE PLAN</Text>*/}
                        {/*</TouchableOpacity>*/}
                        <View style={styles.planNameWrap}>

                            <Text style={{color: '#666'}}>Your current plan</Text>
                            <Text
                                style={styles.planName}>{this.state.plans[this.state.currentPlan].english_name}</Text>
                            {/*<Text>View all plans</Text>*/}
                        </View>
                        {/*<View style={commonStyles.graySeparator}>*/}
                        {/*<View style={commonStyles.graySeparatorInner}/>*/}
                        {/*</View>*/}
                        <View style={styles.planDetailsWrap}>
                            <View style={styles.planDetailsItem}>
                                <Text style={styles.planDetailsText}>Totals cars you can add</Text>
                                <Text style={styles.numberBadgeText}>
                                    {this.state.plans[this.state.currentPlan].number_of_cars}
                                </Text>
                            </View>
                            <View style={styles.planDetailsItem}>
                                <View style={styles.planDetailsTextWrap}>
                                    <Text style={styles.planDetailsText}>Total deals per month</Text>
                                </View>
                                <View style={styles.numberBadge}>
                                    <Text style={styles.numberBadgeText}>
                                        {this.state.plans[this.state.currentPlan].deal_times_per_month}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                }
            </View>
            <View style={styles.bottomContainer}>
                {/*<View style={styles.leadsListHeader}>*/}
                {/*<Text style={styles.listHeaderTitle}>Recent leads</Text>*/}
                {/*/!*<TouchableOpacity onPress={() => {*!/*/}
                {/*/!*this.setState({showTypes: !this.state.showTypes})*!/*/}
                {/*/!*}} style={styles.listSortBtn}>*!/*/}
                {/*/!*<Text*!/*/}
                {/*/!*style={styles.listSortBtnText}>{this.state.leadType !== 'all' ? this.state.leadType === 'cancelled' ? 'Cancelled Leads' : 'New Leads' : 'All Leads'}</Text>*!/*/}
                {/*/!*<SvgUri source={require('../assets/icons/down-chevron.svg')}/>*!/*/}
                {/*/!*</TouchableOpacity>*!/*/}
                {/*</View>*/}
                <ScrollView
                    style={{alignSelf: 'center', paddingBottom: 16, flex: 1, zIndex: 9, width: '92%', height: '100%'}}
                    contentContainerStyle={{flex: 1}}>
                    <LeadsList navigation={this.props.navigation} style={{zIndex: 9}}
                               leadType={this.state.leadType}/>
                </ScrollView>

                {/*{this.state.showTypes ?*/}
                {/*<View style={styles.sortListWrap}>*/}
                {/*<TouchableOpacity onPress={() => {*/}
                {/*this.setState({leadType: 'new', showTypes: false})*/}
                {/*}} style={styles.sortListItem}>*/}
                {/*<Text style={styles.sortListText}>*/}
                {/*New leads*/}
                {/*</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity onPress={() => {*/}
                {/*this.setState({leadType: 'cancelled', showTypes: false})*/}
                {/*}} style={styles.sortListItem}>*/}
                {/*<Text style={styles.sortListText}>*/}
                {/*Cancelled leads*/}
                {/*</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity onPress={() => {*/}
                {/*this.setState({leadType: 'all', showTypes: false})*/}
                {/*}} style={styles.sortListItem}>*/}
                {/*<Text style={styles.sortListText}>*/}
                {/*All leads*/}
                {/*</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*</View>*/}
                {/*: null}*/}

            </View>
        </View>
    }
}

const mapDispatchToProps = (dispatch) => ({
    change: (action, value) => {
        dispatch({type: action, payload: value})
    },
})
const mapStateToProps = (state, ownProps) => ({
    token: state.token,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)