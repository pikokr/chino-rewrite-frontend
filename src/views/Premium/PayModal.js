import React, {Component} from 'react';
import pay from "./pay";
import {withState} from "../../store";

class PayModal extends Component {
    state = {
        method: null
    }

    render() {
        return (
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
                                        <input onChange={event => {
                                            this.setState({
                                                method: event.target.value
                                            })
                                        }} checked={this.state.method === item.code} value={item.code} className="form-check-input" type="radio"
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
                            <button data-dismiss="modal" disabled={!this.state.method} onClick={() => pay(this.state, this.props)} className="btn btn-success">
                                결제하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withState(PayModal);