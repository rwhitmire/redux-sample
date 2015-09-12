import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Injected by React Router
    const { children } = this.props;

    return (
      <div>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/counter">counter</Link>
        </nav>
        {children}
      </div>
    );
  }
}

export default App;
