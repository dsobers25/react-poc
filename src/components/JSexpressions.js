import React, {Component } from 'react';
class JSexpressions extends Component {

constructor(props) {
    super(props)
    // These constants are passed into the JSX
    // markup using JS expression syntax
    this.enable = false;
    this.text = 'A Button';
    this.placeholder = 'input value...';
    this.size = 50;
}
// We're rednering a "<button>" and an "<input>" element. both of which use the "{}" JavaScript
// expression syntax to fill in property, and text values.
    render(){
        return <section>
            <button disabled={!this.enabled}>{this.text}</button>
            <input placeholder={this.placeholder} size={this.size}/>
        </section>
    }
}

export default JSexpressions;