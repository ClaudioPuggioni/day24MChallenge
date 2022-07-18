import styled from "styled-components";

let NavBarItemStyle = styled.div`
  margin: 12px 10px;
`;

function NavbarItem(props) {
  return (
    <NavBarItemStyle>
      <div className="navbarItem">{props.text}</div>
    </NavBarItemStyle>
  );
}

export default NavbarItem;
