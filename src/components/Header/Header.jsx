import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h2>Logo</h2>
      <div className="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
}

export default Header;
