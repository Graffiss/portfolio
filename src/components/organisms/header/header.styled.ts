import styled from "styled-components"

export const StyledHeader = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 150px 1fr 52px;
  grid-template-areas: "logo nav toggle";
  align-items: center;
  padding: 0 80px;

  h3 {
    grid-area: logo;
    color: ${({ theme }) => theme.darkRed};
    font-family: "Abril Fatface", cursive;
    font-size: 30px;
  }

  @media (max-width: 900px) {
    padding: 0 20px;
    grid-template-columns: 50px 1fr 52px;
    grid-template-areas: "burger logo toggle";
  }
`
