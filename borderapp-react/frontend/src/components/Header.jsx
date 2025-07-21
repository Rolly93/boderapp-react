import React from 'react';

const Header = () => {
    return (
        <header className="header">
            
            <div className="flex items-center">
                <button className="header-menu-button">
                    &#9776; 
                </button>
             
                <span className="header-logo-text"></span>
            </div>

           
            <nav className="header-nav">
                <a href="#">Track Shipment</a>
                <a href="#" className="flex items-center">
                    <span className="header-contact-icon-wrapper">
                        <svg className="header-contact-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                        </svg>
                    </span>
                    Contacto
                </a>
            </nav>

         
            <div className="header-action-buttons">
                <button className="header-button">
                    INICIO
                </button>
                <button className="header-button">
                    SALIR
                </button>
                <a href="#" className="header-help-link">AYUDANOS A MEJORAR</a>
            </div>
        </header>
    );
};

export default Header;
