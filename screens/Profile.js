import React from 'react';
import {Text, StyleSheet, Platform, Image, View, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo';
import {TopNav} from "../components/TopNav";
import SvgUri from 'react-native-svg-uri';
import commonStyles from "../assets/styles/common";
import styles from "../assets/styles/profileScreen";
import axios from "axios/index";
import {connect} from 'react-redux';
import * as _ from 'lodash';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profileType: '',
            profileNameEnglish: '',
            email: '',
            profileNameArabic: '',
            phoneNumber: '',
            whatsappNumber: '',
            currentPassword: '',
            newPassword2: '',
            newPassword: '',
            arabicAddress: '',
            emiratesId: '',
            location: '',
            arabicPickupAddress: '',
            officeTimingsEnglish: '',
            englishAddress: '',
            englishPickupAddress: '',
            englishOfficeTimings: '',
            latitude: '',
            longitude: '',
            avatar: '',
            description: '',
            editPI: false,
            editPassword: false,
            editOtherInfo: false,
            emirates: [],
            locations: [],
            showLocations: false,
            showEmirates: false,
            selectedEmirate: 'Select an Option'
        }
    }

    static navigationOptions = {
        drawerLabel: () => 'Profile',
        drawerIcon: ({tintColor}) => (
            <SvgUri
                source={require('../assets/icons/nav-icon-profile.svg')}
            />
        ),
    }

    componentDidMount() {
        console.log(this.props)
        this.getDetails()

    }

    getDetails = () => {
        axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_personal_details', {
            access_token: this.props.token
        })
            .then(response => {
                console.log(response)
                const data = response.data.personal_details;
                this.setState({
                    profileNameEnglish: data.english_name,
                    email: data.email,
                    profileNameArabic: data.arabic_name,
                    phoneNumber: data.mobile_no,
                    whatsappNumber: data.whatsapp_number,
                    emiratesId: data.emirate_id,
                    location: data.location_id,
                    arabicAddress: data.arabic_address,
                    arabicPickupAddress: data.arabic_pickup_address,
                    officeTimingsEnglish: data.arabic_office_timings,
                    englishAddress: data.english_address,
                    englishPickupAddress: data.english_pickup_address,
                    englishOfficeTimings: data.english_office_timings,
                    latitude: data.latitude,
                    longitude: data.longitude,
                    avatar: data.avatar,
                    description: data.description


                }, () => {
                    this.getEmirates()
                    this.getLocations()
                })


            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
    }

    updateDetails = () => {
        axios.post('https://tripjhon.insightssoftwares.com//api/v1/update_personal_details', {
            access_token: this.props.token,
            english_name: this.state.profileNameEnglish,
            arabic_name: this.state.profileNameArabic,
            whatsapp_number: this.state.whatsappNumber,
            mobile_no: this.state.phoneNumber,
            emirate_id: this.state.emiratesId,
            location_id: this.state.location,
            english_address: this.state.englishAddress,
            arabic_address: this.state.arabicAddress,
            english_pickup_address: this.state.englishPickupAddress,
            arabic_pickup_address: this.state.arabicPickupAddress,
            english_office_timings: this.state.officeTimingsEnglish,
            arabic_office_timings: this.state.englishOfficeTimings,
            avatar: this.state.avatar,
            description: this.state.description,
        })
            .then(response => {
                console.log(response)
                this.getDetails()
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
    }
    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    getEmirates = () => {
        axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_emirates', {
            access_token: this.props.token
        })
            .then(response => {
                console.log(response)
                this.setState({
                    emirates: response.data.emirates,
                    emirateSelected: this.state.emiratesId ? response.data.emirates[this.state.emiratesId].english_name : "Select an emirate"
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
    }

    getLocations = () => {
        axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_locations', {
            access_token: this.props.token
        })
            .then(response => {
                console.log(response)
                let loc = response.data.locations.filter(loc => loc.id = this.state.location);
                this.setState({
                    locations: response.data.locations,
                    locationSelected: (loc && loc[0]) ? loc[0].english_name : "Select an location"
                }, () => {
                    console.log(loc[0].english_name)
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
    }
    renderEmirates = () => {
        let arr = Object.keys(this.state.emirates)
        return _.map(arr, emirate => <TouchableOpacity key={emirate} onPress={() => {
            this.setState({
                emirateSelected: this.state.emirates[emirate].english_name,
                emiratesId: this.state.emirates[emirate].id,
                showEmirates: false
            })
        }}>
            <View style={{zIndex: 99999, paddingVertical: 12, paddingLeft: 20, width: '100%'}}>
                <Text>
                    {this.state.emirates[emirate].english_name}
                </Text>
            </View>
        </TouchableOpacity>)
    }
    renderLocations = () => {
        return _.map(this.state.locations, loc => <TouchableOpacity key={loc.id} onPress={() => {
            this.setState({locationSelected: loc.english_name, location: loc.id, showLocations: false})
        }}>
            <View style={{zIndex: 99999, paddingVertical: 12, paddingLeft: 20, width: '100%'}}>
                <Text>
                    {loc.english_name}
                </Text>
            </View>
        </TouchableOpacity>)
    }

    render() {
        return (<View style={styles.container}>
                <TopNav title={""} openDrawer={this.openDrawer} style={{zIndex: 9999999, elevation: 4}}/>
                <View style={styles.welcomeContainer}>
                    <View style={styles.profileInfoTop}>
                        <Image source={require('../assets/images/photo.jpg')} style={styles.profilePhoto}/>
                        <View style={styles.profileNameWrap}>
                            <Text style={styles.profileNameText}>{this.state.profileNameEnglish}</Text>
                            <Text style={styles.profileTypeText}>{this.state.profileType}</Text>
                        </View>
                    </View>
                    <View style={styles.topHelpContainer}>
                        <Text style={styles.regTopHelpTextTitle}>You're doing pretty good.</Text>
                        <Text style={styles.regTopHelpTextDesc} numberOfLines={1}>{this.state.description} </Text>
                    </View>
                </View>
                <View style={{flex: 6, zIndex: 9}}>
                    <ScrollView>
                        <View style={styles.profileDescContainer}>
                            <View style={styles.profileTitleInfo}>
                                <Text style={styles.profileTitleText}>Personal Information</Text>
                                <TouchableOpacity onPress={() => {
                                    this.setState({editPI: !this.state.editPI})
                                }}><Text
                                    style={styles.editBtn}>{!this.state.editPI ? 'EDIT' : 'Done'}</Text></TouchableOpacity>
                            </View>
                            <View style={styles.profileInputGroup}>
                                <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                    <View style={[styles.textInputWrap, {
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4
                                    }]}>
                                        {/*<View style={styles.iconWrap}>*/}
                                            {/*<SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"*/}
                                                    {/*height="18"*/}
                                                    {/*source={require('../assets/icons/password.svg')}/>*/}
                                        {/*</View>*/}
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={[styles.textInput, styles.textInputWithoutIcon]}
                                            value={this.state.type}
                                            editable={this.state.editPI}
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
                                        {/*<View style={styles.iconWrap}>*/}
                                            {/*<SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"*/}
                                                    {/*height="18"*/}
                                                    {/*source={require('../assets/icons/password.svg')}/>*/}
                                        {/*</View>*/}
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={[styles.textInput, styles.textInputWithoutIcon]}
                                            value={this.state.profileNameEnglish}
                                            placeholder="Full name"
                                            editable={this.state.editPI}
                                            onChangeText={name => this.setState({profileNameEnglish: name})}
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
                                        {/*<View style={styles.iconWrap}>*/}
                                            {/*<SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"*/}
                                                    {/*height="18"*/}
                                                    {/*source={require('../assets/icons/user.svg')}/>*/}
                                        {/*</View>*/}
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={[styles.textInput, styles.textInputWithoutIcon]}
                                            value={this.state.email}
                                            placeholder="Email Address"
                                            editable={this.state.editPI}
                                            onChangeText={name => this.setState({email: name})}
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
                                        {/*<View style={styles.iconWrap}>*/}
                                            {/*<SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"*/}
                                                    {/*height="18"*/}
                                                    {/*source={require('../assets/icons/password.svg')}/>*/}
                                        {/*</View>*/}
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={[styles.textInput, styles.textInputWithoutIcon]}
                                            value={this.state.profileNameArabic}
                                            placeholder="Arabic Name"
                                            editable={this.state.editPI}
                                            onChangeText={name => this.setState({profileNameArabic: name})}
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
                                        {/*<View style={styles.iconWrap}>*/}
                                            {/*<SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"*/}
                                                    {/*height="18"*/}
                                                    {/*source={require('../assets/icons/password.svg')}/>*/}
                                        {/*</View>*/}
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={[styles.textInput, styles.textInputWithoutIcon]}
                                            value={this.state.phoneNumber}
                                            placeholder="Phone Number"
                                            editable={this.state.editPI}
                                            onChangeText={name => this.setState({phoneNumber: name})}
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
                                        {/*<View style={styles.iconWrap}>*/}
                                            {/*<SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"*/}
                                                    {/*height="18"*/}
                                                    {/*source={require('../assets/icons/password.svg')}/>*/}
                                        {/*</View>*/}
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            style={[styles.textInput, styles.textInputWithoutIcon]}
                                            value={this.state.whatsappNumber}
                                            placeholder="Whatsapp Number"
                                            editable={this.state.editPI}
                                            onChangeText={name => this.setState({whatsappNumber: name})}
                                            secureTextEntry={false}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/*<View style={styles.profileDescContainer}>*/}
                        {/*<View style={styles.profileTitleInfo}>*/}
                        {/*<Text style={styles.profileTitleText}>Change Password</Text>*/}
                        {/*/!*<Text style={styles.editBtn}>EDIT</Text>*!/*/}
                        {/*</View>*/}
                        {/*<View style={styles.profileInputGroup}>*/}
                        {/*<View style={[styles.textInputContainer, styles.regTextInputContainer]}>*/}
                        {/*<View style={[styles.textInputWrap, {*/}
                        {/*borderTopLeftRadius: 4,*/}
                        {/*borderTopRightRadius: 4*/}
                        {/*}]}>*/}
                        {/*<View style={styles.iconWrap}>*/}
                        {/*<SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"*/}
                        {/*height="18"*/}
                        {/*source={require('../assets/icons/password.svg')}/>*/}
                        {/*</View>*/}
                        {/*<TextInput*/}
                        {/*underlineColorAndroid="transparent"*/}
                        {/*style={[styles.textInput, styles.textInputWithoutIcon]}*/}
                        {/*value={this.state.currentPassword}*/}
                        {/*placeholder="Current Password"*/}
                        {/*secureTextEntry*/}
                        {/*onChangeText={currentPassword => this.setState({currentPassword})}*/}
                        {/*/>*/}
                        {/*</View>*/}
                        {/*<View style={commonStyles.graySeparator}>*/}
                        {/*<View style={commonStyles.graySeparatorInner}></View>*/}
                        {/*</View>*/}
                        {/*<View style={[styles.textInputWrap, {*/}
                        {/*borderBottomLeftRadius: 4,*/}
                        {/*borderBottomRightRadius: 4*/}
                        {/*}]}>*/}
                        {/*<View style={styles.iconWrap}>*/}
                        {/*<SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"*/}
                        {/*height="18"*/}
                        {/*source={require('../assets/icons/password.svg')}/>*/}
                        {/*</View>*/}
                        {/*<TextInput*/}
                        {/*underlineColorAndroid="transparent"*/}
                        {/*style={[styles.textInput, styles.textInputWithoutIcon]}*/}
                        {/*value={this.state.newPassword}*/}
                        {/*placeholder="New Password"*/}
                        {/*secureTextEntry*/}
                        {/*onChangeText={newPassword => this.setState({newPassword})}*/}
                        {/*/>*/}
                        {/*</View>*/}
                        {/*<View style={commonStyles.graySeparator}>*/}
                        {/*<View style={commonStyles.graySeparatorInner}></View>*/}
                        {/*</View>*/}
                        {/*<View style={[styles.textInputWrap, {*/}
                        {/*borderBottomLeftRadius: 4,*/}
                        {/*borderBottomRightRadius: 4*/}
                        {/*}]}>*/}
                        {/*<View style={styles.iconWrap}>*/}
                        {/*<SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"*/}
                        {/*height="18"*/}
                        {/*source={require('../assets/icons/password.svg')}/>*/}
                        {/*</View>*/}
                        {/*<TextInput*/}
                        {/*underlineColorAndroid="transparent"*/}
                        {/*style={[styles.textInput, styles.textInputWithoutIcon]}*/}
                        {/*value={this.state.newPassword2}*/}
                        {/*placeholder="New Password"*/}
                        {/*onChangeText={newPassword2 => this.setState({newPassword2})}*/}
                        {/*secureTextEntry*/}
                        {/*/>*/}
                        {/*</View>*/}
                        {/*</View>*/}
                        {/*</View>*/}
                        {/*</View>*/}
                        <View style={[styles.profileDescContainer, {paddingBottom: 64}]}>
                            <View style={styles.profileTitleInfo}>
                                <Text style={styles.profileTitleText}>{'Other Information'}</Text>
                                <TouchableOpacity onPress={() => {
                                    this.setState({editOtherInfo: !this.state.editOtherInfo})
                                }}><Text
                                    style={styles.editBtn}>{!this.state.editOtherInfo ? 'EDIT' : 'Done'}</Text></TouchableOpacity>
                            </View>
                            <View style={[styles.profileInputGroup, {overflow: 'visible',}]}>
                                <View
                                    style={[styles.textInputContainer, styles.regTextInputContainer, {overflow: 'visible',}]}>
                                    <TouchableOpacity onPress={() => {
                                        this.setState({showEmirates: true})
                                    }} style={[styles.textInputWrap, {
                                        borderTopLeftRadius: 4,
                                        overflow: 'visible',
                                        borderTopRightRadius: 4
                                    }]}>
                                        <Text
                                            style={[styles.textInput, styles.textInputWithoutIcon]}
                                        >
                                            {this.state.emirateSelected}
                                        </Text>
                                    </TouchableOpacity>
                                    <View style={{
                                        position: 'absolute',
                                        top: 40,
                                        overflow: 'visible',
                                        left: 0,
                                        zIndex: 99999,
                                        backgroundColor: '#fff',
                                        width: '100%',
                                        elevation: 4,
                                        shadowColor: 'rgba(0,0,0,0.09)',
                                        shadowRadius: 4,
                                        shadowOffset: {width: 0, height: -2},
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4
                                    }}>
                                        {this.state.showEmirates && this.renderEmirates()}
                                    </View>
                                    <View style={commonStyles.graySeparator}>
                                        <View style={commonStyles.graySeparatorInner}></View>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        this.setState({showLocations: true})
                                    }} style={[styles.textInputWrap, {overflow: 'visible'},]}>

                                        <Text
                                            style={[styles.textInput, styles.textInputWithoutIcon]}
                                        >
                                            {this.state.locationSelected}
                                        </Text>
                                    </TouchableOpacity>
                                    <View style={{
                                        position: 'absolute',
                                        top: 80,
                                        overflow: 'visible',
                                        left: 0,
                                        zIndex: 99999,
                                        backgroundColor: '#fff',
                                        width: '100%',
                                        elevation: 4,
                                        shadowColor: 'rgba(0,0,0,0.09)',
                                        shadowRadius: 4,
                                        shadowOffset: {width: 0, height: -2},
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4
                                    }}>
                                        {this.state.showLocations && this.renderLocations()}
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
                                                onChangeText={arabicAddress => this.setState({arabicAddress})}
                                                editable={this.state.editOtherInfo}
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
                                                editable={this.state.editOtherInfo}
                                                underlineColorAndroid="transparent"
                                                style={styles.textArea}
                                                value={this.state.arabicPickupAddress}
                                                placeholder="Arabic Pickup Address"
                                                onChangeText={arabicPickupAddress => this.setState({arabicPickupAddress})}
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
                                                editable={this.state.editOtherInfo}
                                                underlineColorAndroid="transparent"
                                                style={styles.textArea}
                                                value={this.state.officeTimingsEnglish}
                                                placeholder="Office Timings (English)"
                                                onChangeText={officeTimingsEnglish => this.setState({officeTimingsEnglish})}
                                            />
                                        </View>
                                    </View>
                                </View>
                                {/*<View style={[styles.profileInputGroup, {width: '100%'}]}>*/}
                                {/*<View style={[styles.textInputContainer, styles.regTextInputContainer]}>*/}
                                {/*<View style={[styles.textInputWrap, {*/}
                                {/*borderRadius: 4*/}
                                {/*}]}>*/}

                                {/*<TextInput*/}
                                {/*editable={this.state.editOtherInfo}*/}
                                {/*underlineColorAndroid="transparent"*/}
                                {/*style={styles.textArea}*/}
                                {/*value={this.state.englishAddress}*/}
                                {/*placeholder="English Address"*/}
                                {/*onChangeText={englishAddress => this.setState({englishAddress})}*/}
                                {/*/>*/}
                                {/*</View>*/}
                                {/*</View>*/}
                                {/*</View>*/}
                                {/*<View style={[styles.profileInputGroup, {width: '100%'}]}>*/}
                                {/*<View style={[styles.textInputContainer, styles.regTextInputContainer]}>*/}
                                {/*<View style={[styles.textInputWrap, {*/}
                                {/*borderRadius: 4*/}
                                {/*}]}>*/}

                                {/*<TextInput*/}
                                {/*underlineColorAndroid="transparent"*/}
                                {/*style={styles.textArea}*/}
                                {/*value={this.state.englishPickupAddress}*/}
                                {/*editable={this.state.editOtherInfo}*/}
                                {/*placeholder="English Pickup Address"*/}
                                {/*onChangeText={englishPickupAddress => this.setState({englishPickupAddress})}*/}
                                {/*/>*/}
                                {/*</View>*/}
                                {/*</View>*/}
                                {/*</View>*/}
                                <View style={[styles.profileInputGroup, {width: '100%'}]}>
                                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                                        <View style={[styles.textInputWrap, {
                                            borderRadius: 4
                                        }]}>

                                            <TextInput
                                                underlineColorAndroid="transparent"
                                                style={styles.textArea}
                                                value={this.state.englishOfficeTimings}
                                                editable={this.state.editOtherInfo}
                                                placeholder="Office Timings (English)"
                                                onChangeText={englishOfficeTimings => this.setState({englishOfficeTimings})}
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
                                                editable={this.state.editOtherInfo}
                                                placeholder="Longitude"
                                                onChangeText={longitude => this.setState({longitude})}
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
                                                editable={this.state.editOtherInfo}
                                                placeholder="Latitude"
                                                onChangeText={latitude => this.setState({latitude})}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                {(this.state.editPI || this.state.editOtherInfo || this.state.editPassword) &&
                <View style={[styles.saveProfileButton, {position: 'absolute', bottom: 0, zIndex: 9999999}]}>
                    <TouchableOpacity style={styles.greyBorderBtn} onPress={() => {
                        this.updateDetails()
                    }}>
                        <Text style={styles.saveBtnText}>Save</Text>
                    </TouchableOpacity>

                </View>
                }
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    change: (action, value) => {
        dispatch({type: action, payload: value})
    },
})
const mapStateToProps = (state, ownProps) => ({
    token: state.token,
    logged: state.logged
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile)