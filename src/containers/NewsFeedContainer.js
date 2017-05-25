import { container } from 'react-redux';
import { bindActionCreator } from 'redux';
import { loadNews } from '../actions/newsActions';
import NewsFeed from '../components/NewsFeed';

const mapStateToProps = state => ({
  news: state.news
});

const mapDispatchToProps = dispatch => (
  bindActionCreator({
    loadNews
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps) (NewsFeed);
