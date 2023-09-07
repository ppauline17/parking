import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render () {
        return (
            <div className='navigation'>
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>A propos</li>
                    </NavLink>
                </ul>
            </div>
    );
    }
};

export default Navigation;