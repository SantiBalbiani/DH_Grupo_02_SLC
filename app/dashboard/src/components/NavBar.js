import React from "react";
import NavbarItem from './NavBarItem';


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
            text: "Go Back to SLC",
        },
    ]
    return (
        <React.Fragment>
            <div className="navbar">
            <div class="navbar-inner">
            <a class="brand" href="#">Dashboard</a>
            <ul class="nav">
                {
                    enlaces.map(function (unE, i) {
                        if (i === 0) {
                            return  <NavbarItem className="nav" key={i} url={unE.url} text={unE.text} active={true} />
                        }
                        return <NavbarItem className="nav" key={i} url={unE.url} text={unE.text} />
                    })
                }
                </ul>
            </div>
            </div>
            { this.state.children }
        </React.Fragment>
    )
}
}

export default Navbar;