import React from 'react';

const SearchOperationBar = () => {
    return (
        <div className="search-operation-bar">
            <div className="search-input-wrapper">
                <input
                    type="text"
                    placeholder="Ingresa SR, Referencia o No. Embarque"
                    className="search-input"
                />
                <div className="search-icon-container">
                    <svg className="search-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>

            <h1 className="operation-title">Border Crossing Tracker</h1>

            {/* Action Buttons */}
            <div className="search-action-buttons">
                <button className="search-action-button">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005 7V5a1 1 0 012 0v2a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 112 0v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005 7V5a1 1 0 012 0v2a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 112 0z" clipRule="evenodd"></path>
                    </svg>
                    Actualizar
                </button>
  
                <button className="search-action-button">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd"></path>
                    </svg>
                    Filtrar
                </button>
       
            </div>
        </div>
    );
};

export default SearchOperationBar;
