import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogBrowser from "./HogBrowser";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/hogs")
      .then(resp => resp.json())
      .then(hogs => {
        // this.setState( state => {
        //   state.tasks = hogs
        //   return state
        // })
        // this.setState( { hogs: hogs } )
        // Same as:
        // this.setState({ hogs });
        this.setState({ hogs: hogs });
      });
  }
  render() {
    return (
      <div className="ui grid container">
        <Nav />
        <HogBrowser hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
