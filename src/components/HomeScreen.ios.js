import React, { Component, PropTypes } from 'react';
import { TabBarIOS, Text, Alert, Vibration, StatusBar } from 'react-native';
// import NewsFeed from './NewsFeed';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import Search from './Search';
import * as globalStyles from '../styles/global';

// Set the status bar for iOS to light
StatusBar.setBarStyle('default');

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'newsFeed'
    }
  }

  showBookmarkAlert() {
    Vibration.vibrate();
    Alert.alert(
      'Coming Soon',
      'We are hard at work on this feature, check back in the near future.',
      [
        { text: 'OK', onPress: () => console.log('User pressed OK') }
      ]
    );
  }

  render() {
    return (
      <TabBarIOS
        barTintColor={globalStyles.BAR_COLOR}
        tintColor={globalStyles.LINK_COLOR}
        translucent={false}
      >
        <TabBarIOS.Item
          badge={4}
          systemIcon={'featured'}
          selected={this.state.tab === 'newsFeed'}
          onPress={() => this.setState({ tab: 'newsFeed'})}
        >
          <NewsFeedContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'search'}
          selected={this.state.tab === 'search'}
          onPress={() => this.setState({ tab: 'search'})}
        >
          <Search />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'bookmarks'}
          selected={this.state.tab === 'bookmarks'}
          onPress={() => this.showBookmarkAlert()}
        >
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon={'contacts'}
          selected={this.state.tab === 'bookmarks'}
          onPress={() => this.showBookmarkAlert()}
        >
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
