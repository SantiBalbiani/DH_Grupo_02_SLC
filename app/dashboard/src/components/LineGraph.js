import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
import axios from 'axios';

function getLast3Months() {

    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    var today = new Date();
    var last3Months = []
  
    for (let i = 0; i < 3; i++) {
      last3Months.push(monthNames[(today.getMonth() - i)] + ' - ' +today.getFullYear()  );
    }
    return last3Months.reverse();
  }

export default class LineGraph extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: 0
        }
    }
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        

        
            axios.get('http://localhost:3030/api/products/1')
            .then(res => {
            const productos = res.data;
            this.setState( { data: productos });
            console.log(this.state.data);
        });
        console.log(this.state.data);
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: getLast3Months(),
                datasets: [
                    {
                        label: "New Products",
                        backgroundColor: "#597ff9",
                        data: [3, 5, 2], // La cant de productos por mes
                    }
                ]
            },
            options: {
                //Customize chart options
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