// Import Actions
import { TEST_DENNIS } from './LandingAction';

// Initial State
const initialState = {};

const LandingReducer = (state = initialState, action) => {
  console.log("LandingReducer reached");
  console.log("action", action);
  switch (action.type) {
    case TEST_DENNIS:
      return {
        currentEmotion: 0.9,
        history: [0.8, 0.1, 0.2234],
        predictive: [0.432, 0.234, 0.9],
      };

    default:
      return {
        currentEmotion: 0.9,
        history: [0.8, 0.1, 0.2234],
        predictive: [0.432, 0.234, 0.9],
      };
  }
};

/* Selectors */

// Get showAddPost

// Export Reducer
export default LandingReducer;
