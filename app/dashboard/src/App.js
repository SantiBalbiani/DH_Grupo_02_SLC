import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProdsQty from './components/ProdsQty';
import LineGraph from './components/LineGraph';
import NavBar from './components/NavBar';

function App() {
  const images = {
    categoryLogo : './images/category.png',
  };
  return (
    <div className="App">
        
			<NavBar>
				<p>Esto es un párrafo</p>
				<hr/>
				<img alt="un jean" src="https://unspun.s3.amazonaws.com/2019/12/jean-1022x1080.png" width="100" />
        </NavBar>
        <div class="col-xl-6 col-lg-6 mb-4">
        <ProdsQty
      img = {require(`${images.categoryLogo}`)} title="Cantidad de Productos de Categoría" />
      </div>
      <ProdsQty
      img = {logo} title="Cantidad de Productos de Categoría" />
      <ProdsQty
      img = {logo} title="Cantidad de Productos de Categoría" />
     <LineGraph />
      
    </div>
    
  );
}

export default App;
