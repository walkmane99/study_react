import React, { Component } from 'react';
import Controller from './Controller';



class App extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="App">
        <Controller >
            {((c) => {
                return (
                <div>
                    <button onClick={c.countup} >
                        カウントアップ
                    </button>
                    <button onClick={c.countdown} >
                        カウントダウン
                    </button>
                    <p className="App-intro">
                        {c.count}
                    </p>
                </div>
                )
            })}
        </Controller>

      </div>
    );
  }
}

export default App;
