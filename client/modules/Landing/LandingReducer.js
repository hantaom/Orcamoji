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
        "workspace" : [
          { 
            "channel" : {
              "currentEmotion": {
                "anger": 0.1,
                "surprise": 0.2,
                "fear": 0.3,
                "sadness": 0.3,
                "joy" :0.1
              },
              "history": [
                  {
                    "anger": 0.1,
                    "surprise": 0.2,
                    "fear": 0.3,
                    "sadness": 0.3,
                    "joy" :0.1
                  }, 
                  {
                    "anger": 0.2,
                    "surprise": 0.1,
                    "fear": 0.1,
                    "sadness": 0.3,
                    "joy" :0.3
                  },
                  {
                    "anger": 0.4,
                    "surprise": 0.4,
                    "fear": 0.1,
                    "sadness": 0.1,
                    "joy" :0.0
                  }
              ],
              "predictive": [
                {
                  "anger": 0.1,
                  "surprise": 0.2,
                  "fear": 0.3,
                  "sadness": 0.3,
                  "joy" :0.1
                }, 
                {
                  "anger": 0.2,
                  "surprise": 0.1,
                  "fear": 0.1,
                  "sadness": 0.3,
                  "joy" :0.3
                },
                {
                  "anger": 0.4,
                  "surprise": 0.4,
                  "fear": 0.1,
                  "sadness": 0.1,
                  "joy" :0.0
                }
              ]
            }
          }
        ]
      };

    default:
      return {
        "workspace" : [
          { 
            "channel" : {
              "currentEmotion": {
                "anger": 0.1,
                "surprise": 0.2,
                "fear": 0.3,
                "sadness": 0.3,
                "joy" :0.1
              },
              "history": [
                  {
                    "anger": 0.1,
                    "surprise": 0.2,
                    "fear": 0.3,
                    "sadness": 0.3,
                    "joy" :0.1
                  }, 
                  {
                    "anger": 0.2,
                    "surprise": 0.1,
                    "fear": 0.1,
                    "sadness": 0.3,
                    "joy" :0.3
                  },
                  {
                    "anger": 0.4,
                    "surprise": 0.4,
                    "fear": 0.1,
                    "sadness": 0.1,
                    "joy" :0.0
                  }
              ],
              "predictive": [
                {
                  "anger": 0.1,
                  "surprise": 0.2,
                  "fear": 0.3,
                  "sadness": 0.3,
                  "joy" :0.1
                }, 
                {
                  "anger": 0.2,
                  "surprise": 0.1,
                  "fear": 0.1,
                  "sadness": 0.3,
                  "joy" :0.3
                },
                {
                  "anger": 0.4,
                  "surprise": 0.4,
                  "fear": 0.1,
                  "sadness": 0.1,
                  "joy" :0.0
                }
              ]
            }
          }
        ]
      };
  }
};

/* Selectors */

// Get showAddPost

// Export Reducer
export default LandingReducer;
