import React from "react";
import PropTypes from 'prop-types';

function NavbarItem (props) {
    return (
        <li className={`${props.active ? 'active' : ''}`} >
           <a href={props.url}> {props.text} </a>
        </li>
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