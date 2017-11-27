import * as APIUtil from '../util/story_api_util';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const REQUEST_DATA = "REQUEST_DATA";

export const requestData = () => ({
  type: REQUEST_DATA
}); 

export const fetchStories = () => (dispatch) => {
  dispatch(requestData());
  return APIUtil.fetchStories()
    .then(stories => dispatch(receiveStories(stories)));
}


export const receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});
