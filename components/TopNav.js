import React from 'react'
import { TouchableHighlight, View, Image, Text } from 'react-native'

class TopNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unread: props.unread,
        }
    }
    render() {
        return (
            <View style={{
                paddingTop: 38,
                paddingLeft: 9,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight
                        style={{
                            paddingLeft: 10,
                            paddingTop: 10
                        }}
                        onPress={this.props.openDrawer}
                    >
                        <Image source={require('../assets/images/robot-dev.png')} style={{height: 20, width: 20}} />
                    </TouchableHighlight>
                    <View style={{ marginLeft: 23 }} >
                        <Text style={{
                        }}
                        >
                            {this.props.title}
                        </Text>
                    </View>
                </View>
                <TouchableHighlight onPress={() => {}}
                >
                    <View>
                        <Image source={require('../assets/images/robot-dev.png')} style={{ height: 20, width: 20, marginRight: 20 }} />
                        {this.state.unread && <View style={{ backgroundColor: '#ff9600', height: 10, width: 10, borderRadius: 5, position: 'absolute', left: 10 }} />}
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export { TopNav }
