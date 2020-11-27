import React, {Component} from 'react';
import {withState} from "../../store";
import Socket from "../../Socket";
import Layout from "../../components/Layout";
import {withTranslation} from "react-i18next";

class StatusView extends Component {
    componentDidMount() {
        Socket.socket.emit('clusters')
    }

    render() {
        const {clusters, t} = this.props

        return (
            <Layout>
                <div className="container">
                    <h2>{
                        t('views.status.shards.title')
                    }</h2>
                    {clusters ? clusters.length ? (
                            <table className="table table-bordered table-hover table-striped">
                                <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        {
                                            t('views.status.shards.cols.guilds')
                                        }
                                    </th>
                                    <th>
                                        {
                                            t('views.status.shards.cols.users')
                                        }
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    clusters.map((cluster, i) => (
                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td>{cluster.guilds}</td>
                                            <td>{cluster.users}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        ) : '연결되어있는 클러스터가 없어요!' :
                        <div className="spinner-border"/>}
                </div>
            </Layout>
        );
    }
}

export default withTranslation()(withState(StatusView));