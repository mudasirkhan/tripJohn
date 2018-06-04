import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from 'react-native';
import { LinearGradient } from 'expo';
import {connect} from 'react-redux'
import axios from 'axios'
import { MonoText } from '../components/StyledText'
import IntroSlider from "../components/introSlider";
import commonStyles from '../assets/styles/common.js'
import styles from '../assets/styles/homeScreen.js'
import SvgUri from 'react-native-svg-uri';



class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props){
        super(props)
        this.state = {
          logged: false,
            username: '',
            password: ''
        }
    }
    componentWillReceiveProps(nextProps){
        nextProps.logged && this.setState({logged:nextProps.logged})
    }
    render() {
        const {logged} = this.state;
        const loginbg = '../assets/images/loginbg.png';

        return (
          logged?
                <View style={styles.container}>
                    <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <View style={styles.welcomeContainer}>
                            <MonoText> Logged in </MonoText>
                        </View>
                    </View>
                </View>
                :<View style={styles.container}>
                <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                            <IntroSlider/>
                    </View>
                    <View style={styles.loginContainer}>
                        <Image style={styles.loginbg} source={require(loginbg)} />
                        <View style={styles.loginWrap}>
                            <View style={styles.regLinkWrap}>
                                <Text style={styles.regLinkText}>Not registered yet?</Text>
                                <TouchableOpacity onPress={this._handleRegister} style={styles.helpLink}>
                                    <Text style={styles.regLinkText}>Register Here.</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.textInputContainer}>
                                <View style={[styles.textInputWrap, {borderTopLeftRadius: 4, borderTopRightRadius: 4,}]}>
                                    <View style={styles.iconWrap}>
                                        <SvgUri style={styles.textInputIcon} width="16" height="18" source={require('../assets/icons/user.svg')} />
                                    </View>
                                    <TextInput
                                            underlineColorAndroid="transparent"
                                            style={[styles.textInput]}
                                            value={this.state.username}
                                            onChangeText={username=>this.setState({username})}
                                            placeholder="Your Username"
                                            placeholderTextColor="#9B9B9B"
                                    />
                                </View>
                                <View style={commonStyles.graySeparator}>
                                    <View style={commonStyles.graySeparatorInner}></View>
                                </View>
                                <View style={styles.textInputWrap}>
                                    <View style={styles.iconWrap}>
                                        <SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14" height="18" source={require('../assets/icons/password.svg')} />
                                    </View>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            value={this.state.password}
                                            onChangeText={password=>this.setState({password})}
                                            placeholder="........."
                                            placeholderTextColor="#9B9B9B"
                                            secureTextEntry
                                        />
                                </View>
                            </View>
                            <View style={styles.loginBtnShadow}>

                                <View style={styles.loginBtn}>
                                    <LinearGradient start={{ x: 0, y: 0.75 }}
                                                    end={{ x: 1, y: 1 }} colors={['#F76B1C', '#FAD961']} >
                                        <TouchableOpacity onPress={this._handleLogin} style={styles.loginBtnInner}>
                                            <Text style={styles.loginBtnText}>Login</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.tnctext}>By logging in you accept our Terms & Conditions</Text>
                    </View>
                </View>
            </View>
        );
    }


    _handleLogin = () => {
        console.log('erds')
        axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_access_token', {
            email: this.state.username,
            password: this.state.password
        })
            .then(function (response) {
                console.log(response);
                //this.setState({logged: true})

            })
            .catch(function (error) {
                console.log(error);
            });
    };

    _handleRegister = () => {
       this.props.navigation.navigate('Registration')
    };
}


const mapStateToProps = (state, ownProps) => ({
    userInfo: state.user,
})

export default connect(mapStateToProps)(HomeScreen)