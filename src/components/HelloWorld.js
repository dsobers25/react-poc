import React, { Component } from 'react';
class HelloWorld extends Component {
    constructor(props) {

        // Since we are extending the default constructor,
        // handle default activites first.
        super(props);

        // Extract the first-name from the prop
        let firstName = this.props.name.split(" ")[0];
        let age = this.props.age;

        // In the constructor
        this.state = {
            name: firstName,
            age: age
        }
    }
    render() {
        return <h1>Hello, {this.props.name}. You are {this.props.age}</h1>;
    }
}
export default HelloWorld;