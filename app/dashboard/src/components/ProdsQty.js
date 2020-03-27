import React, { Component } from "react";
import axios from 'axios';
import indBox from './styles/indicator.css';

class ProdsQty extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            img: props.img,
            title: props.title,
            idCategory: props.idCategory,
            products: [],
        }
    }

    componentDidMount() {

        axios.get('http://localhost:3030/api/products/1')
          .then(res => {
            const productos = res.data;
            this.setState({ products: productos });
          })
      }

    render(){
    return(
        <div className={"card"} style={{width: "18rem"}}>
            <h5 class="card-title">{this.state.title}</h5>
            <img class="card-img-top" src={this.state.img} alt="Card image cap" />
            <div class="card-body">
            <p class="card-text">Some quick { this.state.products.length }</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    ); 
}
}
export default ProdsQty;