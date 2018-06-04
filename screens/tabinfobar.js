                <View style={styles.tabBarInfoContainer}>
                    <Text style={styles.tabBarInfoText}>New User?</Text>
                    <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
                        <TouchableOpacity onPress={this._handleRegister} style={styles.helpLink}>
                            <MonoText style={styles.codeHighlightText}>Click here to register</MonoText>
                        </TouchableOpacity>

                    </View>
                </View>