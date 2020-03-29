import React from "react";
import axios from 'axios';
import './styles/indicator.css';

function getInfo(url, ...params){
  axios.get('http://localhost:3030/api/products/1')
  .then(res => {
    const data = res.data;
    
    //this.setState({ products: productos });
  })
}

class Indicators extends React.Component{

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
          <img className="card-img-top" src={this.state.img}  width="100" height="50" alt="Card image cap" />
            <h5 className="card-title">{this.state.title}</h5>
            
            <div className="card-body">
            <p className="card-text">{ this.state.products.length }</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    ); 
}
}
export default Indicators;