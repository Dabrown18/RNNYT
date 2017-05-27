import React, { Component, PropTypes } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import NewsFeed from './NewsFeed';
import * as globalStyles from '../styles/global';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.searchNews = this.searchNews.bind(this);
  }

  searchNews(text) {
    this.setState({ searchText: text });
    this.props.searchNews(text);
  }

  render() {
    return (
      <View style={styles.searchPage}>
        <View style={globalStyles.COMMON_STYLES.pageContainer}>
          <View style={styles.search}>
            <TextInput
              style={styles.input}
              onChangeText={this.searchNews}
              value={this.state.searchText}
              placeholder={"Search for Hastags or Categories"}
              placeholderTextColor={globalStyles.MUTED_COLOR}
            />
          </View>
          <NewsFeed news={this.props.filteredNews} listStyles={{}} />
        </View>
      </View>
    );
  }
}

Search.propTypes = {
  filteredNews: PropTypes.arrayOf(PropTypes.object),
  searchNews: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  searchPage: {
    backgroundColor: '#fff',
    borderBottomColor: 'black',
  },
  input: {
    height: 35,
    color: globalStyles.TEXT_COLOR,
    paddingHorizontal: 5,
    flex: 1
  },
  search: {
    borderColor: globalStyles.MUTED_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5
  }
});
