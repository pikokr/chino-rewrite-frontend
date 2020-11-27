import { connect } from "react-redux"
import { createStore } from "redux"

const initialState = {
    user: localStorage.getItem('token') ? null : false,
    clusters: null
}

function State(state = initialState, action) {
    switch (action.type) {
        case '@@CHINO/LOGIN':
            return {...state, user: action.payload}
        case '@@CHINO/CLUSTERS':
            return {...state, clusters: action.payload}
        case '@@CHINO/COMMANDS':
            return {...state, commands: action.payload}
        default:
            return state
    }
}

export default createStore(State)


export const withState = connect(state => ({
    user: state.user,
    clusters: state.clusters,
    commands: state.commands
}), dispatch => ({}))
