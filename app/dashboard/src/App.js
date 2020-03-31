import React, { useState } from 'react';
/* import logo from './logo.svg'; */
import categoryIMG from './images/category2.jpg';
import usersIMG from './images/usersIcon.png';
import salesIMG from './images/salesIcon.jpg';
import './App.css';
import Indicators from './components/Indicators';
import LineGraph from './components/LineGraph';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './config/API';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const icons = [categoryIMG, usersIMG, salesIMG, usersIMG ]
const icons2 = [
  './images/category2.jpg',
  './images/usersIcon.png',
  './images/salesIcon.jpg',
]
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.handler = this.handler.bind(this);
    this.updDashboard = this.updDashboard.bind(this);
    this.state = {
      data: [],
      id_graphic: 1,
      label: ' ',
      value: 4,
      img: 0,
      
    }
  }

  updIcon(imgidx){
    this.setState({img: imgidx,
    });
  }

  updDashboard(opt){
         this.updIcon(opt); 

        /*   this.setState({img: opt,
           }); */

        console.log(this.state.img);
  }

  handler(id, name){
    this.setState(
      { id_graphic: id,
      label: `New ${name} products`, }
    );
  }

  render(){
    
  return (
      <React.Fragment>
      <section className="container">
      <div className="row">
        <div className="col-3" >
            <NavBar updDashboard={this.updDashboard.bind(this)} test="1"/>
        </div>
        <div className="col-9">
        <div className="row">
            {this.state.data.map( (cat, idx) => 
             <Indicators key={idx} img={`${icons2[this.state.img]}`} title={cat.categoryName} idCategory={cat.id} handler={this.handler.bind(this)} />)}
        </div>
        <div className="row">
          <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
              <LineGraph key={Math.random()} param = {this.state.id_graphic} months = {this.state.value} label= {this.state.label} />
          </div>
          <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
           <div className="text"> Choose the Time Length [Months] </div>
           <RangeSlider value={this.state.value} min={1} max={12} step={1} onChange={ event => this.setState( { value: event.target.value })}  /> 
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