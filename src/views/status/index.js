import React, {Component} from 'react';
import {withState} from "../../store";
import {Container, Spinner, Table} from "react-bootstrap";
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
                <Container>
                    {clusters ? clusters.length ? (
                            <Table striped bordered hover>
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
                                        <tr>
                                            <td>#{i}</td>
                                            <td>{cluster.guilds}</td>
                                            <td>{cluster.users}</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </Table>
                        ) : '연결되어있는 클러스터가 없어요!' :
                        <Spinner animation="border"/>}
                </Container>
            </Layout>
        );
    }
}

export default withState(StatusView);