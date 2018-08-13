import React from 'react'


class Counter extends React.Component {



    render() {
        return (
            <div>
                <h1>My great counter:</h1>
                <h2>{this.props.value}</h2>
                <button

                >
                    +
        </button>
                <button

                >
                    -
        </button>

            </div>
        )
    }
}

export default Counter
