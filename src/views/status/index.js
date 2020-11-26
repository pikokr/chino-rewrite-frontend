import React, {Component} from 'react';
import {withState} from "../../store";
import Socket from "../../Socket";
import Layout from "../../components/Layout";

class StatusView extends Component {
    componentDidMount() {
        Socket.socket.emit('clusters')
    }

    render() {
        const {clusters} = this.props

        return (
            <Layout>
                <div className="container">
                    {clusters ? clusters.length ? (
                            <table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        서버 수
                                    </th>
                                    <th>
                                        유저 수
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    clusters.map((cluster, i) => (
                                        <tr key={i}>
                                            <td>#{i}</td>
                                            <td>{cluster.guilds}</td>
                                            <td>{cluster.users}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        ) : '연결되어있는 클러스터가 없어요!' :
                        'Loading'}
                </div>
            </Layout>
        );
    }
}

export default withState(StatusView);