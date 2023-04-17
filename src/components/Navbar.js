import React, { useState, useEffect } from 'react';
import todoLogo from "../assets/todo-app-logo.png";
import darkModeSvg from "../assets/dark-mode.svg";
import lightModeSvg from "../assets/sun-8762.svg";
import "./Navbar.css"; 

function Navbar() {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  return (
    <div className={` navbar ${theme}`}>
      <img
        className="navbar__logo"
        src={todoLogo} alt=""
      />

      <div className="navbar__options">
          <ul>
            <li>Home</li>
            <li>SignIn</li>
            <li>About</li>
            <li>
              <img 
                  onClick={toggleTheme}
                  style={{ width: "1.5rem" }}
                  src={`${theme === "light" ? darkModeSvg : lightModeSvg}`}
                  alt="theme-logo"
              />
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar;
