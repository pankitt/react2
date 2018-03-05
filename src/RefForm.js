import React, { Component } from 'react';

class RefForm extends Component {
    submit (event) {
        event.preventDefault();
        console.log('submit - ', this.testInput.value);
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="test" ref={(input) => this.testInput = input} />
                <button onClick={this.submit.bind(this)}>Submit</button>
            </form>
        );
    }
}
export default RefForm;