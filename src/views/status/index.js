import React, {Component} from 'react';
import {withState} from "../../store";

class StatusView extends Component {
    render() {
        const {clusters} = this.props

        return (
            <div>
            </div>
        );
    }
}

export default withState(StatusView);