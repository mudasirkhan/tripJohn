import React from 'react'
import {
    View,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicator,
    Text,
    TextInput,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    Platform
} from 'react-native'
import {LinearGradient} from 'expo';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3.js'
import SvgUri from 'react-native-svg-uri';
import commonStyles from '../assets/styles/common';
import styles from '../assets/styles/searchBar';


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
}

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                {key: 'first', title: 'Personal'},
                {key: 'second', title: 'Experience'},
                {key: 'third', title: 'Go'}

            ]
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[commonStyles.smallWhiteText, {paddingBottom: 8}]}>Our featured cars are here now!</Text>
                <View style={styles.searchWrap}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={[commonStyles.textInput, styles.searchTextInput]}
                        value={this.state.name}
                        placeholder="Honda Accord, Suzuki, Alfala Company..."
                        onChangeText={name => this.setState({name})}
                        secureTextEntry={false}
                    />
                    <View style={styles.selectLocationContainer}>
                        <View style={styles.selectLocationWrap}>
                            <TextInput
                                underlineColorAndroid="transparent"
                                style={[commonStyles.textInput, {paddingHorizontal: 16, flex: 1}]}
                                secureTextEntry={false}
                                value="Select Location"
                            />
                        </View>
                        <View style={[styles.nearMeWrap, commonStyles.center]}>
                            <Text>
                                Near me
                            </Text>
                        </View>
                    </View>
                    {/*<View style={commonStyles.graySeparator}>*/}
                    {/*<View style={commonStyles.graySeparatorInner}></View>*/}
                    {/*</View>*/}
                </View>
                <View style={commonStyles.orangeBtnShadow}>
                    <View style={commonStyles.orangeBtn}>
                        <LinearGradient start={{x: 0, y: 0.75}}
                                        end={{x: 1, y: 1}} colors={['#ddd', '#ddd']}>
                            <TouchableOpacity onPress={this._handleLogin} style={commonStyles.orangeBtnInner}>
                                {/*{loader ? <ActivityIndicator/> :*/}
                                <Text style={commonStyles.orangeBtnText}>Login</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        {/*{error && <Text style={{textAlign: 'center', color: 'red'}}>Login failed</Text>}*/}
                    </View>
                </View>

            </View>
        )
    }
};

export default SearchBar;
