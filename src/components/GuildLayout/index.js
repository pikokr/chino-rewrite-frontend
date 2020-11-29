import React, {Component} from 'react';
import Layout from "../Layout";
import styles from './guildLayout.module.css'

class GuildLayout extends Component {
    render() {
        return (
            <Layout offset={50}>
                <div className={styles.layout}>
                    <aside className={styles.sidebar} style={{
                        background: '#000',
                        height: '100%'
                    }}>
                        사이드바
                    </aside>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default GuildLayout;