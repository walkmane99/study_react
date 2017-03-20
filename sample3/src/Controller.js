import React, { Component } from 'react';



class Controller extends Component {

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
        return this.props.children({count:this.state.count, countup:this.handleUp, countdown:this.handleDown});
    }
}

export default Controller;
