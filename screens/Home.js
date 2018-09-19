import React from 'react';
import {Text, View, TextInput, Image, ScrollView, TouchableOpacity, WebView} from 'react-native'
import {TopNav} from "../components/TopNav";
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import HomeTopSection from '../components/homeTopSection'
import CarsList from '../components/carsList'
import LeadsList from '../screens/Leads'
import SvgUri from 'react-native-svg-uri';
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
            plans:null,
            currentPlan: 1
        }
    }

    static navigationOptions = {
        drawerLabel: () => 'Home',
        drawerIcon: ({tintColor}) => (
            <SvgUri
                source={require('../assets/icons/nav-icon-home.svg')}
            />
        ),
    }

    componentDidMount() {
        console.log(this.props)
        this.getMeta()

    }

    componentDidCatch(err) {
        console.log(err)
    }
    getMeta = async () => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_plans', {
            access_token: this.props.token
        })
            .then(response => {
                console.log(response.data)
                //let a = response.data.filter()
                this.setState({plans: response.data.plans, currentPlan: response.data.currentPlan?response.data.currentPlan: this.state.currentPlan})
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp, this.props.token);
    }
    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render() {
        return (this.state.showWebView ? <WebView
                source={{uri: 'https://www.google.com'}}
                style={{marginTop: 20}}
            />
            : <View style={{flex: 1, position: 'relative'}}>
                <TopNav title={""} openDrawer={this.openDrawer}/>
                <View style={styles.topContainer}>
                    {this.state.plans &&
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
                            <Text style={styles.planName}>{this.state.plans[this.state.currentPlan].english_name}</Text>
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
                    </View>}
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
                        style={{alignSelf: 'center', paddingBottom: 16, flex: 1, zIndex: 9, width: '92%'}}
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
            </View>)
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