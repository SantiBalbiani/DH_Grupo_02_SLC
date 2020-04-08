import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./styles/LineGraph.module.css";
import API from '../config/API';
import DateHandler from '../config/datesHandler';


class LineGraph extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: 0,
            param: props.param,
            months: props.months,
            title: props.label,
            isTypeLine: props.typeGr,
            typeGr: 'bar',
            info: props.info,
        }
    }
    chartRef = React.createRef();
    
  async  componentDidMount() {

        var theQuantity = [];

        const myChartRef = this.chartRef.current.getContext("2d");
        
        let prodsByCat;
        let fechasDB = 0;
        if(this.state.info == 2){
        prodsByCat = await API.get(`http://localhost:3030/api/products/${this.state.param}`);
        prodsByCat = prodsByCat.data;
        prodsByCat = prodsByCat.filter( aData => aData.createdAt !== null);
        (this.state.isTypeLine)? this.setState({typeGr: 'line'}) : this.setState({typeGr: 'bar'});
        
        fechasDB = prodsByCat.map( (aData) => new Date(aData.createdAt) );
        }

        if(this.state.info == 1){
        prodsByCat = await API.get('http://localhost:3030/api/sells/sellsHead');
        prodsByCat = prodsByCat.data;
        prodsByCat = prodsByCat.filter( aData => aData.createdAt !== null);
        (this.state.isTypeLine)? this.setState({typeGr: 'line'}) : this.setState({typeGr: 'bar'});
        fechasDB = prodsByCat.map( (aData) => new Date(aData.createdAt) );
        }

        if(this.state.info == 0){
            prodsByCat = await API.get('http://localhost:3030/api/users/allUsrs');
            prodsByCat = prodsByCat.data;
            prodsByCat = prodsByCat.filter( aData => aData.createdAt !== null);
            (this.state.isTypeLine)? this.setState({typeGr: 'line'}) : this.setState({typeGr: 'bar'});
            fechasDB = prodsByCat.map( (aData) => new Date(aData.createdAt) );
            }

        let lastMonths = DateHandler.getLastMonths(this.state.months); 
        let quantity = [];
        for( let i=0; i < lastMonths.length; i++){
            let lastDayOfMonth = DateHandler.getLastDayOfMonth(lastMonths[i].getFullYear(), lastMonths[i].getMonth()); 
            let rangoFechas = {
                fechaDesde: lastMonths[i],
                fechaHasta: lastDayOfMonth,
            }; 
            quantity.push((fechasDB.filter( aDate => ((aDate <= rangoFechas.fechaHasta) && (aDate >=rangoFechas.fechaDesde)))).length );
        } 
       
        
       let lastMonthsNames = DateHandler.getLastMonthsNames(lastMonths);

        new Chart(myChartRef, {
            type: this.state.typeGr,
            data: {
                labels: lastMonthsNames,
                datasets: [
                    {
                        label: `${this.state.title}`,
                        backgroundColor: "#597ff9",
                        data: quantity, 
                    }
                ]
            },
            options: {
               
            }
        });
    
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

export default LineGraph;