import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0;
  background-color: #9e2b35;
  box-shadow: 5px 5px #db3340;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 22px;
  width: 182px;
  height: 58px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;

  :hover {
    transform: translateY(-3px);
  }

  ${({ big }) =>
    big &&
    css`
      width: 302px;
      height: 96px;
      font-size: 32px;
    `}
`;

export default Button;
