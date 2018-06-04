import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Provider, connect } from 'react-redux'
import store from './reducers'
import RootNavigation from './navigation/RootNavigation';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {/*{Platform.OS === 'ios' && <StatusBar barStyle="default" />}*/}
            <StatusBar hidden />
          <Provider store={store}>
                <RootNavigation />
            </Provider>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/welcomebg.png'),

      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'SSP-EL': require('./assets/fonts/SSP/SourceSansPro-ExtraLight.ttf'),
        'SSP-L': require('./assets/fonts/SSP/SourceSansPro-Light.ttf'),
        'SSP-R': require('./assets/fonts/SSP/SourceSansPro-Regular.ttf'),
        'SSP-SB': require('./assets/fonts/SSP/SourceSansPro-SemiBold.ttf'),
        'Lato-EL': require('./assets/fonts/Lato/Lato-Hairline.ttf'),
        'Lato-L': require('./assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-R': require('./assets/fonts/Lato/Lato-Regular.ttf'),
        'Lato-B': require('./assets/fonts/Lato/Lato-Bold.ttf'),
        'Lato-BI': require('./assets/fonts/Lato/Lato-BoldItalic.ttf'),
        'Lato-Black': require('./assets/fonts/Lato/Lato-Black.ttf'),
        'Lato-BlackI': require('./assets/fonts/Lato/Lato-BlackItalic.ttf')
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
