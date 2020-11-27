import config from './config.json'
import io from 'socket.io-client'
import store from "./store";

export default class Socket {
    static socket = io(config.api, {
        query: {
            auth: localStorage.getItem('token') || undefined
        }
    })
}

Socket.socket.on('connect', () => {
    console.log('Connected to backend socket.')
})

Socket.socket.on('login', data => {
    store.dispatch({
        type: '@@CHINO/LOGIN',
        payload: data
    })
})

Socket.socket.on('clusters', data => {
    store.dispatch({
        type: '@@CHINO/CLUSTERS',
        payload: data
    })
})


Socket.socket.on('commands', data => {
    store.dispatch({
        type: '@@CHINO/COMMANDS',
        payload: data
    })
})
