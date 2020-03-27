import React from "react";
import PropTypes from 'prop-types';

function NavbarItem (props) {
    return (
        <a className={`nav-link ${props.active ? 'active' : ''}`} href={props.url}>
            {props.text.toUpperCase()}
        </a>
    )
}

// la propiedad en el componente se llama "propTypes"
NavbarItem.propTypes = {
    url: PropTypes.string.isRequired, // la librería se llama "PropTypes"
    text: PropTypes.string,
}

NavbarItem.defaultProps = {
    text: 'Enlace',
    active: false
}

export default NavbarItem;