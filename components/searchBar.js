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
            showLocation : false,
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
        this.getList();
        this.getCars();
        console.log(this.props.token)
    }

    renderLocations = () => {
        this.setState({showLocation: !this.state.showLocation})
    };

    renderLocationOptions = () => {
        let resArr = Object.keys(this.state.resp);
        return resArr.map( resArr => { return(<TouchableOpacity onPress={()=> {this.setState({selectedLocation: this.state.resp[resArr].english_name, showLocation: !this.state.showLocation})}}>
            <Text>{this.state.resp[resArr].english_name}</Text>
        </TouchableOpacity>)})
    };
    renderCars = () => {
        let resArr = Object.keys(this.state.cars);
        return resArr.map( resArr => { return(<TouchableOpacity key={resArr} style={{borderColor: 'red', borderWidth: 1}} onPress={()=> {this.setState({selectedLocation: this.state.resp[resArr].english_name, showLocation: !this.state.showLocation})}}>
            <Text>{this.state.cars[resArr].english_name}</Text>
            <Text>{this.state.cars[resArr].price_per_month}</Text>
            <Text>{this.state.cars[resArr].price_per_week}</Text>
            <Text>{this.state.cars[resArr].description}</Text>
            <Text>{this.state.cars[resArr].security_deposit}</Text>
            <Image source={{uri:'https://tripjhon.insightssoftwares.com//api/v1/' + this.state.cars[resArr].car_image}} style={{height: 140, width: 140}}/>

        </TouchableOpacity>)})
    };

    getList = async () => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_emirates', {
            access_token: this.props.token
        })
            .then( response => {
                resp = response.data.emirates;
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp);
         this.setState({resp});
    }

    getCars = async () => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_cars', {
            access_token: this.props.token
        })
            .then( response => {
                resp = response.data.cars;
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp);
        this.setState({cars: resp});
    }

    render() { return <View style={styles.container}>
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
                        <TouchableOpacity onPress={()=>{this.renderLocations()}} style={styles.selectLocationWrap}>
                            <Text>{this.state.selectedLocation === '' ? 'Select Location V' : this.state.selectedLocation}</Text>
                        </TouchableOpacity>
                        {this.state.showLocation &&
                        <ScrollView style={{flex:1}}>
                            <View style={{position: 'absolute', left: 0, right: 0, width: '80%', alignItems: 'center', backgroundColor: 'white'}}>
                                {this.renderLocationOptions()}
                            </View>
                        </ScrollView>}
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
                    <TouchableOpacity onPress={this._handleLogin} style={commonStyles.orangeBtnInner} >
                        <Text style={commonStyles.orangeBtnText}>Login</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/*{error && <Text style={{textAlign: 'center', color: 'red'}}>Login failed</Text>}*/}
            </View>
        </View>
        <View>
            <ScrollView style={{width: '100%', height: 400, zIndex: 99999}}>
            {this.renderCars()}
            </ScrollView>
        </View>
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
