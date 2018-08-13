import React from 'react'
import { add, sub, reset } from './store'
import { connect } from 'react-redux'


const mapDispatchToProps = (dispatch) => ({
    isAdd: (number) => dispatch(add(number)),
    isSub: (number) => dispatch(sub(number)),
    isaReset: () => dispatch(reset())

})

class CounterButtons extends React.Component {

    state= {
        inputValue: 0
    }

    handleChange = (event) => {
        this.setState({
            inputValue: parseInt(event.target.value) // change string to number
        })
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.props.isAdd(this.state.inputValue)}>ADD</button>
                    <button onClick={() => this.props.isSub(this.state.inputValue)}>SUB</button>
                    <button onClick={this.props.isaReset}>RESET</button>
                </div>
                <input
                type='number'
                placeholder='write a number here'
                onChange={this.handleChange}
                />

            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CounterButtons)
