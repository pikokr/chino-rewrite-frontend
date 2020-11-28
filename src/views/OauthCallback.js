import React, {Component} from 'react';
import Socket from "../Socket";

class OauthCallback extends Component {
    componentDidMount() {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')
        if (!token) {
            window.close()
        }
        Socket.socket.once('verify', data => {
            if (data === true) {
                window.localStorage.setItem('token', token)
            }
            window.close()
        })
        Socket.socket.emit('verify', {token, opener: params.get('state')})
    }

    render() {
        return (
            <div>
                로그인 처리중....
            </div>
        );
    }
}

export default OauthCallback;
