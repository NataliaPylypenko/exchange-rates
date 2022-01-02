import React from 'react';
import './Nav.scss';
import {NavLink} from "react-router-dom";


class Nav extends React.Component {
    render() {
        let nav = this.props.nav;

        return (
            <nav>
                <ul>
                    {Object.keys(nav).map(elem => {
                        return <li><NavLink to={elem}>{nav[elem]}</NavLink></li>;
                    })}
                </ul>
            </nav>
        );
    }
}



export default Nav;