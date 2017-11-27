import * as APIUtil from '../util/story_api_util';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_SINGLE_STORY = 'RECEIVE_SINGLE_STORY';

export const REQUEST_DATA = "REQUEST_DATA";

export const requestData = () => ({
  type: REQUEST_DATA
});

export const fetchStories = () => (dispatch) => {
  dispatch(requestData());
  return APIUtil.fetchStories()
    .then(stories => dispatch(receiveStories(stories)));
};

export const fetchSingleStory = id => dispatch => {
  dispatch(requestData(id));
  return APIUtil.fetchSingleStory(id)
    .then(story => dispatch(receiveSingleStory(story)));
}

export const receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});

export const receiveSingleStory = story => ({
  type: RECEIVE_SINGLE_STORY,
  story
});
