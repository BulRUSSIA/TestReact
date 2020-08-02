import React from 'react';
import PropTypes from 'prop-types';

export default function Icon(props) {
    const { name, height, width } = props;
    return (
        <svg width={width} height={height}>
            <use xlinkHref={`#${name}`} />
        </svg>
    );
}

Icon.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};
