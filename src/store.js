import { connect } from "react-redux"
import { createStore } from "redux"

const initialState = {
    user: localStorage.getItem('token') ? null : false
}

function State(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case '@@CHINO/LOGIN':
            return {...state, user: action.payload}
        default:
            return state
    }
}

export default createStore(State)


export const withState = connect(state => ({
    user: state.user
}), dispatch => ({}))
