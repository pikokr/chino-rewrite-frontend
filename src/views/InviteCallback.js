import React, {Component} from 'react';
import {withState} from "../store";
import Socket from "../Socket";

class InviteCallback extends Component {
    componentDidMount() {
        const query = new URLSearchParams(window.location.search)

        if (query.get('error')) return window.close()

        if (query.get('state')) {
            Socket.socket.emit('invite', query.get('state'))
        }
    }


    render() {
        return (
            <div>
            </div>
        );
    }
}

export default withState(InviteCallback);