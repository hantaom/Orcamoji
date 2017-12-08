import axios from 'axios';

// Export Constants
export const TEST_DENNIS = 'TEST_DENNIS';
export const FETCH_EMOTIONS = "FETCH_EMOTIONS";
const BASE_URL = 'http://localhost:8000/';

// Export Actions
export function toggleAddPost() {
  return {
    type: TEST_DENNIS,
    payload: 0.9
  };
}

export function fetchEmotions() {
    const url = `${BASE_URL}HappyFace`;
    const request = axios.get(url);
    return {
        type: FETCH_EMOTIONS,
        payload: request
    }
}
