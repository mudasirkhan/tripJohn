import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ActivityIndicator
} from 'react-native';
import {LinearGradient} from 'expo';
import {connect} from 'react-redux'
import axios from 'axios'
import {MonoText} from '../components/StyledText'
import IntroSlider from "../components/introSlider";
import {DrawerApp} from "../navigation/DrawerApp"
import commonStyles from '../assets/styles/common.js'
import styles from '../assets/styles/homeScreen.js'
import SvgUri from 'react-native-svg-uri';
import WelcomeRegistration from "../components/welcomeRegistration";


class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)
        this.state = {
            logged: this.props.logged,
            newUser: false,
            email: '',
            number: '',
            name: '',
            mismatch: false,
            newPassword: '',
            confirmPassword: '',
            username: __DEV__?'farrukh@alemad.ae':'',
            password: __DEV__?'123456':'',
            loader: false,
            error: false,
        }
    }
    componentDidMount() {
        console.log(this.props.logged, this.state.logged)
    }

    componentWillReceiveProps(nextProps) {
        nextProps.logged && this.setState({logged: nextProps.logged})
    }

    render() {
        const {logged, newUser, mismatch, loader, error} = this.state;
        const loginbg = '../assets/images/loginbg.png';

        return (
            logged ?
                <DrawerApp />
                : newUser ?
                //Registration Stuff
                <View style={styles.container}>
                    <ScrollView style={styles.container} contentContainerStyle={styles.container}>
                        <View style={[styles.welcomeContainer, {flex: 1}]}>
                            <WelcomeRegistration/>
                        </View>
                        <View style={styles.registrationContainer}>
                            <View style={styles.registrationWrap}>
                                <View style={styles.regLinkWrap}>
                                    <Text style={styles.regLinkText}>Not registered yet?</Text>
                                    <TouchableOpacity onPress={this._handleRegister} style={styles.helpLink}>
                                        <Text style={styles.regLinkText}>Register Here.</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                    <View style={[styles.textInputWrap, {
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4
                                    }]}>
                                        <View style={styles.iconWrap}>
                                            <SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"
                                                    height="18"
                                                    source={require('../assets/icons/password.svg')}/>
                                        </View>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            value={this.state.type}
                                            onChangeText={type => this.setState({type})}
                                        />
                                    </View>
                                    <View style={commonStyles.graySeparator}>
                                        <View style={commonStyles.graySeparatorInner}></View>
                                    </View>
                                    <View style={[styles.textInputWrap, {
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4
                                    }]}>
                                        <View style={styles.iconWrap}>
                                            <SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"
                                                    height="18"
                                                    source={require('../assets/icons/password.svg')}/>
                                        </View>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            value={this.state.name}
                                            placeholder="Full name"
                                            onChangeText={name => this.setState({name})}
                                            secureTextEntry={false}
                                        />
                                    </View>
                                </View>
                                <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                    <View style={[styles.textInputWrap, {
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4
                                    }]}>
                                        <View style={styles.iconWrap}>
                                            <SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"
                                                    height="18"
                                                    source={require('../assets/icons/password.svg')}/>
                                        </View>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            value={this.state.email}
                                            placeholder="Email address"
                                            onChangeText={email => this.setState({email})}
                                        />
                                    </View>
                                    <View style={commonStyles.graySeparator}>
                                        <View style={commonStyles.graySeparatorInner}></View>
                                    </View>
                                    <View style={[styles.textInputWrap, {
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4
                                    }]}>
                                        <View style={styles.iconWrap}>
                                            <SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"
                                                    height="18"
                                                    source={require('../assets/icons/password.svg')}/>
                                        </View>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            value={this.state.number}
                                            placeholder="Phone Number"
                                            onChangeText={number => this.setState({number})}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={[styles.textInputContainer, styles.regTextInputContainer, {marginBottom: 0}]}>
                                    <View style={[styles.textInputWrap, {
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4
                                    }]}>
                                        <View style={styles.iconWrap}>
                                            <SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"
                                                    height="18"
                                                    source={require('../assets/icons/password.svg')}/>
                                        </View>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            value={this.state.newPassword}
                                            placeholder="Your password"
                                            onChangeText={newPassword => this.setState({newPassword})}
                                            secureTextEntry
                                        />
                                    </View>
                                    <View style={commonStyles.graySeparator}>
                                        <View style={commonStyles.graySeparatorInner}></View>
                                    </View>
                                    <View style={[styles.textInputWrap]}>
                                        <View style={styles.iconWrap}>
                                            <SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"
                                                    height="18"
                                                    source={require('../assets/icons/password.svg')}/>
                                        </View>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            placeholder="Password again"
                                            value={this.state.confirmPassword}
                                            onChangeText={confirmPassword => this.setState({confirmPassword})}
                                            secureTextEntry
                                        />
                                    </View>
                                </View>
                                {mismatch && <Text> password doesn't match</Text>}
                                <View style={styles.loginBtnShadow}>
                                    <View style={styles.loginBtn}>
                                        <LinearGradient start={{x: 0, y: 0.75}}
                                                        end={{x: 1, y: 1}} colors={['#F76B1C', '#FAD961']}>
                                            <TouchableOpacity onPress={this._handleRegisterSubmit}
                                                              style={styles.loginBtnInner}>
                                                <Text style={styles.loginBtnText}>Register</Text>
                                            </TouchableOpacity>
                                        </LinearGradient>
                                    </View>
                                </View>
                                <View style={styles.backBtn}>
                                    <TouchableOpacity onPress={this._handleRegister} style={styles.backBtnTouch}>
                                        <Text style={styles.backBtnText}>Go back</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.tabBarInfoContainer}>
                        <Text style={styles.tabBarInfoText}>Already a user?</Text>
                        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                            <TouchableOpacity onPress={this._handleRegister} style={styles.helpLink}>
                                <MonoText style={styles.codeHighlightText}>Click here to Login</MonoText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> :
                // login
                <View style={styles.container}>
                    <View style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <View style={styles.welcomeContainer}>
                            <IntroSlider/>
                        </View>
                        <View style={styles.loginContainer}>
                            <Image style={styles.loginbg} source={require(loginbg)}/>
                            <View style={styles.loginWrap}>
                                <View style={styles.regLinkWrap}>
                                    <Text style={styles.regLinkText}>Not registered yet?</Text>
                                    <TouchableOpacity onPress={this._handleRegister} style={styles.helpLink}>
                                        <Text style={styles.regLinkText}>Register Here.</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.textInputContainer}>
                                    <View style={[styles.textInputWrap, {
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4,
                                    }]}>
                                        <View style={styles.iconWrap}>
                                            <SvgUri style={styles.textInputIcon} width="16" height="18"
                                                    source={require('../assets/icons/user.svg')}/>
                                        </View>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={[styles.textInput]}
                                            value={this.state.username}
                                            onChangeText={username => this.setState({username})}
                                            placeholder="Your Username"
                                            placeholderTextColor="#9B9B9B"
                                        />
                                    </View>
                                    <View style={commonStyles.graySeparator}>
                                        <View style={commonStyles.graySeparatorInner}></View>
                                    </View>
                                    <View style={styles.textInputWrap}>
                                        <View style={styles.iconWrap}>
                                            <SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"
                                                    height="18" source={require('../assets/icons/password.svg')}/>
                                        </View>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            value={this.state.password}
                                            onChangeText={password => this.setState({password})}
                                            placeholder="........."
                                            placeholderTextColor="#9B9B9B"
                                            secureTextEntry
                                        />
                                    </View>
                                </View>
                                <View style={styles.loginBtnShadow}>
                                    <View style={styles.loginBtn}>
                                        <LinearGradient start={{x: 0, y: 0.75}}
                                                        end={{x: 1, y: 1}} colors={['#F76B1C', '#FAD961']}>
                                            <TouchableOpacity onPress={this._handleLogin} style={styles.loginBtnInner}>
                                                { loader ? <ActivityIndicator/>:
                                                <Text style={styles.loginBtnText}>Login</Text>}
                                            </TouchableOpacity>
                                        </LinearGradient>
                                        {error && <Text style={{textAlign: 'center', color: 'red'}}>Login failed</Text>}
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
        this.setState({loader: true})
        const loadDashboard = this._loadDashboard;
        axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_access_token', {
            email: this.state.username,
            password: this.state.password
        })
            .then( (response) => {
                console.log(response);
                loadDashboard();
            })
            .catch( (error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
    };


    _loadDashboard = () => {
        this.setState({logged: true, loader: false})
        this.props.change("LOGIN", true)
    };

    _handleRegister = () => {
        this.setState({newUser: !this.state.newUser})
    };
    _handleRegisterSubmit = () => {
        if (this.state.newPassword === this.state.confirmPassword) {
            this.setState({mismatch: false})
            // Make the call here
        }
        else {
            this.setState({mismatch: true})
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    change: (action,value) => { dispatch({ type: action, payload: value }) },
})
const mapStateToProps = (state, ownProps) => ({
    userInfo: state.user,
    logged: state.logged
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)