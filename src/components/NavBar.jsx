import React from "react";
import NavbarItem from "./NavBarItem";
import styled from "styled-components";

const NavHeader = styled.div`
  width: 100%;
  padding-right: 10%;
  display: flex;
  justify-content: flex-end;
  color: white;
  background-color: rgb(55, 55, 55);

  font-size: 13px;
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
