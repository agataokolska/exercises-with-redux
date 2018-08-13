import React from 'react';
import Counter from './Counter'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
       <Counter value ={6}/>
      </div>
    )
  }
}

export default App;
