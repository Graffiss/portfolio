import React from "react"
import { StyledGrid, StyledWrapper } from "components/pages/stack/stack.styled"
import StackList from "../components/organisms/stack-list/stack-list.component"

const StackView = () => (
  <StyledWrapper>
    <StyledGrid>
      <StackList />
    </StyledGrid>
  </StyledWrapper>
)

export default StackView
