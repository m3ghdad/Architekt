import StoriesIndex from './stories_index';
import { connect } from 'react-redux';
import { fetchStories } from '../../actions/story_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStories: () => {
      return dispatch(fetchStories());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesIndex);
