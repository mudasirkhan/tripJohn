import React from 'react'
import {View, Text, TextInput, TouchableOpacity, ScrollView, Platform, Image, Alert, ActivityIndicator} from 'react-native'
import axios from "axios/index"
import * as _ from 'lodash'
import styles from "../assets/styles/addCar";
import {ImagePicker, Permissions} from "expo";

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

            carBrands: [],

            car_brand_name: "",

            carTypes: [],

            car_type_name: "",

            showInsuranceOptions: false,

            showPaymentMethods: false,

            showDriverMethods: false,

            showFeaturedMethods: false,

            showCarBrands: false,

            showCarTypes: false,

            showStatusMethods: false,

            avatar: 'https://tripjhon.insightssoftwares.com/storage/car_images/' + this.props.details.car_image,

            loading: false,
        }
    }

    renderPaymentOptions = (paymentMethods) => {
        return _.map(paymentMethods, item => {
            return <TouchableOpacity
                key={item}
                style={this.state.accept_in !== item ? styles.statusOptions : styles.selectedStatusOption}
                onPress={() => {
                    this.setState({accept_in: item, showPaymentMethods: false})
                }}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderInsuranceOptions = (insuranceTypes) => {
        return _.map(insuranceTypes, item => {
            return <TouchableOpacity
                key={item}
                style={this.state.insurance_included !== item ? styles.statusOptions : styles.selectedStatusOption}
                onPress={() => {
                    this.setState({insurance_included: item, showInsuranceOptions: false})
                }}>
                <Text style={styles.statusOptionsText}>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderFeaturedOptions = (featuredMethods) => {
        return _.map(featuredMethods, item => {
            return <TouchableOpacity
                key={item}
                style={this.state.is_featured !== item ? styles.statusOptions : styles.selectedStatusOption}
                onPress={() => {
                    this.setState({is_featured: item, showFeaturedMethods: false})
                }}>
                <Text style={styles.statusOptionsText}>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderStatusOptions = (statusMethods) => {
        return _.map(statusMethods, item => {
            return <TouchableOpacity
                key={item}
                style={this.state.status !== item ? styles.statusOptions : styles.selectedStatusOption}
                onPress={() => {
                    this.setState({
                        status: item, showStatusMethods: false
                    })
                }}>
                <Text style={styles.statusOptionsText}>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderDriverOptions = (driverMethods) => {
        return _.map(driverMethods, item => {
            return <TouchableOpacity
                key={item}
                style={this.state.driver !== item ? styles.statusOptions : styles.selectedStatusOption}
                onPress={() => {
                    this.setState({driver: item, showDriverMethods: false})
                }}>
                <Text style={styles.statusOptionsText}>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }

    componentDidMount() {
        this.getPayment();
        this.getInsuranceTypes();
        this.getBrands();
        this.getTypes();
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

    getBrands = async () => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_car_brands', {
            access_token: this.props.token
        })
            .then(response => {
                console.log(response)
                resp = response.data.car_brands;
                let name = resp.filter(item => item.id === this.state.car_brand_id)
                this.setState({
                    carBrands: resp,
                    car_brand_name: (name && name.length > 0) ? name[0].english_name : 'Select Car Brand'
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp);
    }

    renderCarBrands = (carBrands) => {
        return _.map(carBrands, item => {
            return <TouchableOpacity
                key={item.id}
                style={this.state.car_brand_id !== item.id ? styles.statusOptions : styles.selectedStatusOption}
                onPress={() => {
                    this.setState({
                        car_brand_id: item.id, car_brand_name: item.english_name, showCarBrands: false
                    })
                }}>
                <Text style={styles.statusOptionsText}>
                    {item.english_name}
                </Text>
            </TouchableOpacity>
        })
    }

    getTypes = async () => {
        let resp = {};
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/get_car_types', {
            access_token: this.props.token
        })
            .then(response => {
                console.log(response)
                resp = response.data.car_types;
                let name = resp.filter(item => item.id === this.state.car_type_id)
                this.setState({
                    carTypes: resp,
                    car_type_name: (name && name.length > 0) ? name[0].english_name : 'Select Car Type'
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp);
    }

    renderCarTypes = (carBrands) => {
        return _.map(carBrands, item => {
            return <TouchableOpacity
                key={item.id}
                style={this.state.car_type_id !== item.id ? styles.statusOptions : styles.selectedStatusOption}
                onPress={() => {
                    this.setState({
                        car_type_id: item.id, car_type_name: item.english_name, showCarTypes: false
                    })
                }}>
                <Text style={styles.statusOptionsText}>
                    {item.english_name}
                </Text>
            </TouchableOpacity>
        })
    }

    updateCar = async () => {
        this.setState({loading: true},async ()=>{
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
                console.log(response, id,
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
                    status,)
                Alert.alert(
                    'Update Car',
                    response.data.message,
                    [
                        {text: 'OK', onPress: () => response.data.status === 200 ? this.props.setModalVisible() : this.setState({loading: false})},
                    ],
                    { cancelable: false }
                )

            })
            .catch((error) => {
                console.log(error);
                alert(response.data.message);
                this.setState({loader: false, error: true})
            });
        console.log(resp);
        })
    }
    pickImage = async () => {
        console.log('coming');
        if (Platform.OS === 'ios') {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        }
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
                base64: true,
                quality: 0.4
            });
            console.log(result);

            if (!result.cancelled) {
                this.setState({avatar: result.uri, car_image: result.base64});
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (<View style={{flex: 1, zIndex: 99999, height: '100%', width: '100%'}}>
            <ScrollView>
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
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.profileDescContainer, {paddingBottom: 16}]}>
                    {/*<View style={styles.profileInputGroup}>*/}
                    {/*<View style={[styles.textInputContainer, styles.regTextInputContainer]}>*/}
                    {/*<View style={styles.labelWrap}>*/}
                    {/*<Text style={styles.inputLabelText}>Card Type</Text>*/}
                    {/*</View>*/}
                    {/*<View style={[styles.textInputWrap]}>*/}
                    {/*<TextInput*/}
                    {/*placeholder="car_type_id" value={this.state.car_type_id}*/}
                    {/*onChangeText={car_type_id => {*/}
                    {/*this.setState({car_type_id})*/}
                    {/*}}*/}
                    {/*underlineColorAndroid="transparent"*/}
                    {/*style={styles.textInput}*/}
                    {/*/>*/}
                    {/*</View>*/}
                    {/*</View>*/}
                    {/*</View>*/}
                    <View style={styles.profileInputGroup}>
                        <View style={[styles.textInputContainer, styles.regTextInputContainer]}>
                            <TouchableOpacity
                                style={[styles.profileTitleInfo, styles.fullWidth]}
                                onPress={() => {
                                    this.setState({showInsuranceOptions: true})
                                }}
                            >
                                <View style={styles.selectDropdown}>
                                    <Text style={[styles.selectDropdownText, {color: '#484848'}]}>Insurance Type:</Text>
                                    <Text style={styles.selectDropdownText}>{this.state.insurance_included}</Text>
                                </View>

                                {/*<Text style={styles.editBtn}>EDIT</Text>*/}
                            </TouchableOpacity>
                            {/*<Text>{this.state.accept_in}</Text>*/}
                            {/*{this.renderPaymentOptions(this.state.paymentMethods)}*/}

                            {/*<Text>{this.state.insurance_included}</Text>*/}
                            <View>
                                {this.state.showInsuranceOptions && this.renderInsuranceOptions(this.state.insuranceTypes)}
                            </View>
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
                            <TouchableOpacity style={[styles.profileTitleInfo, styles.fullWidth]}
                                              onPress={() => {
                                                  this.setState({showPaymentMethods: true})
                                              }}
                            >
                                <View style={styles.selectDropdown}>
                                    <Text style={[styles.selectDropdownText, {color: '#484848'}]}>Payment Method:</Text>
                                    <Text style={styles.selectDropdownText}>{this.state.accept_in}</Text>
                                </View>
                                {/*<Text style={styles.editBtn}>EDIT</Text>*/}
                            </TouchableOpacity>
                            {/*<Text>{this.state.accept_in}</Text>*/}
                            {this.state.showPaymentMethods && this.renderPaymentOptions(this.state.paymentMethods)}
                        </View>
                    </View>
                    <View style={styles.profileInputGroup}>

                        <TouchableOpacity style={[styles.profileTitleInfo, styles.fullWidth]}
                                          onPress={() => {
                                              this.setState({showDriverMethods: true})
                                          }}
                        >
                            <View style={styles.selectDropdown}>
                                <Text style={[styles.selectDropdownText, {color: '#484848'}]}>Drivers:</Text>
                                <Text style={styles.selectDropdownText}>{this.state.driver}</Text>
                            </View>

                        </TouchableOpacity>
                        <View style={[styles.textInputWrap]}>
                            {this.state.showDriverMethods && this.renderDriverOptions(this.state.driverTypes)}
                        </View>

                        <TouchableOpacity style={[styles.profileTitleInfo, styles.fullWidth]}
                                          onPress={() => {
                                              this.setState({showFeaturedMethods: true})
                                          }}
                        >
                            <View style={styles.selectDropdown}>
                                <Text style={[styles.selectDropdownText, {color: '#484848'}]}>Featured:</Text>
                                <Text style={styles.selectDropdownText}>{this.state.is_featured}</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={[styles.textInputWrap]}>
                            {this.state.showFeaturedMethods && this.renderFeaturedOptions(this.state.isFeaturedTypes)}
                        </View>

                        <TouchableOpacity style={[styles.profileTitleInfo, styles.fullWidth]}
                                          onPress={() => {
                                              this.setState({showCarBrands: true})
                                          }}
                        ><View style={styles.selectDropdown}>
                            <Text style={[styles.selectDropdownText, {color: '#484848'}]}>Car Brand:</Text>
                            <Text style={styles.selectDropdownText}>{this.state.car_brand_name}</Text>
                        </View>


                        </TouchableOpacity>
                        <View style={[styles.textInputWrap]}>
                            {this.state.showCarBrands && this.renderCarBrands(this.state.carBrands)}
                        </View>

                        <TouchableOpacity style={[styles.profileTitleInfo, styles.fullWidth]}
                                          onPress={() => {
                                              this.setState({showCarTypes: true})
                                          }}
                        >
                            <View style={styles.selectDropdown}>
                                <Text style={[styles.selectDropdownText, {color: '#484848'}]}>Car Type:</Text>
                                <Text style={styles.selectDropdownText}>{this.state.car_type_name}</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={[styles.textInputWrap]}>
                            {this.state.showCarTypes && this.renderCarTypes(this.state.carTypes)}
                        </View>

                        <TouchableOpacity style={[styles.profileTitleInfo, styles.fullWidth]}
                                          onPress={() => {
                                              this.setState({showStatusMethods: true})
                                          }}>
                            <View style={styles.selectDropdown}>
                                <Text style={[styles.selectDropdownText, {color: '#484848'}]}>Status:</Text>
                                <Text style={styles.selectDropdownText}>{this.state.status}</Text>
                            </View>

                        </TouchableOpacity>

                        <View style={[styles.textInputWrap]}>
                            {this.state.showStatusMethods && this.renderStatusOptions(this.state.statusTypes)}
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
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContents: 'space-between'
                                }]}>
                                    <TouchableOpacity
                                        style={{flex: 1}}
                                        onPress={() => {
                                            this.pickImage()
                                        }}>
                                        <Text style={[styles.textInput]}>Car Image</Text>
                                    </TouchableOpacity>
                                    <Image
                                        source={{uri: !this.state.avatar ? 'https://tripjhon.insightssoftwares.com/storage/car_images/' + this.state.car_image : this.state.avatar}}
                                        style={{height: 40, width: 40, borderRadius: 4, marginRight: 2}}/>
                                </View>
                            </View>
                        </View>
                        {/*<View style={[styles.profileInputGroup, {width: '100%'}]}>*/}
                        {/*<View style={[styles.textInputContainer, styles.regTextInputContainer]}>*/}
                        {/*<View style={[styles.textInputWrap, {*/}
                        {/*borderRadius: 4*/}
                        {/*}]}>*/}
                        {/*<TextInput*/}
                        {/*placeholder="Car Image" value={this.state.car_image}*/}
                        {/*onChangeText={car_image => {*/}
                        {/*this.setState({car_image})*/}
                        {/*}}*/}
                        {/*underlineColorAndroid="transparent"*/}
                        {/*style={styles.textInput}*/}
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
                                        placeholder="Colours" value={this.state.colours} onChangeText={colours => {
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
                                        placeholder="Description" value={this.state.description}
                                        onChangeText={description => {
                                            this.setState({description})
                                        }}
                                        multiline={true}
                                        underlineColorAndroid="transparent"
                                        style={[styles.textInput, {height: 144, paddingTop: 12}]}
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
                                {this.state.loading ?  <ActivityIndicator /> :
                                <Text style={{color: 'white'}}>Update</Text>}
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>)
    }
}

export default UpdateCar;