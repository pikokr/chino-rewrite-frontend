import React, {Component} from 'react';
import {withState} from "../../store";
import Socket from "../../Socket";
import Layout from "../../components/Layout";

class CommandsView extends Component {
    componentDidMount() {
        Socket.socket.emit('commands')
    }

    render() {
        const {commands} = this.props

        console.log(commands)

        return (
            <Layout>
                <div className="container">
                    <h2>샤드 정보</h2>
                    {commands ? commands.length ? (
                            <div>commands</div>
                        ) : '명령어가 없네요!' :
                        <div className="spinner-border"/>}
                </div>
            </Layout>
        );
    }
}

export default withState(CommandsView);