import React, {Component} from 'react';
import Layout from "../../components/Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withState} from "../../store";

class Premium extends Component {
    render() {
        const {user} = this.props

        return (
            <Layout>
                <div className="container">
                    <h2>치노봇 프리미엄</h2>
                    <small>치노봇 프리미엄에 가입하면 여러 혜택들을 이용하실 수 있어요!</small>
                    <div className="row g-3 row-cols-md-3 row-cols-1">
                        <div className="col">
                            <div className="card">
                                <div className="card-body text-center">
                                    <FontAwesomeIcon size="2x" icon={['fas', 'terminal']} style={{marginRight: 10}}/>
                                    <h4>실험 기능 제공</h4>
                                    <span>치노봇에 추가 예정인 기능들을 미리 만나보실 수 있어요!</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body text-center">
                                    <FontAwesomeIcon size="2x" icon={['fas', 'clock']} style={{marginRight: 10}}/>
                                    <h4>쿨타임 제거</h4>
                                    <span>명령어 쿨타임이 제거되요!(쿨타임이 줄어드는 명령어도 있어요)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body text-center">
                                    <FontAwesomeIcon size="2x" icon={['fas', 'money-bill']} style={{marginRight: 10}}/>
                                    <h4>돈 추가 지급</h4>
                                    <span>돈받기 명령어에서 돈을 추가로 지급해요!</span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body text-center">
                                    <FontAwesomeIcon size="2x" icon={['fas', 'image']} style={{marginRight: 10}}/>
                                    <h4>레벨 카드 커스텀</h4>
                                    <span>레벨 카드 배경을 바꿀 수 있어요!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button disabled={!user} className="btn btn-primary mt-3" data-toggle="modal"
                            data-target="#premium-payment-modal">치노봇 프리미엄 1개월 구독하기
                    </button>
                    <div aria-hidden="true" className="modal fade" id="premium-payment-modal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        프리미엄 결제하기
                                    </h5>
                                    <button type="button" className="btn-close" data-dismiss="modal"
                                            aria-label="Close"/>
                                </div>
                                <div className="modal-body">
                                    <h5>결제수단 선택</h5>
                                    {
                                        [{name: '문화상품권', code: 'cultureland'},
                                            {
                                                name: '카드',
                                                code: 'card'
                                            }, {
                                            name: '가상계좌',
                                            code: 'vbank'
                                        }, {
                                            name: '실시간 계좌이체',
                                            code: 'trans'
                                        }].map((item, idx) => (
                                            <div className="form-check" key={idx}>
                                                <input value={item.code} className="form-check-input" type="radio"
                                                       name="premium-payment-method"
                                                       id={`pay-${item.code}`}/>
                                                <label className="form-check-label" htmlFor={`pay-${item.code}`}>
                                                    {item.name}
                                                </label>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="modal-footer">
                                    FOOTER
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default withState(Premium);