import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className={'Header'}>
            <Link to={'/'} className={'Link'}>Home</Link>
            <Link to={'/projects'} className={'Link'}>Projects</Link>
            <Link to={'/info'} className={'Link'}>Info</Link>
        </div>
    );
};

export default Header;