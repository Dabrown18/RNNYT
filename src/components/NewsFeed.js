import React, { Component, PropTypes } from 'react';
import { ListView, StyleSheet, View, Modal } from 'react-native';
import * as globalStyles from '../styles/global';

export default class NewsFeed extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.news),
      modalVisible: false
    };

    this.renderRow = this.renderRow.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  renderModal() {
    return (
      <Modal
        visible={this.state.modalVisible}
        onRequestClose={this.onModalClose}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={this.onModalClose}
            style={styles.closeButton}
          >
            <SmallText>Close</SmallText>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  onModalOpen() {
    this.setState({
      modalVisible: true
    });
  }

  onModalClose() {
    this.setState({
      modalVisible: false
    });
  }

  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return(
      <NewsItem
        onPress={() => this.onModalOpen()}
        style={styles.newsItem}
        index={index}
        {...rowData}
      />
    );
  }

  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={this.props.listStyles}
        />
        {this.renderModal()}
      </View>
    );
  }
}

NewsFeed.defaultProps = {
  news: [
    {
      title: 'React Native',
      imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
      description: 'Build Native Mobile Apps using Javascript and React',
      date: new Date(),
      author: 'Facebook',
      location: 'Menlo Park, California',
      url: 'https://facebook.github.io/react-native'
    },
    {
      title: 'Pact Publishing',
      imageUrl: 'https://www.packtpub.com/sites/default/files/packt_logo.png',
      description: 'Stay Relevant',
      date: new Date(),
      author: 'Pact Publishing',
      location: 'Birmingham, UK',
      url: 'https://www.packtpub.com'
    }
  ]
};

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20
  }
});
