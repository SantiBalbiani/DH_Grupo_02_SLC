import React from "react";
import PropTypes from 'prop-types';

function NavbarItem (props) {
    return (
       /*  <li className={`${props.active ? 'active' : ''}`} >
           <a href={props.url}> {props.text} </a>
        </li> */
        <div className="row">
                <div className="col-12 d-flex justify-content-center">
        <div className="botonesMenu">
        <button className="btn btn-primary custom" onClick={ () => props.updDashboard(props.nro)} >
             {props.text} 
        </button>
        </div>
        </div>
        </div>
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