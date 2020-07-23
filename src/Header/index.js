import React from 'react';
import "./style.css";

const Header = ({ title }) => (
  <header>
    <h1 className="container__header">{title}</h1>
  </header>
);

export default Header;