import styled from "styled-components"

export const StyledWrapper = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px;

  label {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    min-height: calc(100vh - 140px);
  }
`
