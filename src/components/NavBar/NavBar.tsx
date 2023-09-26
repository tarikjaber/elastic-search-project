import React, { FC } from 'react';
import { NavBarWrapper } from './NavBar.styled';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
 <NavBarWrapper data-testid="NavBar">
    NavBar Component
 </NavBarWrapper>
);

export default NavBar;
