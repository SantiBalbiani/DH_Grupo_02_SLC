import React, { Component } from "react";

import indBox from './styles/indicator.css';

class Indicator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            image: props.image,
            title: props.title,
            idCategory: props.idCategory,
            quantity: props.quantity,
        }
    }

    render(){
    return(
        <div className={"card"} style={{width: "18rem"}}>
            <h5 className="card-title">{this.state.title}</h5>
            <img className="card-img-top" src={this.state.image} alt="Card image cap" />
            <div className="card-body">
            <p className="card-text"> la cant es: { this.state.quantity }</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    ); 
}
}
export default Indicator;