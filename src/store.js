const ADD = 'ADD'
const SUB = 'SUB'
const RESET = 'RESET'

export const add = (number = 1) => (
    {
        type: ADD,
        number     //number:number
    })

export const sub = (number = 1) => (
    {
        type: SUB,
        number
    })

export const reset = () =>({
    type: RESET
})

const INITIAL_STATE = {
    counterValue:99,
    open: false,
    list: []
}

const reducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            //return {counterValue: state.counterValue + 1, open:false, list:[]}  different methods returning same object
            //return Object.assign({},state, {counterValue: state.counterValue + 1})
            return {...state, counterValue: state.counterValue + action.number}
        case SUB:
        return {...state, counterValue: state.counterValue - action.number}
        case RESET:
        return{
            ...state, counterValue: 0
        }
        default:
            return state
    }
}

export default reducer