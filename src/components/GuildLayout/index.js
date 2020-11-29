import React, {Component} from 'react';
import Layout from "../Layout";
import styles from './guildLayout.module.css'
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import Socket from "../../Socket";
import store, {withState} from "../../store";
import {withTranslation} from "react-i18next";

const Item = withRouter(({children, path, location}) => {
    const active = (location.pathname.split('/').slice(3).join('/') || '/') === path
    const baseURL = location.pathname.split('/').slice(0,3).join('/')
    return <li className="nav-item">
        <Link to={baseURL + path} className={`nav-link ${active ? 'text-dark bg-white' : 'text-white'}`}>{children}</Link>
    </li>
})

class GuildLayout extends Component {
    id = window.location.pathname.split('/')[2]

    componentDidMount() {
        store.dispatch({
            type: '@@CHINO/GUILD',
            payload: {id: this.id}
        })

        Socket.socket.emit('guild', this.id)
    }

    render() {
        return (
            <Layout offset={55}>
                {
                    this.props.user ? this.props.guild[this.id]?.error ? this.props.t('errors.guild_layout.' + this.props.guild[this.id].error) : this.props.guild[this.id]?.name ? <div className={styles.layout}>
                        <aside className={`${styles.sidebar} bg-dark collapse`} style={{
                            height: '100%'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} className="p-3">
                                <h5>{this.props.guild[this.id].name}</h5>
                            </div>
                            <ul className="flex-column nav list-unstyled">
                                <Item path="/">메인</Item>
                            </ul>
                        </aside>
                        <div className={`${styles.main} container`}>
                            <h1>{this.props.title}</h1>
                            {this.props.children}
                        </div>
                    </div> : <div className="spinner-border m-3" style={{
                        width: 50,
                        height: 50
                    }}/> : '로그인 해주세요'
                }
            </Layout>
        );
    }
}

export default withTranslation()(withState(withRouter(GuildLayout)));