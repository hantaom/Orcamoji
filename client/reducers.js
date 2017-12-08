/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import landing from './modules/Landing/LandingReducer';
import emoji from './modules/EmojiDetail/EmojiReducer';
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  landing,
  emoji
});
