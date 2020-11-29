import React, {Component} from 'react';
import Layout from "../Layout";
import styles from './guildLayout.module.css'
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

const Item = withRouter(({children, path, location}) => {
    const active = (location.pathname.split('/').slice(3).join('/') || '/') === path
    const baseURL = location.pathname.split('/').slice(0,3).join('/')
    return <li className="nav-item">
        <Link to={baseURL + path} className={`nav-link ${active ? 'text-dark bg-white' : 'text-white'}`}>{children}</Link>
    </li>
})

class GuildLayout extends Component {
    render() {
        return (
            <Layout offset={50}>
                <div className={styles.layout}>
                    <aside className={`${styles.sidebar} bg-dark collapse`} style={{
                        height: '100%'
                    }}>
                        <ul className={`pt-1 flex-column nav list-unstyled`}>
                            <Item path="/">메인</Item>
                        </ul>
                    </aside>
                    <div className={`${styles.main} container`}>
                        <h1>{this.props.title}</h1>
                        {this.props.children}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default GuildLayout;