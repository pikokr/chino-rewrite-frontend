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
    if (data === 'register') {
        if (window.confirm('치노봇 서비스에 가입되어 있지 않네요! 가입할까요? 취소하면 로그아웃 됩니다!')) {
            store.dispatch({
                type: '@@CHINO/LOGIN',
                payload: null
            })
            Socket.socket.emit('register')
        } else {
            localStorage.removeItem('token')
            window.location.reload()
        }
    } else {
        store.dispatch({
            type: '@@CHINO/LOGIN',
            payload: data
        })
    }
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

Socket.socket.on('guilds', data => {
    store.dispatch({
        type: '@@CHINO/GUILDS',
        payload: data
    })
})

Socket.socket.on('guild', data => {
    store.dispatch({
        type: '@@CHINO/GUILD',
        payload: data
    })
})
