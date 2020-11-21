import config from './config.json'
import io from 'socket.io-client'

export default class Util {
    static socket = io(config.api)
    static config = config
}