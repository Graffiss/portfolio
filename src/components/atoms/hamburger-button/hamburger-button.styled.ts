import styled from "styled-components"

export const StyledHamburgerButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;

  @media (max-width: 900px) {
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
