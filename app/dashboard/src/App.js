import React from 'react';
import logo from './logo.svg';
import categoryIMG from './images/category2.jpg';
import './App.css';
import Indicators from './components/Indicators';
import LineGraph from './components/LineGraph';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

/* axios.get('http://localhost:3030/api/products/1')
.then(res => {
  const productos = res.data;
  this.setState({ products: productos });
}) */

function App() {
  const images = {
    categoryLogo : './images/category.png',
  };



  return (
    <div className="App">
			<NavBar/>

      <section className="container">
      <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
          <Indicators
          img = {require(`${images.categoryLogo}`)} title="Cantidad de Productos de Categoría"
           />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
          <Indicators
          img = {categoryIMG} title="Cantidad de Productos de Categoría" />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
          <Indicators
          img = {logo} title="Cantidad de Productos de Categoría" />
          
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <LineGraph  />
          </div>
        </div>

     </div>
     </section>
  </div>
    
  );
}

export default App;