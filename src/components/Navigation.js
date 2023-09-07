import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render () {
        return (
            <div className='navigation'>
                <ul>
                    <NavLink to="/parking">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/parking/about">
                        <li>A propos</li>
                    </NavLink>
                </ul>
            </div>
    );
    }
};

export default Navigation;