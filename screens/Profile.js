import React from 'react';
import {Text, StyleSheet, Platform, Image, View, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo';
import {TopNav} from "../components/TopNav";
import SvgUri from 'react-native-svg-uri';
import commonStyles from "../assets/styles/common";
import styles from "../assets/styles/profileScreen";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profileType: 'Individual',
            profileNameEnglish: 'Abdul Majid Zargar',
            email: 'maajidz@yahoo.com',
            profileNameArabic: 'Zain',
            phoneNumber: '+91 7006917548',
            whatsappNumber: '+91 7006917548'
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render() {
        return (<View style={styles.container}>
                {/*<TopNav title={"Home"} openDrawer={this.openDrawer}/>*/}
                <View style={styles.welcomeContainer}>
                    <LinearGradient colors={['#9F19A9', '#F20C46']}
                                    start={{x: 0, y: 0.25}}
                                    end={{x: 1, y: 1}}
                                    style={styles.welcomeGradient}/>
                    <Image source={require('../assets/images/sunwaves.png')} style={styles.sunwaves}/>
                    <Image style={styles.cloud} source={require('../assets/icons/cloud.png')}/>
                    {/*<SvgUri style={styles.cloud} width="40" height="14" source={require('../assets/icons/cloud.png')} />*/}
                    <SvgUri style={styles.dubaiskyline} width="400" height="200"
                            source={require('../assets/icons/dubaiskyline.svg')}/>
                    <View style={styles.blackTint}/>
                    <View style={styles.profileInfoTop}>
                        <Image source={require('../assets/images/photo.jpg')} style={styles.profilePhoto}/>
                        <View style={styles.profileNameWrap}>
                            <Text style={styles.profileNameText}>{this.state.profileNameEnglish}</Text>
                            <Text style={styles.profileTypeText}>{this.state.profileType}</Text>
                        </View>
                        {/*</View>*/}
                    </View>
                    <View style={styles.topHelpContainer}>
                        <Text style={styles.regTopHelpTextTitle}>You're doing pretty good.</Text>
                        <Text style={styles.regTopHelpTextDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing
                            sit amet.</Text>
                    </View>
                </View>
                <View style={{flex: 5, zIndex: 9}}>
                    <ScrollView>
                        <View style={styles.profileDescContainer}>
                            <View style={styles.profileTitleInfo}>
                                <Text style={styles.profileTitleText}>Personal Information</Text>
                                <Text style={styles.editBtn}>EDIT</Text>
                            </View>
                            <View style={styles.profileInputGroup}>
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
                                            placeholder="Account Type"
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
                                            value={this.state.profileNameEnglish}
                                            placeholder="Full name"
                                            onChangeText={name => this.setState({name})}
                                            secureTextEntry={false}
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
                                                    source={require('../assets/icons/user.svg')}/>
                                        </View>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            value={this.state.email}
                                            placeholder="Email Address"
                                            onChangeText={name => this.setState({name})}
                                            secureTextEntry={false}
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
                                            value={this.state.profileNameArabic}
                                            placeholder="Arabic Name"
                                            onChangeText={name => this.setState({name})}
                                            secureTextEntry={false}
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
                                            value={this.state.phoneNumber}
                                            placeholder="Phone Number"
                                            onChangeText={name => this.setState({name})}
                                            secureTextEntry={false}
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
                                            value={this.state.whatsappNumber}
                                            placeholder="Whatsapp Number"
                                            onChangeText={name => this.setState({name})}
                                            secureTextEntry={false}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.profileDescContainer}>
                            <View style={styles.profileTitleInfo}>
                                <Text style={styles.profileTitleText}>Change Password</Text>
                                {/*<Text style={styles.editBtn}>EDIT</Text>*/}
                            </View>
                            <View style={styles.profileInputGroup}>
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
                                            value={this.state.currentPassword}
                                            placeholder="Current Password"
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
                                            value={this.state.newPassword}
                                            placeholder="New Password"
                                            onChangeText={name => this.setState({name})}
                                            secureTextEntry={false}
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
                                            value={this.state.newPassword}
                                            placeholder="New Password"
                                            onChangeText={name => this.setState({name})}
                                            secureTextEntry={false}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.profileDescContainer, {paddingBottom: 16}]}>
                            <View style={styles.profileTitleInfo}>
                                <Text style={styles.profileTitleText}>Other Information</Text>
                                <Text style={styles.editBtn}>EDIT</Text>
                            </View>
                            <View style={styles.profileInputGroup}>
                                <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                    <View style={[styles.textInputWrap, {
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4
                                    }]}>

                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            value={this.state.emirates}
                                            placeholder="Emirates"
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
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={styles.textInput}
                                            value={this.state.location}
                                            placeholder="Location"
                                            onChangeText={name => this.setState({name})}
                                            secureTextEntry={false}
                                        />
                                    </View>
                                </View>
                                <View style={[styles.profileInputGroup, {width: '100%'}]}>
                                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                        <View style={[styles.textInputWrap, {
                                            borderRadius: 4,
                                        }]}>

                                            <TextInput
                                                numberOfLines={4}
                                                multiline={true}
                                                underlineColorAndroid="transparent"
                                                style={styles.textArea}
                                                value={this.state.arabicAddress}
                                                placeholder="Arabic Address"
                                                onChangeText={type => this.setState({type})}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.profileInputGroup, {width: '100%'}]}>
                                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                        <View style={[styles.textInputWrap, {
                                            borderRadius: 4
                                        }]}>

                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                style={styles.textArea}
                                                value={this.state.arabicPickupAddress}
                                                placeholder="Arabic Pickup Address"
                                                onChangeText={type => this.setState({type})}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.profileInputGroup, {width: '100%'}]}>
                                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                        <View style={[styles.textInputWrap, {
                                            borderRadius: 4
                                        }]}>

                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                style={styles.textArea}
                                                value={this.state.officeTimingsEnglish}
                                                placeholder="Office Timings (English)"
                                                onChangeText={type => this.setState({type})}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.profileInputGroup, {width: '100%'}]}>
                                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                        <View style={[styles.textInputWrap, {
                                            borderRadius: 4
                                        }]}>

                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                style={styles.textArea}
                                                value={this.state.englishAddress}
                                                placeholder="English Address"
                                                onChangeText={type => this.setState({type})}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.profileInputGroup, {width: '100%'}]}>
                                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                        <View style={[styles.textInputWrap, {
                                            borderRadius: 4
                                        }]}>

                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                style={styles.textArea}
                                                value={this.state.englishPickupAddress}
                                                placeholder="English Pickup Address"
                                                onChangeText={type => this.setState({type})}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.profileInputGroup, {width: '100%'}]}>
                                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                        <View style={[styles.textInputWrap, {
                                            borderRadius: 4
                                        }]}>

                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                style={styles.textArea}
                                                value={this.state.englishOfficeTimings}
                                                placeholder="Office Timings (English)"
                                                onChangeText={type => this.setState({type})}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.profileInputGroup, {width: '100%'}]}>
                                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                        <View style={[styles.textInputWrap, {
                                            borderRadius: 4
                                        }]}>

                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                style={[styles.textInput, {paddingHorizontal: 16}]}
                                                value={this.state.longitude}
                                                placeholder="Longitude"
                                                onChangeText={type => this.setState({type})}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.profileInputGroup, {width: '100%'}]}>
                                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                        <View style={[styles.textInputWrap, {
                                            borderRadius: 4
                                        }]}>

                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                style={[styles.textInput, {paddingHorizontal: 16}]}
                                                value={this.state.latitude}
                                                placeholder="Latitude"
                                                onChangeText={type => this.setState({type})}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.greyBorderBtnWrap}>
                                <TouchableOpacity style={styles.greyBorderBtn}>
                                    <Text>Save</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}