import React, {Component} from 'react';
import store, {withState} from "../../store";
import Socket from "../../Socket";
import Layout from "../../components/Layout";
import {useTranslation, withTranslation} from "react-i18next";
import classes from './commands.module.css'

const CommandCard = ({r,j}) => {
    const {t} = useTranslation()
    const ref = React.useRef()
    return (
        <div key={j} className="col">
            <div className="card">
                <div className="card-body">
                    <div style={{
                        display: 'flex'
                    }}>
                        <span style={{flexGrow: 1}} className="p-2">{t(`commands.${r}.name`)}</span>
                        <button onClick={() => ref.current.classList.toggle('show')} className="btn btn-primary">더보기</button>
                    </div>
                    <div className="collapse" ref={ref}>
                        <hr/>
                        {t(`commands.${r}.desc`)}
                    </div>
                </div>
            </div>
        </div>
    );
};

class CommandsView extends Component {
    componentDidMount() {
        store.dispatch({
            type: '@@CHINO/COMMANDS',
            payload: null
        })
        Socket.socket.emit('commands')
    }

    render() {
        const {commands, t} = this.props

        return (
            <Layout>
                <div className="container">
                    <h2>명령어</h2>
                    {commands ? commands.length ? (() => {
                        const categories = commands.map((category, i) => (
                            [
                                <a key={i} className={`nav-link ${classes.tab} ${i === 0 ? 'active' : ''}`} data-toggle="pill" href={`#categories__tab__btn${i}`}>{
                                    t(`categories.${category.name}`)
                                }</a>,
                                <div key={i} className={`tab-pane fade ${i===0?'show active' : ''}`} id={`categories__tab__btn${i}`}>
                                    <div className="row row-cols-1 g-4">
                                        {category.commands.map((r, j)=><CommandCard i={i} r={r} key={j}/>)}
                                    </div>
                                </div>
                            ]
                        ))
                        return <div className="d-flex align-items-start flex-column flex-md-row">
                            <div className={`nav flex-column nav-pills mr-3 ${classes.tab}`} id="commands-tab" role="tablist">
                                {categories.map(r=>r[0])}
                            </div>
                            <div className="tab-content" id="commands-tab-content" style={{width: '100%'}}>
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

export default withTranslation()(withState(CommandsView));