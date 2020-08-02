import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    let buttonClass = "Button";
    if (props.black) {
        buttonClass = buttonClass + " Button_active"
    }
    return (
        <a href="#">
        <div className={buttonClass}>
            {props.title}
        </div>
        </a>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
};
