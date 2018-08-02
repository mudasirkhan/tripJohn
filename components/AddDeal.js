import React from 'react';
import {Text, View, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native'
import {TopNav} from "../components/TopNav";
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import HomeTopSection from '../components/homeTopSection'
import CarsList from '../components/carsList'
import LeadsList from '../screens/Leads'
import SvgUri from 'react-native-svg-uri';
import styles from "../assets/styles/profileScreen";
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
            car_id: 7,
            discount: 2.3,
            start_date: "1992-05-23",
            end_date: "1992-05-23",
            status: "newdeal",
        })
            .then(response => {
                const data = response;
                console.log(data)
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
        return _.map(statusMethods, item=> {
            return <TouchableOpacity onPress={() => {this.setState({status: item})}}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    render() {
        return (<View style={{flex: 1, position: 'relative',backgroundColor: '#f5f5f5'}}>
            <TopNav title={"Add deal"} openDrawer={this.openDrawer}/>
            <View style={{marginTop: 44}}>
                <View><TextInput placeholder={"Car Id"} value={this.state.car_id} onChangeText={car_id => this.setState({car_id})}/></View>
                <View><TextInput placeholder={"discount"} value={this.state.discount} onChangeText={discount => this.setState({discount})}/></View>
                <View><TextInput placeholder={"start date (YYYY-MM-DD)"} value={this.state.start_date} onChangeText={start_date => this.setState({start_date})}/></View>
                <View><TextInput placeholder={"end date (YYYY-MM-DD)"} value={this.state.end_date} onChangeText={end_date => this.setState({end_date})}/></View>
                <TouchableOpacity onPress={()=>{this.renderStatusOptions(this.state.statusTypes)}}><Text> {this.state.status? this.state.status: 'Select Status'} </Text></TouchableOpacity>
                <View style={{ flexDirection: 'row'}}>{this.renderStatusOptions(this.state.statusTypes)}</View>
                <TouchableOpacity onPress={()=> {this.submitDeal()}}><Text> Add Deal</Text></TouchableOpacity>
            </View>

        </View>)
    }
}const mapDispatchToProps = (dispatch) => ({
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