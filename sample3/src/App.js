import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        this.handleUp = this.handleCountup.bind(this);
        this.handleDown = this.handleCountdown.bind(this);
    }
  handleCountup() {
      this.setState({count:this.state.count +1 });
  }

  handleCountdown() {
      this.setState({count:this.state.count -1 });
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleUp} >
          カウントアップ
        </button>
        <button onClick={this.handleDown} >
          カウントダウン
        </button>
        <p className="App-intro">
            {this.state.count}
        </p>
      </div>
    );
  }
}

export default App;
