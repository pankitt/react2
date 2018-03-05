const mockApiData = [
    { id: 1, name: 'Rock track' },
    { id: 2, name: 'Metall track' },
    { id: 3, name: 'Hard track' },
    { id: 4, name: 'Popsa track' },
    { id: 5, name: 'Rap track' }
];

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('Tracks: ');
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
    }, 2000)
};