import styled from 'styled-components';

const ButtonStack = styled.button`
  display: block;
  width: 200px;
  height: 200px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  background-color: ${({ theme }) => theme.body};
  border: 3px solid ${({ theme }) => theme.lightRed};
  border-radius: 50px;

  &:hover {
    border: 3px solid ${({ theme }) => theme.darkRed};
    box-shadow: 10px 10px 0 ${({ theme }) => theme.darkRed};
    border: 3px solid ${({ theme }) => theme.darkRed};
    background-image: none;

    &:before {
      content: attr(data-content);
      color: ${({ theme }) => theme.lightRed};
      font-weight: 600;
      font-size: 25px;
    }
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

`;

export default ButtonStack;
