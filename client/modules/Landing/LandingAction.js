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
    const request = axios.get(`${BASE_URL}HappyFace`).then((json)=> {
        console.log("SUCCESS FROM FETCH_EMOTIONS", json);
    }).catch(() => {
        console.log("ERROR FROM FETCH_EMOTIONS");
    });

    return {
        type: FETCH_EMOTIONS,
        payload: request
    }
}
