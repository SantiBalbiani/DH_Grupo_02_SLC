import React from "react";
import axios from 'axios';
import './styles/indicator.css';

/* function getInfo(url, ...params){
  axios.get('http://localhost:3030/api/products/1')
  .then(res => {
    const data = res.data;
    
    //this.setState({ products: productos });
  })
} */

class Indicators extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            key: props.idx,
            img: props.img,
            title: props.title,
            idCategory: props.idCategory,
            products: [],
            handler: props.handler ,
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
      var handler  =  this.props.handler;
    return(
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
        <div className={"card"} style={{width: "18rem"}}>
          <img className="card-img-top" src={this.state.img}  width="100" height="50" alt="Card image cap" />
            <h5 className="card-title">{this.state.title}</h5>
            <div className="card-body">
            <p className="card-text">{ this.state.products.length }</p>
            <button type="button" className="btn btn-primary" onClick={ () => handler(this.state.idCategory, this.state.title)    }>Show Graphic</button>
          </div>
        </div>
        </div>
    ); 
}
}
export default Indicators;