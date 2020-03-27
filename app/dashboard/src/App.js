import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProdsQty from './components/ProdsQty';
import LineGraph from './components/LineGraph';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const images = {
    categoryLogo : './images/category.png',
  };
  return (
    <div className="App">
      <div class="navbar">
  <div class="navbar-inner">
    <a class="brand" href="#">Title</a>
    <ul class="nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
    </ul>
  </div>
</div>
			<NavBar/>

      <section class="container">
      <div class="row">
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
          <ProdsQty
          img = {require(`${images.categoryLogo}`)} title="Cantidad de Productos de Categoría" />
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
          <ProdsQty
          img = {logo} title="Cantidad de Productos de Categoría" />
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
          <ProdsQty
          img = {logo} title="Cantidad de Productos de Categoría" />
          
        </div>
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <LineGraph />
          </div>
        </div>

     </div>
     </section>
  </div>
    
  );
}

export default App;
