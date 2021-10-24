import styled from "styled-components"

export const StyledHamburgerButton = styled.button`
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
  display: none;

  @media (max-width: 1100px) {
    display: initial;
    margin: 10px;
    margin: 0 10px;
  }
`

export const StyledSpan = styled.span`
  padding: 2px 15px;
  background: ${({ theme }) => theme.darkRed};
  margin: 5px 0px;
  display: block;
  transition: all 0.5s ease;
`
