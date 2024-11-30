import React, { Component } from "react";
import './App.css';
import FileUpload from "./FileUpload";
import Child1 from "./Child1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        { month: new Date(2024, 0, 1), "GPT-4": 120, "Gemini": 20, "PaLM-2": 90, "Claude": 50, "LLaMA-3.1": 60 },
        { month: new Date(2024, 1, 1), "GPT-4": 130, "Gemini": 75, "PaLM-2": 35, "Claude": 60, "LLaMA-3.1": 70 },
        { month: new Date(2024, 2, 1), "GPT-4": 50, "Gemini": 50, "PaLM-2": 95, "Claude": 65, "LLaMA-3.1": 80 },
        { month: new Date(2024, 3, 1), "GPT-4": 100, "Gemini": 65, "PaLM-2": 80, "Claude": 70, "LLaMA-3.1": 90 },
        { month: new Date(2024, 4, 1), "GPT-4": 60, "Gemini": 50, "PaLM-2": 150, "Claude": 75, "LLaMA-3.1": 100 },
        { month: new Date(2024, 5, 1), "GPT-4": 100, "Gemini": 55, "PaLM-2": 60, "Claude": 80, "LLaMA-3.1": 110 },
        { month: new Date(2024, 6, 1), "GPT-4": 180, "Gemini": 50, "PaLM-2": 130, "Claude": 85, "LLaMA-3.1": 120 },
        { month: new Date(2024, 7, 1), "GPT-4": 190, "Gemini": 45, "PaLM-2": 100, "Claude": 90, "LLaMA-3.1": 130 },
        { month: new Date(2024, 8, 1), "GPT-4": 200, "Gemini": 40, "PaLM-2": 50, "Claude": 95, "LLaMA-3.1": 140 },
        { month: new Date(2024, 9, 1), "GPT-4": 110, "Gemini": 135, "PaLM-2": 80, "Claude": 100, "LLaMA-3.1": 150 },
      ]
    };

  }

  set_data = (csv_data) => {
    this.setState({ data: csv_data })
  }

  render() {
    /*Component for steamgraph */
    return (
      <div>
        <FileUpload set_data={this.set_data}></FileUpload>
        <div className="parent">
          <Child1></Child1>
        </div>
      </div>
    );
  }
}

export default App;
