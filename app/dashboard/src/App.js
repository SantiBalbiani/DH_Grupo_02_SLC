import React, { useState } from 'react';
/* import logo from './logo.svg'; */
import categoryIMG from './images/category2.jpg';
import './App.css';
import Indicators from './components/Indicators';
import LineGraph from './components/LineGraph';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './config/API';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.handler = this.handler.bind(this);
    this.updGraph = this.updGraph.bind(this);
    
    this.state = {
      data: [],
      id_graphic: 1,
      label: ' ',
      value: 4,
    }
  }

  handler(id, name){
    this.setState(
      { id_graphic: id,
      label: `New ${name} products`, }
    );
  }

  updGraph(axis_x){
    this.setState(
      { timeLength: axis_x }
    );
  }

  render(){
   
  return (
      <React.Fragment>
      <section className="container">
      <div className="row">
        <div className="col-3" >
            <NavBar/>
        </div>
        <div className="col-9">
        <div className="row">
            {this.state.data.map( (cat, idx) => 
             <Indicators key={idx} img={categoryIMG} title={cat.categoryName} idCategory={cat.id} handler={this.handler.bind(this)} />)}
        </div>
        <div className="row">
          <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
              <LineGraph key={Math.random()} param = {this.state.id_graphic} months = {this.state.value} label= {this.state.label} />

          </div>
          <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
           <div className="text"> Choose the Time Length [Months] </div>
           <RangeSlider value={this.state.value} min="1" max="12" step="1" onChange={ event => this.setState( { value: event.target.value })}  /> 
          
          </div>
        </div>
          </div>
        </div>
     </section>
     </React.Fragment>
  )
}
async componentDidMount(){
  let allCategories = await API.get('products/allCategories');
  allCategories = allCategories.data;
  this.setState({
    data: allCategories,
  }); 

}




}
export default App;