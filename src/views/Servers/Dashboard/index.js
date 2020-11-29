import React, {Component} from 'react';
import GuildLayout from "../../../components/GuildLayout";
import {Line} from 'react-chartjs-2'

function rand() {
    return Math.floor(Math.random() * 100)
}

class DashboardView extends Component {
    render() {
        return (
            <GuildLayout title="대시보드">
                <div className="card-columns">
                    <div className="card">
                        <div className="card-body">
                            <div className="h4">서버 정보</div>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>멤버 수</th>
                                    <th>뭐넣지</th>
                                    <th>뭐넣지</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>123</td>
                                    <td>456</td>
                                    <td>789</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="h4">최근 활동</div>
                            <small>봇이 온라인일때의 활동만 표시해요!</small>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>날짜</th>
                                    <th>내용</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>2020-11-29</td>
                                    <td>채널 "ㅁㄴㅇㄹ" 생성</td>
                                </tr>
                                <tr>
                                    <td>2020-11-29</td>
                                    <td>역할 "ㅁㄴㅇㄹ" 생성</td>
                                </tr>
                                <tr>
                                    <td>2020-11-29</td>
                                    <td>채널 "ㅁㄴㅇㄹ" 제거</td>
                                </tr>
                                <tr>
                                    <td>2020-11-29</td>
                                    <td>역할 "ㅁㄴㅇㄹ" 제거</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="h4">멤버 수 통계</div>
                            <Line data={{
                                labels: ['2020-11-29', '2020-11-30', '2020-12-01', '2020-12-02', '2020-12-03', '2020-12-04', '2020-12-05', '2020-12-06', '2020-12-07', '2020-12-08'],
                                datasets: [{
                                    label: '멤버 수',
                                    fill: false,
                                    data: [
                                        rand(),
                                        rand(),
                                        rand(),
                                        rand(),
                                        rand(),
                                        rand(),
                                        rand(),
                                        rand(),
                                        rand(),
                                        rand()
                                    ],
                                }]
                            }}/>
                        </div>
                    </div>
                </div>
            </GuildLayout>
        );
    }
}

export default DashboardView;
