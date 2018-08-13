import React from 'react'


class Counter extends React.Component {
    state = {
        value:7
    }

    addhandler = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    dechandler = () => {
        this.setState({
            value: this.state.value - 1
        })
    }

    render() {
        return (
            <div>
                <h1>My great counter:</h1>
                <h2>{this.state.value}</h2>
                <div>
                    <button
                        onClick={this.addhandler}
                    >
                        ADD
                    </button>
                    <button
                        onClick={this.dechandler}
                    >
                        SUB
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter
