import React from 'react';
import LogoJG from '../../../assets/jg-logo.png';
import MenuSite from '../../../assets/menu-icon.png';

import './header.css';

const Header = () => {
    return (
        <header>
            <div className="header_container">
                <div className="header_logo">
                    <img className="menu-image" src={LogoJG} alt="Logo José Galdámez" />
                </div>
                <div className="header_menu">
                    <img className="menu-image" src={MenuSite} alt="Menu del sitio" />
                </div>
            </div>
        </header>
    );
}

export default Header;
