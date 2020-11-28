import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {withState} from "../../store";
import Layout from "../../components/Layout";

class Guilds extends Component {
    render() {
        const {t, guilds} = this.props
        console.log(t)
        console.log(guilds)
        return (
            <Layout>
                <div className="container">
                    {guilds === null ? <div className="spinner-border" style={{
                        width: 50,
                        height: 50
                    }}/> : ''}
                </div>
            </Layout>
        );
    }
}

export default withTranslation()(withState(Guilds));