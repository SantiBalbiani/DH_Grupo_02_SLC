import React from 'react';
/* import logo from './logo.svg'; */
import categoryIMG from './images/category2.jpg';
import './App.css';
import Indicators from './components/Indicators';
import LineGraph from './components/LineGraph';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './config/API';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      categories: [],
      idCat_graphic: 1,
      label: 'new Arduino Products'
    }
  }

  handler(idCategory, name){
    this.setState(
      { idCat_graphic: idCategory,
      label: `New ${name} products`, }
    );
    

  /*   if (this.state.idCat_graphic !== idCategory){
      this.setState(
        { idCat_graphic: 1 }
      );
      console.log(this.state.idCat_graphic);
    } */
    
    
  }



  render(){
/*     const images = {
      categoryLogo : './images/category.png',
    }; */
  return (
      <React.Fragment>
			
      <section className="container">
       
      <div className="row">
        <div className="col-3" >
            <NavBar/>
        </div>
        <div className="col-9">

        <div className="row">
            {this.state.categories.map( (cat, idx) => 
             <Indicators key={idx} img={categoryIMG} title={cat.categoryName} idCategory={cat.id} handler={this.handler.bind(this)} />)}
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <LineGraph key={Math.random()} param = {this.state.idCat_graphic} months = '4' label= {this.state.label} />

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
    categories: allCategories,
  }); 

}




}
export default App;