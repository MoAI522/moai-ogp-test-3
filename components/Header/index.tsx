import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div>Header</div>
      <Link href="/">Top</Link>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  background: lightgray;
`;
