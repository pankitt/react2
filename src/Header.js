import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        /*isLoading: PropTypes.bool,
        submit: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['news', 'photos']),
        user: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number
        }),
        users: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                age: PropTypes.number
            })
        )*/
    };

    render() {
        console.log('header links - ', this.props.items);

        return (
            <div>
                <h1>Header</h1>
                {this.props.items.map((item, index) =>
                    <Link to={item.link} key={index}>{item.label}</Link>
                )}
            </div>
        );
    }
}

export default Header;