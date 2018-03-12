import React from 'react';
import { connect } from 'react-redux';

const Track = ({ track }) => <h3>{ track.name }</h3>;
const mapStateToProps = (state, ownProps) => {
    return {
        track: state.tracks.find(track => track.id === Number(ownProps.match.params.id))
    }
};

export default connect(mapStateToProps)(Track);

