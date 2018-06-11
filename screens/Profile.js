import React from 'react';
import {Text, View, TextInput} from 'react-native'
import {TopNav} from "../components/TopNav";


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            name: 'askxa'
        }
    }
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
            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                <Text> name</Text>
                <TextInput
                    style={{flex: 1, width: 100, height: 100}}
                    value={this.state.name}
                    onChangeText={name=>this.setState({name})}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                />
            </View>
        </View>)
    }
}