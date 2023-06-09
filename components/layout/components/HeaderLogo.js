import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <Logo>HamDard</Logo>
  )
}

const Logo = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin-left: 11px;
  font-family: 'sans-serif';
  letter-spacing: 3px;
  cursor: pointer;
`

export default HeaderLogo