// Import Actions
import { TEST_DENNIS, FETCH_EMOTIONS } from './LandingAction';

// Initial State
const initialState = {};

const LandingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_DENNIS:
      return state;
    case FETCH_EMOTIONS:
      if (action.payload.data) {
        return {
          webspaceEmotion: action.payload.data
        }
      }
      return state
    default:
      return state;
  }
};


// Export Reducer
export default LandingReducer;