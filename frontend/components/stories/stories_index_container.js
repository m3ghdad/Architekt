import StoriesIndex from './stories_index';
import { connect } from 'react-redux';
import { selectStories } from '../../reducers/selectors';
import { fetchStories } from '../../actions/story_actions';


const mapStateToProps = state => ({
  stories: selectStories(state),
  currentUser: state.session.currentUser,
});


const mapDispatchToProps = (dispatch) => ({
  fetchStories: () => dispatch(fetchStories())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesIndex);
