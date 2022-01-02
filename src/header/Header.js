import React from 'react';
import './Header.scss';

import Nav from '../nav/Nav'

class Header extends React.Component {
    render() {
        let nav = this.props.nav;

        return (
            <header>
                <div className="top-bar animate-dropdown"></div>

                <div className="main-header">
                    <div className="container">
                        <h1 className="site-title">Currencies</h1>
                    </div>
                </div>

                <div className="header-nav">
                    <div className="container">
                        <Nav nav={nav} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
