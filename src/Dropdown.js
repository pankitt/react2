import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }
    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }
    render() {
        console.log('Dropdown - ', this.state.isOpened);

        let dropdownText;
        if(this.state.isOpened) {
            dropdownText = <div>Show text...</div>
        }
        return (
            <div className='drop' onClick={this.toggleState.bind(this)}>
                Dropdown click
                {dropdownText}
            </div>
        );
    }
}

export default Dropdown;