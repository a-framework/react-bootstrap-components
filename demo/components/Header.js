import React from 'react';
import {IndexLink, Link} from 'react-router';

export default () => {
    return (
        <header>
            <ul className="nav nav-pills">
                 <li className="nav-item">
                    <IndexLink className="nav-link nav-link-sm" to="/" activeClassName="active">
                        Home
                    </IndexLink>
                 </li>
                 <li className="nav-item">
                    <Link className="nav-link" to="/tabs" activeClassName="active">Tabs</Link>
                 </li>
            </ul>
        </header>
    );
};
