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

        return (
            <Layout>
                <div className="container">
                    <h2>명령어</h2>
                    {commands ? commands.length ? (() => {
                        const categories = commands.map((category, i) => (
                            [
                                <a key={i} className={`nav-link ${i === 0 ? 'active' : ''}`} data-toggle="pill" href={`#categories__tab__btn${i}`}>{category.name}</a>,
                                <div key={i} className={`tab-pane fade ${i===0?'show active' : ''}`} id={`categories__tab__btn${i}`}>
                                    {category.commands.map((r, i)=><div key={i}>
                                        {r}
                                    </div>)}
                                </div>
                            ]
                        ))
                        return <div className="d-flex align-items-start">
                            <div className="nav flex-column nav-pills mr-3" id="commands-tab" role="tablist">
                                {categories.map(r=>r[0])}
                            </div>
                            <div className="tab-content" id="commands-tab-content">
                                {categories.map(r=>r[1])}
                            </div>
                        </div>
                    })() : '명령어가 없네요!' :
                        <div className="spinner-border"/>}
                </div>
            </Layout>
        );
    }
}

export default withState(CommandsView);