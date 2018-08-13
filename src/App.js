import React from 'react';
import Counter from './Counter'
import './App.css';
import CounterButtons from './CounterButtons'

class App extends React.Component {
  render() {
    return (
      <div>
       <Counter />
       <CounterButtons />
      </div>
    )
  }
}

export default App;
