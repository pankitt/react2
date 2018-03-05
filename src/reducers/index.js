import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks';

export default combineReducers({
    routing: routeReducer,
    tracks,
    playlists,
    filterTracks
});