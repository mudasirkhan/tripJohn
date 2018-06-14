import React from 'react';
import {Text, View, TextInput} from 'react-native'
import {TopNav} from "../components/TopNav";
import WelcomeRegistration from '../components/welcomeRegistration';
import HomeTopSection from '../components/homeTopSection'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'sjot',
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
                    <View style={{flex: 1}}>

                    </View>
                    {/*<Text>*/}
                    {/*{this.state.title}*/}
                    {/*</Text>*/}
                </View>)
    }
}