import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0;
  background-color: ${({ theme }) => theme.darkRed};
  box-shadow: 5px 5px ${({ theme }) => theme.lightRed};
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 22px;
  width: 182px;
  height: 58px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;
  outline: none;

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

  @media (max-width: 768px) {
    width: 160px;
    height: 50px;
    font-size: 16px;
  }
`;

export default Button;
