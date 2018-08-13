import React from 'react'
import {add, sub} from './store'

class CounterButtons extends React.Component {


    render() {
        return (
            <div>
                <button onClick={() => this.dispatch(add())}>ADD</button>
                <button onClick={() => this.dispatch(sub())}>SUB</button>
                
            </div>
        )
    }
}

export default CounterButtons
