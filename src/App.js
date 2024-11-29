import React, { Component } from "react";
import './App.css';
import FileUpload from "./FileUpload";
import Child1 from "./Child1";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
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
