import React from 'react'


class CounterButtons extends React.Component {


    addhandler = () => {
        
      
    }

    subhandler = () => {
       
    }

    render() {
        return (
            <div>
                    <button
                    onClick={this.addhandler}
                     >
                    ADD
                    </button>
                    <button
                    onClick={this.subhandler}
                    >
                    SUB
                    </button>
            </div>
        )
    }
}

export default CounterButtons
