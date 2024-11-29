import React, { Component } from "react";
import * as d3 from "d3";

class Child1 extends Component {
    componentDidMount() {
        console.log(this.props.csv_data)
        this.renderChart();
    }

    renderChart = () => {
        const csv_data = this.props.csv_data.map(d => {
            d.Date = new Date(d.Date)
            return d;
        })
        console.log(csv_data)

        const keys = ["GPT-4", "Gemini", "PaLM-2", "Claude", "LLaMA-3.1"];
        const colors = ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"]
    
        const margin = { top: 50, right: 80, bottom: 60, left: 90},
            width = 750,
            height = 450,
            innerWidth = 750 - margin.left - margin.right,
            innerHeight = 450 - margin.top - margin.bottom;

        const svg = d3.select("#chart").attr('width', width).attr('height', height).select('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

        var xScale = d3.scaleTime().domain(d3.extent(this.props.csv_data, d => d.Date)).range([0, innerWidth]);

        svg.selectAll('.x_axis').data([null]).join('g').attr('class', 'x_axis').attr('transform', `translate(0,${innerHeight + 15})`).call(d3.axisBottom(xScale));

        const legend = svg.selectAll(".legend")
            .data(keys)
            .join("g")
            .attr("class", "legend")
            .attr("transform", (d, i) => `translate(0, ${i * 20})`);
        
            var stackedData = d3.stack()
                .offset(d3.stackOffsetSilhouette)
                .keys(keys)
                .data(data)
            
                
    }

    render() {
        return (
            <div id="chart"></div>
        );
    }
}

export default Child1;