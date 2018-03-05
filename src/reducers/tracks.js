const initialState = [
    {id: 1, name: 'Rock track'},
    {id: 2, name: 'Metall track'},
    {id: 3, name: 'Hard track'}
];

export default function playlist(state = initialState, action) {
    if(action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    }
    return state;
}