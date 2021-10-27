import { StyledGrid, StyledWrapper } from "components/pages/stack/stack.styled"
import StackList from "../components/organisms/stack-list/stack-list.component"

const StackView = () => (
  <StyledWrapper>
    <StyledGrid
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.005 } } }}
    >
      <StackList />
    </StyledGrid>
  </StyledWrapper>
)

export default StackView
