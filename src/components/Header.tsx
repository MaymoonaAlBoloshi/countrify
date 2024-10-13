import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';  // Import icons

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="header">
      <div className="header-content">
        <h2>Where in the world?</h2>
        <div className="theme-toggle">
          <button onClick={toggleMode} className="mode-button">
            {darkMode ? (
              <>
                <FontAwesomeIcon icon={faSun}/> Light Mode
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faMoon}/> Dark Mode
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;