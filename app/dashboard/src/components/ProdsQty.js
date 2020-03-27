import React, { Component } from "react";
import axios from 'axios';

class ProdsQty extends React.Component{

    constructor(props){
        super(props);
        this.state = {
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
        <nav>
            <a href="/"> Hola, actualmente hay { this.state.products.length } productos para la categoria 1  </a>
        </nav>
    ); 
}
}
export default ProdsQty;