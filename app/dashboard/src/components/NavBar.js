import React from "react";
import NavbarItem from './NavBarItem';
import './styles/navBar.css';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            props: props,
        }
    }
    render(){
    let enlaces = [
        {
            url: "/productos",
            text: "products",
        },
        {
            url: "/contactos",
            text: "Users",

        },
        {
            url: "http://localhost:3030/",
            text: "Go Back to SLC"
        },
    ]
    return (
        <React.Fragment>
            <nav className="nav">
                {
                    enlaces.map(function (unE, i) {
                        if (i === 0) {
                            return  <NavbarItem className="nav" key={i} url={unE.url} text={unE.text} active={true} />
                        }
                        return <NavbarItem className="nav" key={i} url={unE.url} text={unE.text} />
                    })
                }
            </nav>
            { this.state.children }
        </React.Fragment>
    )
}
}

export default Navbar;