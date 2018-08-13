import React from 'react'
import {add, sub} from './store'
import {connect} from 'react-redux'


const mapDispatchToProps = (dispatch) => ({
    isAdd: () => dispatch(add()),
    isSub: () => dispatch(sub())
})

class CounterButtons extends React.Component { 

    render() {
        return (
            <div>
                <button onClick={this.props.isAdd}>ADD</button>
                <button onClick={this.props.isSub}>SUB</button>
                
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps) (CounterButtons)
