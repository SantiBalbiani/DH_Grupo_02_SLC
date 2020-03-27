import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProdsQty from './components/ProdsQty';
import LineGraph from './components/LineGraph';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
     
			<NavBar>
				<p>Esto es un párrafo</p>
				<hr/>
				<img alt="un jean" src="https://unspun.s3.amazonaws.com/2019/12/jean-1022x1080.png" width="100" />
        </NavBar>
     <LineGraph />
      <ProdsQty
      nro = '2' />
    </div>
  );
}

export default App;
