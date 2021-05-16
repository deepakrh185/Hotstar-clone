import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Nav>
      <Logo src="" />
      <NavMenu></NavMenu>
    </Nav>
  );
}       

export default Home;

const Nav = styled.nav`
  display: flex;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div``;
