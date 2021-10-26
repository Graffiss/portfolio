import styled from "styled-components"

export const MainLayout = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-gap: 10px;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    grid-template-rows: 70px 1fr 70px;
    grid-gap: 0;
  }
`
