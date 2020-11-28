import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import store, {withState} from "../../store";
import Layout from "../../components/Layout";
import Socket from "../../Socket";

class Guilds extends Component {
    componentDidMount() {
        store.dispatch({
            type: '@@CHINO/GUILDS',
            payload: null
        })
        Socket.socket.emit('guilds')
    }

    render() {
        const {guilds, user} = this.props
        console.log(guilds)
        return (
            <Layout>
                <div className="container">
                    {user ? guilds === null ? <div className="spinner-border" style={{
                        width: 50,
                        height: 50
                    }}/> : guilds === false ? <div>서버 목록을 가져올 수 없어요!</div> : '' : '로그인해주세요!'}
                </div>
            </Layout>
        );
    }
}

export default withTranslation()(withState(Guilds));