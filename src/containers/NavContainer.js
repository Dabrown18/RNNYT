import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { push, pop } from '../actions/navigationActions';

import Nav from '../components/Nav';

const mapStateProps = state => ({
  navigation: state.navigation
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    push,
    pop
  }, dispatch)
);

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Nav);
