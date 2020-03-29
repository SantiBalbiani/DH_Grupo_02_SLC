import React from 'react';
import logo from './logo.svg';
import categoryIMG from './images/category2.jpg';
import './App.css';
import Indicators from './components/Indicators';
import LineGraph from './components/LineGraph';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import API from './config/API';
/* axios.get('http://localhost:3030/api/products/1')
.then(res => {
  const productos = res.data;
  this.setState({ products: productos });
}) */

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    const images = {
      categoryLogo : './images/category.png',
    };
  return (
      <React.Fragment>
			<NavBar/>
     
      
      <section className="container">
      <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
          <Indicators
          img = {require(`${images.categoryLogo}`)} title= {`Cantidad de Productos de Categoría ` }
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
              <LineGraph  param = '1' />
          </div>
        </div>

     </div>
     </section>
     </React.Fragment>
    
  )
}
async componentDidMount(){
  let userData = await API.get('products/allCategories');

      // Parse the results for ease of use.
  userData = userData.data;
  console.log(userData);
  // Update state with new data and re-render our component.
/*   const name = `${userData.name.first} ${userData.name.last}`;
  const avatar = userData.picture.large;
  const email = userData.email;

  this.setState({
    ...this.state, ...{
      isLoading: false,
      name,
      avatar,
      email
    }
  }); */
}

}
export default App;