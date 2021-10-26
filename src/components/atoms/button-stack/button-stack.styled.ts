import styled from "styled-components"

const ButtonStack = styled.button<{ icon?: string }>`
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
  outline: none;

  &:hover {
    border: 3px solid ${({ theme }) => theme.darkRed};
    box-shadow: 10px 10px 0 ${({ theme }) => theme.darkRed};
    border: 3px solid ${({ theme }) => theme.darkRed};
    background-image: none;

    @media (max-width: 768px) {
      box-shadow: 4px 4px 0 ${({ theme }) => theme.darkRed};
    }

    &:before {
      content: attr(data-content);
      color: ${({ theme }) => theme.lightRed};
      font-weight: 600;
      font-size: 25px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

export default ButtonStack
