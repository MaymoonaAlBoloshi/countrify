import React, { useState } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="header">
      <h2>Where in the world?</h2>
      <div className="theme-toggle">
        <button onClick={toggleMode} className="mode-button">
          {darkMode ? (
            <>
              <span className="icon">🌞</span> Light Mode
            </>
          ) : (
            <>
              <span className="icon">🌑</span> Dark Mode
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
