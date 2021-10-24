import styled from "styled-components"

export const StyledMenu = styled.div`
  grid-area: burger;
  width: 70vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
