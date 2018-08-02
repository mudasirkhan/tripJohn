import React from 'react';
import {Text, View, TextInput, Image, ScrollView} from 'react-native'
import {TopNav} from "../components/TopNav";
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import HomeTopSection from '../components/homeTopSection'
import CarsList from '../components/carsList'
import LeadsList from '../screens/Leads'
import SvgUri from 'react-native-svg-uri';
import styles from "../assets/styles/profileScreen";

export default class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            showLocation: false,
            resp: {},
            selectedLocation: '',
            cars: []
        }
    }

    static navigationOptions = {
        drawerLabel: () => 'Car',
        drawerIcon: ({tintColor}) => (
            <SvgUri
                source={require('../assets/icons/nav-icon-car.svg')}
            />
        ),
    }

    componentDidMount() {
        console.log(this.props)
    }

    componentDidCatch(err) {
        console.log(err)
    }

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render() {
        return (<View style={{flex: 1, position: 'relative'}}>
            <TopNav title={"Home"} openDrawer={this.openDrawer}/>
            <HomeTopSection/>
            <ScrollView style={{paddingBottom: 16, flex: 1, zIndex: 9}} contentContainerStyle={{flex: 1}}>
                <CarsList navigation={this.props.navigation} style={{zIndex: 9}}/>

                {/*<Image*/}
                {/*source={require('../assets/images/ad.png')}*/}
                {/*width="280"*/}

                {/*/>*/}
            </ScrollView>
        </View>)
    }
}