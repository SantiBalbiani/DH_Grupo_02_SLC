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
            idx: props.idx,
            img: props.img,
            title: props.title,
            idCategory: props.idCategory,
            products: [],
            onUpdateGraph: props.onUpdateGraph,
        }
    }


    componentDidMount() {

        axios.get(`http://localhost:3030/api/products/${this.state.idCategory}`)
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
            <button type="button" className="btn btn-primary" onClick={ () => this.state.onUpdateGraph(this.state.idCategory) }>Show Graphic</button>
          </div>
        </div>
    ); 
}
}
export default Indicators;