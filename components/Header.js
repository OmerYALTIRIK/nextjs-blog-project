import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  border: 10px solid #f00;
  padding: 30px;
  background-color: #f00;
  display: flex;
  gap: 20px;

  & span {
    font-size: 30px;
  }
`;

const StyledLink = styled.div`
  color: #fff;
  text-decoration: none;
  border-bottom: ${({ bordersize }) => bordersize}px solid rgba(255,255,255,0.5);
  font-size: ${({ big }) => (big ? "20px" : "12px")};
  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <HeaderDiv>
    <Link href="/" passHref>
      <StyledLink bordersize={20}>Ana Sayfa</StyledLink>
    </Link>

    <Link href="/about" passHref>
      <StyledLink big="true" bordersize={1}>
        Hakkımızda
      </StyledLink>
    </Link>
    <span>Ek açıklamalar</span>
  </HeaderDiv>
);
