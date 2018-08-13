import React from 'react';
import Counter from './Counter'
import './App.css';
import CounterButtons from './CounterButtons'
import {combineReducers, createStore} from 'redux'


const reducers = combineReducers({

})
const store = createStore()

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
