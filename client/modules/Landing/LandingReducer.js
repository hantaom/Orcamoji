// Import Actions
import { TEST_DENNIS } from './LandingAction';

// Initial State
const initialState = {
  showAddPost: false,
};

const LandingActions = (state = initialState, action) => {
  switch (action.type) {
    case TEST_DENNIS:
      return {
        start: ["happy"],
        test: "hellooooooooooo"
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost

// Export Reducer
export default LandingActions;
