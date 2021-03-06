import { NEWS_REQUEST_SUCCESS, NEWS_REQUEST_FAILURE } from './../actions';

const initialState = 0;
const LIMIT = 10;

export default function offset(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST_SUCCESS:
      return action.data ? state + Math.min(action.data.length, LIMIT) : state;
    case NEWS_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
