import React from "react";
import NavbarItem from './NavBarItem';
import './styles/navBar.css';

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            updDashboard: props.updDashboard,
            test: props.test,
        };
    }
    render(){
    let enlaces = [
        {
            url: "/contactos",
            text: "Users",

        },
        {
            url: "/productos",
            text: "Product Sales",
        },
        
        {
            url: "/contactos",
            text: "Categories",

        },

    ]
    var updDashboard  =  this.props.updDashboard;
    return (
        <React.Fragment>
            <div className="vertical-menu">
            
            <a className="brand" href="#">Dashboard</a>
            
                {
                    enlaces.map(function (unE, i) {
                        /* if (i === 0) {
                            return  <NavbarItem className="nav" key={i} url={unE.url} text={unE.text} active={true} updDashboard={this.state.updDashboard.bind(this)} test={this.state.test} />
                        } */
                        return <NavbarItem className="nav" key={i} nro={i} url={unE.url} text={unE.text} updDashboard={updDashboard.bind(this)}  />
                    })
                }
                </div>
                
            { this.state.children }
        </React.Fragment>
    )
}
}

export default Navbar;