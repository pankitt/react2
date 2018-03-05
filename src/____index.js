import { createStore } from 'redux';

function playlist(state = [], action) {
    if(action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.name
        ]
    }
    return state;
}
const store = createStore(playlist);

const addTrackBtn = document.querySelector('.addTrack');
const trackInput = document.querySelector('.trackInput');
const list = document.querySelector('.list');

store.subscribe(() =>  {
   list.innerHTML = '';
   trackInput.value = '';

   store.getState().forEach(track => {
       const li = document.createElement('li');
       li.textContent = track;
       list.appendChild(li);
   });
});

store.dispatch({ type: 'ADD_TRACK', name: 'Rock track'});
store.dispatch({ type: 'ADD_TRACK', name: 'Metall track'});
store.dispatch({ type: 'ADD_TRACK', name: 'Hard track'});

addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value;
    if (trackName.length > 0) {
        store.dispatch({ type: 'ADD_TRACK', name: trackName });
    } else console.error('Please enter track name');
});