import styled from "styled-components"

export const StyledMenu = styled.div<{ opened: boolean }>`
  grid-area: burger;
  position: absolute;
  width: 100vw;
  max-width: 900px;
  height: 100vh;
  max-height: calc(100vh - var(--height) - 1px);
  top: 0px;
  left: ${({ opened }) => (opened ? 0 : "calc(-100vw);")};
  transition: left 0.3s linear;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 0.5);
  overflow: auto;
  box-sizing: border-box;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .active:after {
    display: block;
    content: "";
    border-bottom: solid 5px ${({ theme }) => theme.darkRed};
    transform: scaleX(1);
    transition: transform 250ms ease-in-out;
  }
`

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: center;

  li {
    padding: 20px 0;
    text-transform: uppercase;
  }
`
