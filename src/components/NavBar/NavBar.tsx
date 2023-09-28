import React, { FC } from 'react';
import './NavBar.scss';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <div className="NavBar" data-testid="NavBar">
    NavBar Component
  </div>
);

export default NavBar;
