import React from 'react'
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import axios from "axios/index"
import * as _ from 'lodash'
import styles from "../assets/styles/addCar";

class UpdateCar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.details.id,
            english_name: this.props.details.english_name,

            arabic_name: this.props.details.arabic_name,

            price_per_day: this.props.details.price_per_day,

            price_per_week: this.props.details.price_per_week,

            price_per_month: this.props.details.price_per_month,

            additional_mileage_charge: this.props.details.additional_mileage_charge,

            mileage_limit_daily: this.props.details.mileage_limit_daily,

            mileage_limit_monthly: this.props.details.mileage_limit_monthly,

            mileage_limit_weekly: this.props.details.mileage_limit_weekly,

            insurance_included: this.props.details.insurance_included,

            security_deposit: this.props.details.security_deposit,

            accept_in: this.props.details.accept_in,

            driver: this.props.details.driver,

            car_type_id: this.props.details.car_type_id,

            car_brand_id: this.props.details.car_brand_id,

            is_featured: this.props.details.is_featured,

            car_image: this.props.details.car_image,

            colours: this.props.details.colours,

            description: this.props.details.description,

            status: this.props.details.status,

            paymentMethods: [],

            insuranceTypes: [],

            acceptTypes: [],

            driverTypes: ["available", "unavailable"],

            isFeaturedTypes: ["yes", "no"],

            statusTypes: ['publish', 'unpublish', 'deleted'],
        }
    }

    renderPaymentOptions = (paymentMethods) => {
        return _.map(paymentMethods, item => {
            return <TouchableOpacity onPress={() => {
                this.setState({accept_in: item})
            }}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderInsuranceOptions = (insuranceTypes) => {
        return _.map(insuranceTypes, item => {
            return <TouchableOpacity onPress={() => {
                this.setState({insurance_included: item})
            }}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderFeaturedOptions = (featuredMethods) => {
        return _.map(featuredMethods, item => {
            return <TouchableOpacity onPress={() => {
                this.setState({is_featured: item})
            }}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderStatusOptions = (statusMethods) => {
        return _.map(statusMethods, item => {
            return <TouchableOpacity onPress={() => {
                this.setState({status: item})
            }}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderDriverOptions = (driverMethods) => {
        return _.map(driverMethods, item => {
            return <TouchableOpacity onPress={() => {
                this.setState({driver: item})
            }}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }

    componentDidMount() {
        this.getPayment();
        this.getInsuranceTypes()
    }

    getPayment = async () => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_payment_methods', {
            access_token: this.props.token
        })
            .then(response => {
                console.log(response)
                resp = response.data.payment_methods;
                this.setState({paymentMethods: resp})
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp);
        resp !== undefined && this.setState({paymentMethods: resp});
    }
    getInsuranceTypes = async () => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_insurance_types', {
            access_token: this.props.token
        })
            .then(response => {
                console.log(response)
                resp = response.data.insurance_types;
                this.setState({insuranceTypes: resp})
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp);
        resp !== undefined && this.setState({insuranceTypes: resp});
    }

    updateCar = async () => {
        const {
            id,

            english_name,

            arabic_name,

            price_per_day,

            price_per_week,

            price_per_month,

            additional_mileage_charge,

            mileage_limit_daily,

            mileage_limit_monthly,

            mileage_limit_weekly,

            insurance_included,

            security_deposit,

            accept_in,

            driver,

            car_type_id,

            car_brand_id,

            is_featured,

            car_image,

            colours,

            description,

            status,
        } = this.state
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/update_cars_details', {
            access_token: this.props.token,
            car_id: id,
            english_name,
            arabic_name,
            price_per_day,
            price_per_week,
            price_per_month,
            additional_mileage_charge,
            mileage_limit_daily,
            mileage_limit_monthly,
            mileage_limit_weekly,
            insurance_included,
            security_deposit,
            accept_in,
            driver,
            car_type_id,
            car_brand_id,
            is_featured,
            car_image,
            colours,
            description,
            status,

        })
            .then(response => {
                console.log(response, "car updated successfully")
                alert("car updated successfully")
            })
            .catch((error) => {
                console.log(error);
                alert("car update failed")
                this.setState({loader: false, error: true})

            });
        console.log(resp);
    }

    render() {
        return (<ScrollView style={{paddingTop: 12}}>
            <View style={styles.profileDescContainer}>
                <View style={styles.profileTitleInfo}>
                    <Text style={styles.profileTitleText}>Car Name Information</Text>
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*this.setState({editPI: !this.state.editPI})*/}
                    {/*}}><Text*/}
                    {/*style={styles.editBtn}>{!this.state.editPI ? 'EDIT' : 'Done'}</Text></TouchableOpacity>*/}
                </View>
                <View style={styles.profileInputGroup}>
                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>

                        <View style={styles.labelWrap}>
                            <Text style={styles.inputLabelText}>Car name (English)</Text>
                        </View>
                        <View style={[styles.textInputWrap]}>
                            <TextInput
                                placeholder="English Name" value={this.state.english_name}
                                onChangeText={english_name => {
                                    this.setState({english_name})
                                }} underlineColorAndroid={'transparent'}
                                style={styles.textInput}
                            />
                        </View>

                        <View style={styles.labelWrap}>
                            <Text style={styles.inputLabelText}>Car name (Arabic)</Text>
                        </View>
                        <View style={[styles.textInputWrap]}>
                            {/*<View style={styles.iconWrap}>*/}
                            {/*<SvgUri style={[styles.textInputIcon, {marginLeft: 2}]} width="14"*/}
                            {/*height="18"*/}
                            {/*source={require('../assets/icons/password.svg')}/>*/}
                            {/*</View>*/}
                            <TextInput
                                underlineColorAndroid="transparent"
                                style={styles.textInput}
                                placeholder="arabic_name" value={this.state.arabic_name}
                                onChangeText={arabic_name => {
                                    this.setState({arabic_name})
                                }}
                                secureTextEntry={false}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.profileDescContainer}>
                <View style={styles.profileTitleInfo}>
                    <Text style={styles.profileTitleText}>Pricing Information</Text>
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*this.setState({editPI: !this.state.editPI})*/}
                    {/*}}><Text*/}
                    {/*style={styles.editBtn}>{!this.state.editPI ? 'EDIT' : 'Done'}</Text></TouchableOpacity>*/}
                </View>
                <View style={styles.profileInputGroup}>
                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>

                        <View style={styles.labelWrap}>
                            <Text style={styles.inputLabelText}>Price per day</Text>
                        </View>
                        <View style={[styles.textInputWrap]}>
                            <TextInput
                                placeholder="price_per_day" value={this.state.price_per_day}
                                onChangeText={price_per_day => {
                                    this.setState({price_per_day})
                                }}
                                underlineColorAndroid="transparent"
                                style={styles.textInput}
                                secureTextEntry={false}
                            />
                        </View>

                        <View style={styles.labelWrap}>
                            <Text style={styles.inputLabelText}>Price per week</Text>
                        </View>
                        <View style={[styles.textInputWrap]}>

                            <TextInput
                                style={styles.textInput}
                                placeholder="price_per_week" value={this.state.price_per_week}
                                onChangeText={price_per_week => {
                                    this.setState({price_per_week})
                                }} underlineColorAndroid={'transparent'}
                                secureTextEntry={false}
                            />
                        </View>
                        <View style={styles.labelWrap}>
                            <Text style={styles.inputLabelText}>Price per month</Text>
                        </View>
                        <View style={[styles.textInputWrap]}>

                            <TextInput
                                placeholder="price_per_month" value={this.state.price_per_month}
                                onChangeText={price_per_month => {
                                    this.setState({price_per_month})
                                }} underlineColorAndroid={'transparent'}
                                style={styles.textInput}
                                secureTextEntry={false}
                            />
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.profileDescContainer}>
                <View style={styles.profileTitleInfo}>
                    <Text style={styles.profileTitleText}>Mileage Information</Text>
                    {/*<Text style={styles.editBtn}>EDIT</Text>*/}
                </View>
                <View style={styles.profileInputGroup}>
                    <View style={styles.labelWrap}>
                        <Text style={styles.inputLabelText}>Additional Mileage Charge</Text>
                    </View>
                    <View style={[styles.textInputWrap]}>

                        <TextInput
                            placeholder="additional_mileage_charge"
                            value={this.state.additional_mileage_charge}
                            onChangeText={additional_mileage_charge => {
                                this.setState({additional_mileage_charge})
                            }}
                            underlineColorAndroid="transparent"
                            style={styles.textInput}
                            secureTextEntry={false}
                        />
                    </View>
                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>

                        <View style={styles.labelWrap}>
                            <Text style={styles.inputLabelText}>Mileage limit (Daily)</Text>
                        </View>
                        <View style={[styles.textInputWrap]}>

                            <TextInput
                                placeholder="mileage_limit_daily" value={this.state.mileage_limit_daily}
                                onChangeText={mileage_limit_daily => {
                                    this.setState({mileage_limit_daily})
                                }}
                                underlineColorAndroid="transparent"
                                style={styles.textInput}
                                secureTextEntry
                            />
                        </View>
                        <View style={styles.labelWrap}>
                            <Text style={styles.inputLabelText}>Mileage limit (Monthly)</Text>
                        </View>
                        <View style={[styles.textInputWrap]}>

                            <TextInput
                                placeholder="mileage_limit_monthly" value={this.state.mileage_limit_monthly}
                                onChangeText={mileage_limit_monthly => {
                                    this.setState({mileage_limit_monthly})
                                }}
                                underlineColorAndroid="transparent"
                                style={styles.textInput}
                                secureTextEntry
                            />
                        </View>

                        <View style={styles.labelWrap}>
                            <Text style={styles.inputLabelText}>Mileage limit (Weekly)</Text>
                        </View>
                        <View style={[styles.textInputWrap]}>

                            <TextInput
                                placeholder="mileage_limit_weekly" value={this.state.mileage_limit_weekly}
                                onChangeText={mileage_limit_weekly => {
                                    this.setState({mileage_limit_weekly})
                                }}
                                underlineColorAndroid="transparent"
                                style={styles.textInput}
                                secureTextEntry
                            />
                        </View>
                    </View>
                </View>
            </View>

            <View style={[styles.profileDescContainer, {paddingBottom: 16}]}>

                <View style={styles.profileInputGroup}>
                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                        <View style={styles.labelWrap}>
                            <Text style={styles.inputLabelText}>Card Type</Text>
                        </View>
                        <View style={[styles.textInputWrap]}>
                            <TextInput
                                placeholder="car_type_id" value={this.state.car_type_id}
                                onChangeText={car_type_id => {
                                    this.setState({car_type_id})
                                }}
                                underlineColorAndroid="transparent"
                                style={styles.textInput}
                                secureTextEntry={false}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.profileInputGroup}>
                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                        <View style={styles.profileTitleInfo}>
                            <Text style={styles.profileTitleText}>Insurance Options</Text>
                            {/*<Text style={styles.editBtn}>EDIT</Text>*/}
                        </View>
                        {/*<Text>{this.state.accept_in}</Text>*/}
                        {/*{this.renderPaymentOptions(this.state.paymentMethods)}*/}

                        {/*<Text>{this.state.insurance_included}</Text>*/}
                        {this.renderInsuranceOptions(this.state.insuranceTypes)}
                        {/*<View style={[styles.textInputWrap]}>*/}
                        {/*<TextInput*/}
                        {/*placeholder="security_deposit" value={this.state.security_deposit}*/}
                        {/*onChangeText={security_deposit => {*/}
                        {/*this.setState({security_deposit})*/}
                        {/*}}*/}
                        {/*underlineColorAndroid="transparent"*/}
                        {/*style={styles.textInput}*/}
                        {/*/>*/}
                        {/*</View>*/}
                    </View>
                    <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                        <View style={styles.profileTitleInfo}>
                            <Text style={styles.profileTitleText}>Payment Method</Text>
                            {/*<Text style={styles.editBtn}>EDIT</Text>*/}
                        </View>
                        {/*<Text>{this.state.accept_in}</Text>*/}
                        {this.renderPaymentOptions(this.state.paymentMethods)}

                        {/*<View style={[styles.textInputWrap]}>*/}
                        {/*<TextInput*/}
                        {/*placeholder="security_deposit" value={this.state.security_deposit}*/}
                        {/*onChangeText={security_deposit => {*/}
                        {/*this.setState({security_deposit})*/}
                        {/*}}*/}
                        {/*underlineColorAndroid="transparent"*/}
                        {/*style={styles.textInput}*/}
                        {/*/>*/}
                        {/*</View>*/}
                    </View>
                </View>
                <View style={styles.profileInputGroup}>

                    <View style={styles.profileTitleInfo}>
                        <Text style={styles.profileTitleText}>Drivers</Text>
                    </View>

                    <View style={styles.labelWrap}>
                        <Text style={styles.inputLabelText}>Car name</Text>
                    </View>
                    <View style={[styles.textInputWrap]}>
                        {this.renderDriverOptions(this.state.driverTypes)}
                    </View>

                    <View style={styles.profileTitleInfo}>
                        <Text style={styles.profileTitleText}>Featured</Text>
                    </View>

                    <View style={styles.labelWrap}>
                        <Text style={styles.inputLabelText}>Car name</Text>
                    </View>
                    <View style={[styles.textInputWrap]}>
                        {this.renderFeaturedOptions(this.state.isFeaturedTypes)}
                    </View>

                    <View style={styles.profileTitleInfo}>
                        <Text style={styles.profileTitleText}>Status</Text>
                    </View>

                    <View style={styles.labelWrap}>
                        <Text style={styles.inputLabelText}>Car Status</Text>
                    </View>
                    <View style={[styles.textInputWrap]}>
                        {this.renderStatusOptions(this.state.statusTypes)}
                    </View>
                </View>
            </View>

            <View style={[styles.profileDescContainer, {paddingBottom: 16}]}>
                <View style={styles.profileTitleInfo}>
                    <Text style={styles.profileTitleText}>{'Extra Information'}</Text>

                    <TouchableOpacity onPress={() => {
                        this.setState({editOtherInfo: !this.state.editOtherInfo})
                    }}>
                        {/*<Text style={styles.editBtn}>{!this.state.editOtherInfo ? 'EDIT' : 'Done'}</Text>*/}
                    </TouchableOpacity>

                </View>
                <View style={styles.profileInputGroup}>
                    <View style={[styles.profileInputGroup, {width: '100%'}]}>
                        <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                            <View style={[styles.textInputWrap, {
                                borderRadius: 4,
                            }]}>
                                <TextInput
                                    placeholder="car_brand_id" value={this.state.car_brand_id}
                                    onChangeText={car_brand_id => {
                                        this.setState({car_brand_id})
                                    }}
                                    underlineColorAndroid="transparent"
                                    style={styles.textInput}
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
                                    placeholder="car_image" value={this.state.car_image}
                                    onChangeText={car_image => {
                                        this.setState({car_image})
                                    }}
                                    underlineColorAndroid="transparent"
                                    style={styles.textInput}
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
                                    placeholder="colours" value={this.state.colours} onChangeText={colours => {
                                    this.setState({colours})
                                }}
                                    underlineColorAndroid="transparent"
                                    style={styles.textInput}
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
                                    placeholder="description" value={this.state.description}
                                    onChangeText={description => {
                                        this.setState({description})
                                    }}
                                    underlineColorAndroid="transparent"
                                    style={styles.textInput}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.greyBorderBtnWrap, {backgroundColor: 'black', borderColor: 'black'}]}>
                        <TouchableOpacity style={styles.greyBorderBtn}
                                          onPress={() => {
                                              this.updateCar();
                                              // this.props.setModalVisible(false);
                                          }}>
                            <Text style={{color: 'white'}}>Update</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>)
    }
}

export default UpdateCar;