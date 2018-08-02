import React from 'react';
import {Text, View, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native'
import {TopNav} from "../components/TopNav";
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import HomeTopSection from '../components/homeTopSection'
import CarsList from '../components/carsList'
import LeadsList from '../screens/Leads'
import SvgUri from 'react-native-svg-uri';
import styles from "../assets/styles/dashboard";
import commonStyles from "../assets/styles/common";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            showLocation: false,
            resp: {},
            selectedLocation: '',
            cars: []
        }
    }

    static navigationOptions = {
        drawerLabel: () => 'Home',
        drawerIcon: ({tintColor}) => (
            <SvgUri
                source={require('../assets/icons/nav-icon-home.svg')}
            />
        ),
    }

    componentDidMount() {
        console.log(this.props)
    }

    componentDidCatch(err) {
        console.log(err)
    }

    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    render() {
        return (<View style={{flex: 1, position: 'relative'}}>
            <TopNav title={"Home"} openDrawer={this.openDrawer}/>
            {/*<HomeTopSection/>*/}


            <View style={styles.topContainer}>
                <View style={styles.topInfo}>
                    <TouchableOpacity
                        style={styles.changePlanBtn}
                        onPress={() => {
                        this.updateDetails()
                    }}>
                        <Text style={styles.changePlanBtnText}>CHANGE PLAN</Text>
                    </TouchableOpacity>
                    <View style={styles.planNameWrap}>
                        <Text style={styles.planName}>GOLD PLAN</Text>
                    </View>
                    <View style={commonStyles.graySeparator}>
                        <View style={commonStyles.graySeparatorInner}/>
                    </View>
                    <View style={styles.planDetailsWrap}>
                        <View styles={styles.planDetailsItem}>
                            <View style={styles.planDetailsTextWrap}>
                                <Text style={styles.planDetailsText}>Total cars you can add</Text>
                            </View>
                            <View style={styles.numberBadge}>
                                <Text style={styles.numberBadgeText}>
                                    8
                                </Text>
                            </View>
                        </View>
                        <View styles={styles.planDetailsItem}>
                            <View style={styles.planDetailsTextWrap}>
                                <Text style={styles.planDetailsText}>Total cars you can remove</Text>
                            </View>
                            <View style={styles.numberBadge}>
                                <Text style={styles.numberBadgeText}>
                                    12
                                </Text>
                            </View>
                        </View>
                        <View styles={styles.planDetailsItem}>
                            <View style={styles.planDetailsTextWrap}>
                                <Text style={styles.planDetailsText}>Total cars you can ...</Text>
                            </View>
                            <View style={styles.numberBadge}>
                                <Text style={styles.numberBadgeText}>
                                    20
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.leadsListHeader}>
                    <Text style={styles.listHeaderTitle}>Your Leaderboard</Text>
                    <View style={styles.listSortBtn}>
                        <Text style={styles.listSortBtnText}>All Leads</Text>
                        <SvgUri source={require('../assets/icons/down-chevron.svg')} style={styles.chevronDown}/>
                    </View>
                    <View style={styles.sortListWrap}>
                        <View style={styles.sortListItem}>
                            <Text style={styles.sortListText}>
                                New leads
                            </Text>
                        </View>
                        <View style={styles.sortListItem}>
                            <Text style={styles.sortListText}>
                                Completed leads
                            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView
                    style={{alignSelf: 'center', paddingBottom: 16, flex: 1, zIndex: 9, width: '92%'}}
                    contentContainerStyle={{flex: 1}}>
                    <LeadsList navigation={this.props.navigation} style={{zIndex: 9}}/>

                    {/*<Image*/}
                    {/*source={require('../assets/images/ad.png')}*/}
                    {/*width="280"*/}

                    {/*/>*/}
                </ScrollView>
            </View>
        </View>)
    }
}