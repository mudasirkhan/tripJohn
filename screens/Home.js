import React from 'react';
import {Text, View, TextInput} from 'react-native'
import {TopNav} from "../components/TopNav";
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import WelcomeRegistration from '../components/welcomeRegistration';
import HomeTopSection from '../components/homeTopSection'
import CarsList from '../components/carsList'

export default class Home extends React.Component {
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
            cars: []
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render() {
        return (<View style={{flex: 1, position: 'relative'}}>
            <TopNav title={"Home"} openDrawer={this.openDrawer}/>
            <HomeTopSection/>
            <CarsList />
            <View style={{flex: 1}}>
                <View>
                    {/*{this.renderCars()}*/}
                </View>
            </View>
        </View>);
    }
}