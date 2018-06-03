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
import {connect} from 'react-redux'
import axios from 'axios'
import { MonoText } from '../components/StyledText'
import IntroSlider from "../components/introSlider";

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props){
        super(props)
        this.state = {
            logged: false,
            newUser: false,
            email: '',
            number: '',
            name: '',
            newPassword: '',
            confirmPassword: '',
            username: '',
            password: ''
        }
    }
    componentWillReceiveProps(nextProps){
        nextProps.logged && this.setState({logged:nextProps.logged})
    }
    render() {
        const {logged, newUser} = this.state;
        return (
          logged?
              // Dashboard Stuff
              <View style={styles.container}>
                  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                      <View style={styles.welcomeContainer}>
                          <MonoText> Logged in </MonoText>
                      </View>
                  </ScrollView>
              </View>
              : newUser ?
              //Registration Stuff
              <View style={styles.container}>
                  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                      <View style={styles.welcomeContainer}>
                          <IntroSlider/>
                      </View>

                      <View style={styles.helpContainer}>
                          <TextInput
                              style={styles.registrationTextInput}
                              value={this.state.type}
                              onChangeText={type=>this.setState({type})}
                          />
                          <TextInput
                              style={styles.registrationTextInput}
                              value={this.state.name}
                              placeHolder={'Name'}
                              onChangeText={name=>this.setState({name})}
                          />
                          <TextInput
                              style={styles.registrationTextInput}
                              value={this.state.email}
                              onChangeText={email=>this.setState({email})}
                          />
                          <TextInput
                              style={styles.registrationTextInput}
                              value={this.state.number}
                              onChangeText={number=>this.setState({number})}
                          />
                          <TextInput
                              style={styles.registrationTextInput}
                              value={this.state.newPassword}
                              onChangeText={newPassword=>this.setState({newPassword})}
                          />
                          <TextInput
                              style={styles.registrationTextInput}
                              value={this.state.confirmPassword}
                              onChangeText={confirmPassword=>this.setState({confirmPassword})}
                              secureTextEntry
                          />

                          <TouchableOpacity onPress={this._handleRegisterSubmit} style={styles.helpLink}>
                              <Text style={styles.helpLinkText}>Register</Text>
                          </TouchableOpacity>
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
              </View>:
              // Login stuff
              <View style={styles.container}>
                  <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                      <View style={styles.welcomeContainer}>
                          <IntroSlider/>
                      </View>

                      <View style={styles.helpContainer}>
                          <TextInput
                              style={styles.textInput}
                              value={this.state.username}
                              onChangeText={username=>this.setState({username})}
                          />
                          <TextInput
                              style={styles.textInput}
                              value={this.state.password}
                              onChangeText={password=>this.setState({password})}
                              secureTextEntry
                          />

                          <TouchableOpacity onPress={this._handleLogin} style={styles.helpLink}>
                              <Text style={styles.helpLinkText}>Login</Text>
                          </TouchableOpacity>
                      </View>
                  </ScrollView>

                  <View style={styles.tabBarInfoContainer}>
                      <Text style={styles.tabBarInfoText}>New User?</Text>

                      <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                          <TouchableOpacity onPress={this._handleRegister} style={styles.helpLink}>
                              <MonoText style={styles.codeHighlightText}>Click here to register</MonoText>
                          </TouchableOpacity>

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
        this.setState({newUser: !this.state.newUser})
    };
    _handleRegisterSubmit = () => {
        if (this.state.newPassword !== this.state.confirmPassword) {

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 200,
        height: 280,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    textInput: {
        height: '20%',
        width: '75%',
        borderWidth: 1,
        borderColor: '#2e78b7',
        borderRadius:4
    },
    registrationTextInput: {
        height: '10%',
        width: '75%',
        borderWidth: 1,
        borderColor: '#2e78b7',
        borderRadius:4
    }
});
const mapStateToProps = (state, ownProps) => ({
    userInfo: state.user,
})

export default connect(mapStateToProps)(HomeScreen)