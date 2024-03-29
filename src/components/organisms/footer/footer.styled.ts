import styled from "styled-components"

export const StyledGrid = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "footerStriped footerSocial"
    "footerBottom footerBottom";

  div {
    &.footerStriped {
      grid-area: footerStriped;
      background: repeating-linear-gradient(
        45deg,
        #9e2b35,
        #9e2b35 17px,
        #ff4656 17px,
        #ff4656 20px
      );
      border: 0.5px solid #707070;
    }

    &.footerSocial {
      grid-area: footerSocial;
      background-color: #ff4656;
      box-shadow: 0 7px 0 #9e2b35;
      border: 0.5px solid #707070;
      z-index: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 90px;

      @media (max-width: 768px) {
        padding-right: 20px;
      }
    }

    &.footerBottom {
      grid-area: footerBottom;
      background-color: #db3340;
    }
  }
`
