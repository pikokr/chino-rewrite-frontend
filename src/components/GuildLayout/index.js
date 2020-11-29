import React, {Component} from 'react';
import Layout from "../Layout";
import styles from './guildLayout.module.css'

class GuildLayout extends Component {
    render() {
        return (
            <Layout offset={50}>
                <div className={styles.layout}>
                    <aside className={`${styles.sidebar} bg-dark collapse`} style={{
                        height: '100%'
                    }}>
                        사이드바
                    </aside>
                    <div className={`${styles.main} container`}>
                        <h1>TITLE</h1>
                        {this.props.children}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default GuildLayout;