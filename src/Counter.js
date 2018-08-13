import React from 'react'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
    value: state.counter.counterValue
})


class Counter extends React.Component {
   
    

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

export default connect(mapStateToProps, mapDispatchToProps) (Counter)
