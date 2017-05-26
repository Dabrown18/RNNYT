import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import NewsFeed from '../components/NewsFeed';
import { reshapeNewsData } from '../util/dataTransformations';
import { allNewsSelectors } from '../selectors/newsSelectors';

const mapStateToProps = state => ({
  news: allNewsSelectors(state)
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadNews
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps) (NewsFeed);
