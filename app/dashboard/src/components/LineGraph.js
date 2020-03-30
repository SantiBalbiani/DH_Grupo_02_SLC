import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./styles/LineGraph.module.css";
import API from '../config/API';
import DateHandler from '../config/datesHandler';


export default class LineGraph extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: 0,
            param: props.param,
            months: props.months,
        }
    }
    chartRef = React.createRef();
    
  async  componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        let prodsByCat = await API.get(`http://localhost:3030/api/products/${this.state.param}`);
        prodsByCat = prodsByCat.data;
        prodsByCat = prodsByCat.filter( aData => aData.createdAt !== null);
        this.setState({ data: prodsByCat });
        let fechasDB = this.state.data.map( (aData) => new Date(aData.createdAt) );
        let lastMonths = DateHandler.getLastMonths(this.state.months); 
        let quantity = [];
        for( let i=0; i < lastMonths.length; i++){
            let lastDayOfMonth = DateHandler.getLastDayOfMonth(lastMonths[i].getFullYear(), lastMonths[i].getMonth()); 
            let rangoFechas = {
                fechaDesde: lastMonths[i],
                fechaHasta: lastDayOfMonth,
            }; 
            quantity.push(  (fechasDB.filter( aDate => ((aDate <= rangoFechas.fechaHasta) && (aDate >=rangoFechas.fechaDesde)))).length );
        } 

       let lastMonthsNames = DateHandler.getLastMonthsNames(lastMonths);

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: lastMonthsNames,
                datasets: [
                    {
                        label: "New Arduino Products",
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