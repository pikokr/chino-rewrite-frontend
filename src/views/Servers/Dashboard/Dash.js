import {Component} from 'react';

class Dash extends Component {
    id = window.location.pathname.split('/')[2]
}

export default Dash;