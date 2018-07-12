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
import * as _ from 'lodash';
import {connect} from 'react-redux'
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3.js'
import SvgUri from 'react-native-svg-uri';
import commonStyles from '../assets/styles/common';
import styles from '../assets/styles/searchBar';
import axios from "axios/index";


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
}

class SearchBar extends React.Component {

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
        }
    }

    componentDidMount() {
        this.getList();
        console.log(this.props.token)
    }

    componentDidCatch(err) {
        console.log(err)
    }

    renderLocations = () => {
        this.setState({showLocation: !this.state.showLocation})
    };

    renderLocationOptions = () => {
        if (this.state.resp && this.state.resp.length > 0) {
            let resArr = Object.keys(this.state.resp);
            return resArr.map(resArr => {
                return (<TouchableOpacity
                    style={styles.locationListTouch}
                    onPress={() => {
                        this.setState({
                            selectedLocation: this.state.resp[resArr].english_name,
                            showLocation: !this.state.showLocation
                        })
                    }}>
                    <Text style={styles.locationListItem}>{this.state.resp[resArr].english_name}</Text>
                </TouchableOpacity>)
            })
        }
    };

    getList = async () => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_emirates', {
            access_token: this.props.token
        })
            .then(response => {
                console.log(response)
                resp = response.data.emirates;
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp);
        resp !== undefined && this.setState({resp});
    }

    render() {
        return <View style={styles.container}>
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
                <View style={commonStyles.graySeparator}>
                    <View style={commonStyles.graySeparatorInner}/>
                </View>
                <View style={styles.selectLocationContainer}>
                    <TouchableOpacity onPress={() => {
                        this.renderLocations()
                    }} style={styles.selectLocationWrap}>
                        <Text
                            style={styles.selectLocationText}>{this.state.selectedLocation === '' ? 'Select Location' : this.state.selectedLocation}</Text>
                        <SvgUri source={require('../assets/icons/down-chevron.svg')} style={styles.chevronDown}/>
                    </TouchableOpacity>
                    {this.state.showLocation &&
                    <View style={styles.locationListContainer}>
                        <ScrollView style={styles.locationList}>
                            <View style={styles.locationListWrap}>
                                {this.renderLocationOptions()}
                            </View>
                        </ScrollView>
                    </View>}
                    <View style={commonStyles.graySeparatorVertical}>
                        <View style={commonStyles.graySeparatorVerInner}/>
                    </View>
                    <View style={[styles.nearMeWrap, commonStyles.center]}>
                        <SvgUri source={require('../assets/icons/near-me.svg')} styles={styles.nearMeIcon}/>
                        <Text style={styles.nearMeText}>
                            Near me
                        </Text>
                    </View>
                </View>
            </View>
            {/*<View style={commonStyles.orangeBtnShadow}>*/}
            {/*<View style={commonStyles.orangeBtn}>*/}
            {/*<LinearGradient start={{x: 0, y: 0.75}}*/}
            {/*end={{x: 1, y: 1}} colors={['#ddd', '#ddd']}>*/}
            {/*<TouchableOpacity onPress={this._handleLogin} style={commonStyles.orangeBtnInner}>*/}
            {/*<Text style={commonStyles.orangeBtnText}>Login</Text>*/}
            {/*</TouchableOpacity>*/}
            {/*</LinearGradient>*/}
            {/*</View>*/}
            {/*</View>*/}
        </View>
    }
};
const mapDispatchToProps = (dispatch) => ({
    change: (action, value) => {
        dispatch({type: action, payload: value})
    },
})
const mapStateToProps = (state, ownProps) => ({
    token: state.token,
    logged: state.logged
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
