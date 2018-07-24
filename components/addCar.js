import React from 'react'
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import axios from "axios/index"
import * as _ from 'lodash'
class AddCar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            english_name: '',

            arabic_name: '',

            price_per_day: '',

            price_per_week: '',

            price_per_month: '',

            additional_mileage_charge: '',

            mileage_limit_daily: '',

            mileage_limit_monthly: '',

            mileage_limit_weekly: '',

            insurance_included: '',

            security_deposit: '',

            accept_in: '',

            driver: '',

            car_type_id: '',

            car_brand_id: '',

            is_featured: '',

            car_image: '',

            colours: '',

            description: '',

            status: "",

            paymentMethods: [],

            insuranceTypes: [],

            acceptTypes: [],

            driverTypes: ["available", "unavailable"],

            isFeaturedTypes: ["yes", "no"],

            statusTypes: ['publish', 'unpublish', 'deleted'],
        }
    }

    renderPaymentOptions = (paymentMethods) => {
        return _.map(paymentMethods, item=> {
            return <TouchableOpacity onPress={() => {this.setState({accept_in: item})}}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderInsuranceOptions = (insuranceTypes) => {
        return _.map(insuranceTypes, item=> {
            return <TouchableOpacity onPress={() => {this.setState({insurance_included: item})}}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderFeaturedOptions = (featuredMethods) => {
        return _.map(featuredMethods, item=> {
            return <TouchableOpacity onPress={() => {this.setState({is_featured: item})}}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderStatusOptions = (statusMethods) => {
        return _.map(statusMethods, item=> {
            return <TouchableOpacity onPress={() => {this.setState({status: item})}}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        })
    }
    renderDriverOptions = (driverMethods) => {
        return _.map(driverMethods, item=> {
            return <TouchableOpacity onPress={() => {this.setState({driver: item})}}>
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

    addCar = async () => {
        const {
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
        await axios.post('https://tripjhon.insightssoftwares.com//api/v1/add_car', {
            access_token: this.props.token,
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
                console.log(response, "car added successfully")
            })
            .catch((error) => {
                console.log(error);
                this.setState({loader: false, error: true})

            });
        console.log(resp);
    }
    render() {
        return(<ScrollView>
            <TextInput placeholder="english_name" value={this.state.english_name} onChangeText={english_name=>{this.setState({english_name})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="arabic_name" value={this.state.arabic_name} onChangeText={arabic_name=>{this.setState({arabic_name})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="price_per_day" value={this.state.price_per_day} onChangeText={price_per_day=>{this.setState({price_per_day})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="price_per_week" value={this.state.price_per_week} onChangeText={price_per_week=>{this.setState({price_per_week})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="price_per_month" value={this.state.price_per_month} onChangeText={price_per_month=>{this.setState({price_per_month})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="additional_mileage_charge" value={this.state.additional_mileage_charge} onChangeText={additional_mileage_charge=>{this.setState({additional_mileage_charge})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="mileage_limit_daily" value={this.state.mileage_limit_daily} onChangeText={mileage_limit_daily=>{this.setState({mileage_limit_daily})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="mileage_limit_monthly" value={this.state.mileage_limit_monthly} onChangeText={mileage_limit_monthly=>{this.setState({mileage_limit_monthly})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="mileage_limit_weekly" value={this.state.mileage_limit_weekly} onChangeText={mileage_limit_weekly=>{this.setState({mileage_limit_weekly})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <Text>Insurance Options</Text> <Text>{this.state.insurance_included}</Text>
            {this.renderInsuranceOptions(this.state.insuranceTypes)}
            <TextInput placeholder="security_deposit" value={this.state.security_deposit} onChangeText={security_deposit=>{this.setState({security_deposit})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <Text>Payment Options</Text> <Text>{this.state.accept_in}</Text>
            {this.renderPaymentOptions(this.state.paymentMethods)}
            <Text>Driver</Text> <Text>{this.state.driver}</Text>
            {this.renderDriverOptions(this.state.driverTypes)}
            <TextInput placeholder="car_type_id" value={this.state.car_type_id} onChangeText={car_type_id=>{this.setState({car_type_id})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="car_brand_id" value={this.state.car_brand_id} onChangeText={car_brand_id=>{this.setState({car_brand_id})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <Text>Featured</Text> <Text>{this.state.is_featured}</Text>
            {this.renderFeaturedOptions(this.state.isFeaturedTypes)}
            <TextInput placeholder="car_image" value={this.state.car_image} onChangeText={car_image=>{this.setState({car_image})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="colours" value={this.state.colours} onChangeText={colours=>{this.setState({colours})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <TextInput placeholder="description" value={this.state.description} onChangeText={description=>{this.setState({description})}} style={{width: '80%'}} underlineColorAndroid={'transparent'}/>
            <Text>Status</Text> <Text>{this.state.status}</Text>
            {this.renderStatusOptions(this.state.statusTypes)}
            <TouchableOpacity
                onPress={() => {
                    this.addCar();
                    // this.props.setModalVisible(false);
                }}>
                <Text>Update</Text>
            </TouchableOpacity>
        </ScrollView>)
    }
}
export default AddCar