import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  render() {
    return <h1>Hello</h1>
  }
}
ReactDOM.render(<Hello/>, document.getElementById('hello'));
