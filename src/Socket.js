import config from './config.json'
import io from 'socket.io-client'
import store from "./store";

export default class Socket {
    static socket = io(config.api)
}

Socket.socket.on('connect', () => {
    console.log('Connected to backend socket.')
    Socket.socket.emit('clusters')
})

Socket.socket.on('clusters', data => {
    store.dispatch({
        type: '@@CHINO/CLUSTERS',
        payload: data
    })
})
