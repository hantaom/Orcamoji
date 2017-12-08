import {CHANNEL_SELECTED} from './EmojiActions';

const EmojiReducer = (state={}, action) => {
    switch(action.type) {
        case CHANNEL_SELECTED:
            return action.payload;
        default:
            return state;
    }
}

export default EmojiReducer;