import React from 'react'


class Counter extends React.Component {
    state = {
        value:7
    }

    

    render() {
        return (
            <div>
                <h1>My great counter:</h1>
                <h2>{this.state.value}</h2>
                <div>
                   
                </div>
            </div>
        )
    }
}

export default Counter
