import React, { Component } from "react";
import * as d3 from "d3";

class Child1 extends Component {
    componentDidMount() {
        console.log(this.props.csv_data)
        var data = [
            { month: new Date(2024, 1, 1), "GPT-4": 120, "Gemini": 20, "PaLM-2": 90, "Claude": 50, "LLaMA-3.1": 60 },
            { month: new Date(2024, 2, 1), "GPT-4": 130, "Gemini": 75, "PaLM-2": 35, "Claude": 60, "LLaMA-3.1": 70 },
            { month: new Date(2024, 3, 1), "GPT-4": 50, "Gemini": 50, "PaLM-2": 95, "Claude": 65, "LLaMA-3.1": 80 },
            { month: new Date(2024, 4, 1), "GPT-4": 100, "Gemini": 65, "PaLM-2": 80, "Claude": 70, "LLaMA-3.1": 90 },
            { month: new Date(2024, 5, 1), "GPT-4": 60, "Gemini": 50, "PaLM-2": 150, "Claude": 75, "LLaMA-3.1": 100 },
            { month: new Date(2024, 6, 1), "GPT-4": 100, "Gemini": 55, "PaLM-2": 60, "Claude": 80, "LLaMA-3.1": 110 },
            { month: new Date(2024, 7, 1), "GPT-4": 180, "Gemini": 50, "PaLM-2": 130, "Claude": 85, "LLaMA-3.1": 120 },
            { month: new Date(2024, 8, 1), "GPT-4": 190, "Gemini": 45, "PaLM-2": 100, "Claude": 90, "LLaMA-3.1": 130 },
            { month: new Date(2024, 9, 1), "GPT-4": 200, "Gemini": 40, "PaLM-2": 50, "Claude": 95, "LLaMA-3.1": 140 },
            { month: new Date(2024, 10, 1), "GPT-4": 110, "Gemini": 135, "PaLM-2": 80, "Claude": 100, "LLaMA-3.1": 150 },
          ];
        this.renderChart(data);
    }

    renderChart = (data) => {
        const keys = ['GPT-4', 'Gemini', 'PaLM-2', 'Claude', 'LLaMA-3.1'];
        const maxSum = d3.sum(
            keys.map(key => d3.max(data, d => d[key]))
        );

        const margin = {top: 20, right: 20, bottom: 50, left: 50},
            width = 700,
            height = 750;
    
        const xScale = d3.scaleTime().domain(d3.extent(data, d => d.month)).range([margin.left, width - margin.right]);
        const yScale = d3.scaleLinear()
            .domain([0, maxSum])
                .range([height - margin.bottom, margin.top]);

        const colors = ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"];
        
        
        var stack = d3.stack().keys(keys).offset(d3.stackOffsetWiggle);
        var stackedSeries = stack(data);

        var areaGenerator = d3.area().x(d => xScale(d.data.month)).y0(d => yScale(d[0])).y1(d => yScale(d[1])).curve(d3.curveCardinal);

        const svg = d3.select('.container')
        
        svg.selectAll('path').data(stackedSeries).join('path').attr('d', d=>areaGenerator(d)).attr('fill', (d, i) => colors[i]).attr('transform', `translate(0, -200)`);

        svg.selectAll('.x_axis').data([null]).join('g').attr('class', 'x_axis').attr('transform', `translate(0, 600)`).call(d3.axisBottom(xScale));
        
        const legend = svg.selectAll(".legend")
            .data(keys)
            .join("g")
            .attr("class", "legend")
            .attr("transform", (d, i) => `translate(0, ${i * 20})`);
        
        legend.append("rect")
            .attr("x", width)
            .attr("y", height/3)
            .attr("width", 15)
            .attr("height", 15)
            .attr("fill", (d,i) => colors[i]);
        
        legend.append("text")
            .attr("x", width + 20)
            .attr("y", height/3 + 12)
            .text((d) => d)
            .style("font-size", "14px")
            .attr("alignment-baseline", "middle");
    } 

    render() {
        return (
                <svg style={{ width: 800, height: 750 }}>
                    <g className="container"></g>
                </svg>
        );
    }
}

export default Child1;