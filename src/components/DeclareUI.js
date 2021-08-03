import React, { Component } from 'react';
class DeclareUI extends Component {
    render() {
        return <section>
            <header>
                <h1>A Header Foo</h1>
            </header>
            <nav>
                <a href="item">Nav Item</a>
            </nav>
            <main>
                <p> The main content... </p>
            </main>
            <footer>
                <small>&copy; 2018</small>
            </footer>
        </section>;
    }
}

export default DeclareUI