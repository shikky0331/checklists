import React, { Component } from 'react';
import Checklists from 'components/checklists'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Checklists</h1>
        <Checklists />
      </div>
    )
  }
}

export default App;
