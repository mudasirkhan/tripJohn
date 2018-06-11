import React from 'react';
import {Text, View, TextInput} from 'react-native'
import {TopNav} from "../components/TopNav";


export default class Home extends React.Component {
    componentDidMount(){
        console.log(this.props)
    }
    openDrawer = () => {
        this.props.navigation.openDrawer()
    }
    render() {
        return(<View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TopNav title={"Home"} openDrawer={this.openDrawer}/>
            <Text>
                hi
            </Text>
        </View>)
    }
}