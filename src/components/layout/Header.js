import React from 'react';

const Header = (props) => {
  return (
    <div>
        <nav>
          <div className="logo">
            <h4>comtra</h4>
          </div>
          <ul className="nav-links" >
            <li>
              <a href="/" >Home</a>
            </li>
            <li>
              <a href="/signup">SignUp</a>
            </li>
            <li>
              <a href="/seller">Sell</a>
            </li>
          </ul>
          <div className="header">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
    </div>
  );
}

export default Header;