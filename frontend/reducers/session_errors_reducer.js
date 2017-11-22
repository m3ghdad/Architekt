import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import {merge} from 'lodash';

export default = (state =[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, {errors: action.errors});
    case RECEIVE_CURRENT_USER:
      return merge({}, {errors: null});
    default:
      return state;
  }
};
