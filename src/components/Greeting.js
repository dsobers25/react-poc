import React, { Component } from 'react';
class Greeting extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        // Set initial state (ONLY ALLOWED IN CONSTRUCTION)
        this.state = {
            greeting: "Grand Rising from the DOM"
        };
    }
        click(e) {
            this.setState({
                greeting: "Grand Rising from the Button"
            });
        }
    render() {
        return (
            <div>
                <p>{this.state.greeting}</p>
                <button onClick={this.click}>Click Me</button>
            </div>
        );
        }
    }
export default Greeting;