renderCars = () => {
    if (this.state.cars.length > 0) {
        let resArr = Object.keys(this.state.cars);
        return resArr.map(resArr => {
            return (<TouchableOpacity key={resArr} style={{borderColor: 'red', borderWidth: 1}}
                                      style={styles.carListCard}
                                      onPress={() => {
                                          this.setState({
                                              selectedLocation: this.state.resp[resArr].english_name,
                                              showLocation: !this.state.showLocation
                                          })
                                      }}>
                    <View style={styles.oneHalfSection}>
                        <Image
                            // source={{uri: 'https://tripjhon.insightssoftwares.com//api/v1/' + this.state.cars[resArr].car_image}}
                            source={require('../assets/images/car.png')}
                            style={{height: 50, width: 120}}
                        />
                        <View style={styles.carProviderContainer}>
                            <Text style={styles.providedByText}>Provided by:</Text>
                            <View style={styles.carProviderWrap}>
                                <SvgUri source={require('../assets/icons/car-n-key.svg')} style={styles.carKey}/>
                                <Text style={styles.providerName}>Al Jumeirah Travels</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.oneHalfSection}>
                        <Text style={styles.carTitle}>{this.state.cars[resArr].english_name}</Text>
                        <View style={styles.carPriceWrap}>
                            <Text style={styles.carPriceMonth}>{this.state.cars[resArr].price_per_month}</Text>
                            <Text>{this.state.cars[resArr].price_per_week}</Text>
                            {/*{/<Text>{this.state.cars[resArr].description}</Text>/}*/}
                            {/*{/<Text>{this.state.cars[resArr].security_deposit}</Text>/}*/}
                        </View>
                        <View style={styles.carProviderContainer}>
                            <View style={styles.carProviderWrap}>
                                <SvgUri source={require('../assets/icons/pin.svg')} style={styles.pin}/>
                                <Text style={styles.providerName}>Jumeriah Lakes Towers</Text>
                                <Text>

                                </Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            )
        })
    }
};