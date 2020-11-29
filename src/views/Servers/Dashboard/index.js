import React, {Component} from 'react';
import GuildLayout from "../../../components/GuildLayout";

class DashboardView extends Component {
    render() {
        return (
            <GuildLayout title="대시보드">
                <div className="row g-2 row-cols-1 row-cols-lg-2">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="h4">서버 정보</div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>멤버 수</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>123</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col">
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
                    </div>
                </div>
            </GuildLayout>
        );
    }
}

export default DashboardView;