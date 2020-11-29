import React, { Component } from 'react';
import Header from './Header';

class Layout extends Component {
    render() {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Header offset={this.props.offset || 70}/>
                <main style={{flexGrow: 2}}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;