import React from "react"
import styled from "styled-components"
import StackList from "../components/organisms/stack-list/stack-list.component"

const StyledWrapper = styled.div`
  grid-area: content;
  padding: 20px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StackView = () => (
  <StyledWrapper>
    <StyledGrid>
      <StackList />
    </StyledGrid>
  </StyledWrapper>
)

export default StackView
