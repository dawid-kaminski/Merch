import React from 'react';
import Logo from '../assets/logo.png'
import './Header.css';

function Header() {
  return(
    <div className="header">
      <div className="header__img">
        <img src={Logo} />
      </div>
      <div className="header__options">
        <div className="header__step--button">
          <button>
            Step 1
          </button>
        </div>
        <div className="header__step--button">
          <button>
            Step 2
          </button>
        </div>
        <div className="header__step--button">
          <button>
            Step 3
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;