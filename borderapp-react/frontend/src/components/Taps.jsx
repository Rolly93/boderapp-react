import React from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = React.useState('seguimiento'); // State for active tab

    return (
        <div className="tabs-container">
            <button
                className={`tab-button ${activeTab === 'seguimiento' ? 'active' : ''}`}
                onClick={() => setActiveTab('seguimiento')}
            >
                Seguimiento
            </button>
            <button
                className={`tab-button ${activeTab === 'datosGenerales' ? 'active' : ''}`}
                onClick={() => setActiveTab('datosGenerales')}
            >
                Datos Generales
            </button>
            {/* Placeholder for the rest of the tab bar to fill space */}
            <div className="tabs-filler"></div>
        </div>
    );
};

export default Tabs;
