import styled from "styled-components"

export const StyledGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: 1fr 2fr 0.25fr 1fr;
  grid-template-columns: 0.5fr 0.5fr 1fr 2fr 1fr;
  background: ${({ theme }) => theme.body};
  height: 100%;
  width: 100%;
  z-index: -2;

  div {
    border-bottom: 1px solid ${({ theme }) => theme.backgroundGrid};
    border-right: 1px solid ${({ theme }) => theme.backgroundGrid};
  }

  .no-right-border {
    border-right: none;
  }

  .no-bottom-border {
    border-bottom: none;
  }
`
