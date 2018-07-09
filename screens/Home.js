import React from 'react';
import {Text, View, TextInput, Image} from 'react-native'
import {TopNav} from "../components/TopNav";
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import HomeTopSection from '../components/homeTopSection'
import CarsList from '../components/carsList'
import styles from "../assets/styles/profileScreen";

export default class Home extends React.Component {
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
        drawerLabel: () => 'Home',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../assets/images/car.png')}
                style={[styles.icon, {tintColor: tintColor}]}
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
            <CarsList navigation={this.props.navigation}/>
        </View>)
    }
}