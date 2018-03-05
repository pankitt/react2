const initialState = [
    'rock',
    'rap',
    'popsa'
];

export default function playlist(state = initialState, action) {
    if(action.type === 'ADD_PLAYLIST') {
        return state;
    } else if (action.type === 'ADD_PLAYLIST') {
        return state;
    }
    return state;
}