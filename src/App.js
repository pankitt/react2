import React, { Component } from 'react';
import { connect } from 'react-redux';
/*import logo from './logo.svg';*/
import './App.css';
import Dropdown from "./Dropdown";
import Header from "./Header";
import RegistrationForm from "./RegistrationForm";
import RefForm from "./RefForm";
import Counter from "./Counter";
import { getTracks } from './actions/tracks'
import { Route, Switch } from 'react-router-dom';
import About from "./About";

const menu = [
    {link: '/', label: 'Home'},
    {link: '/about', label: 'About'},
    {link: '/about', label: 'Contacts'},
    {link: '/about', label: 'Posts'}
];

class App extends Component {
    findTrack (e) {
        e.preventDefault();
        this.props.onFindTrack(this.searchInput.value);
    }
    addTrack (e) {
        e.preventDefault();
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }


    render() {
        return (
            <div className="container">
                <header>
                    <Header items={menu} />
                    <Switch>
                        <Route path="/about" component={About} />
                    </Switch>
                </header>
                <section>
                    <Dropdown />
                </section>
                <section>
                    <RegistrationForm />
                </section>

                <section>
                    <RefForm />
                </section>

                <section>
                    <Counter />
                </section>

                <section>
                    <form onSubmit={this.findTrack.bind(this)}>
                        <input type="text" ref={(input) => { this.searchInput = input }} />
                        <button>Find track</button>
                    </form>

                    <form onSubmit={this.addTrack.bind(this)}>
                        <input type="text" ref={(input) => { this.trackInput = input }} />
                        <button>Add track</button>
                    </form>
                    <div>
                        <button onClick={this.props.onGetTracks}>Get tracks</button>
                    </div>
                    <ul>
                        {this.props.tracks.map((track, index) =>
                            <li key={index}>{track.name}</li>
                        )}
                    </ul>
                </section>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.toLowerCase().includes(state.filterTracks.toLowerCase()))
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            };

            if (name.length > 0) {
                dispatch({ type: 'ADD_TRACK', payload: payload });
            } else console.error('Please enter track name');
        },
        onFindTrack: (name) => {
            dispatch({ type: 'FIND_TRACK', payload: name });
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);
