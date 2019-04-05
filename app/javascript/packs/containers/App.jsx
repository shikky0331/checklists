import React, { Component } from 'react';
import Checklists from 'components/checklists'
import Input from 'components/input'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Checklists</h1>
        <Checklists />
        <Input />
      </div>
    )
  }
}

export default App;
