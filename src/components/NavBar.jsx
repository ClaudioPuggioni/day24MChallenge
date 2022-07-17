import React from "react";
import NavbarItem from "./NavBarItem";
import styled from "styled-components";

const NavHeader = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: flex-end;
`;

const Navbar = () => {
  return (
    <NavHeader>
      <NavbarItem text={"Home"} />
      <NavbarItem text={"About"} />
      <NavbarItem text={"Contact"} />
    </NavHeader>
  );
};

export default Navbar;
