import React, { Component } from 'react';
class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: "Grand Rising"
        };
    }
    render() {
        setTimeout(() => {
            this.setState({
                greeting: "Hello World!"
            });
        }, 2000);
        return (
            <div>
                <p>{this.state.greeting}</p>
            </div>
        );
        }
    }
export default Greeting;