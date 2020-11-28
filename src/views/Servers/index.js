import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import store, {withState} from "../../store";
import Layout from "../../components/Layout";
import Socket from "../../Socket";
import {Link} from "react-router-dom";
import Util from "../../Util";

class Guilds extends Component {
    componentDidMount() {
        store.dispatch({
            type: '@@CHINO/GUILDS',
            payload: null
        })
        Socket.socket.emit('guilds', {admin:true})
    }

    render() {
        const {guilds, t, user} = this.props
        return (
            <Layout>
                <div className="container">
                    {user !== false ? guilds === null ? <div className="spinner-border" style={{
                        width: 50,
                        height: 50
                    }}/> : guilds === false ? <div>서버 목록을 가져올 수 없어요!</div> : <div className="row g-2">
                        {
                            guilds.map(guild => (
                                <div key={guild.id} className="card">
                                    <div className="card-body" style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{flexGrow: 1}}>
                                            {guild.name}
                                        </span>
                                        {
                                            guild.bot ? <Link to={`/servers/${guild.id}`} className="btn btn-primary">
                                                {t('views.servers.manage')}
                                            </Link> : <button className="btn btn-secondary" onClick={() => window.open(Util.config.api + '/invite/' + guild.id + '?opener=' + Socket.socket.id, 'invite', 'width=500,height=700')}>{t('views.servers.invite')} </button>
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div> : '로그인해주세요!'}
                </div>
            </Layout>
        );
    }
}

export default withTranslation()(withState(Guilds));