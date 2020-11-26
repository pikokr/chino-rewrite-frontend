import React, { Component } from 'react';
import Layout from '../../components/Layout';
import {withState} from "../../store";

class Home extends Component {
    render() {
        return (
            <Layout>
                {JSON.stringify(this.props.clusters)}
            </Layout>
        );
    }
}

export default withState(Home);