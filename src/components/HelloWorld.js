import React, { Component } from 'react';
class HelloWorld extends Component {
    render() {
        return <h1>Hello, {this.props.name}. You are {this.props.age}</h1>;
    }
}
export default HelloWorld;