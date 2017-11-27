import { RECEIVE_STORIES, RECEIVE_SINGLE_STORY, REMOVE_STORY } from '../actions/story_actions';
import merge from 'lodash';

const storiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_SINGLE_STORY:
      nextState = Object.assign({}, state, action.story);
      return nextState;
    case RECEIVE_STORIES:
      return merge({}, state, action.stories);
    case REMOVE_STORY:
      nextState = merge({}, state);
      delete nextState[Object.keys(action.story.story)[0]];
      return nextState;
    default:
      return state
  }
};

export default storiesReducer;
