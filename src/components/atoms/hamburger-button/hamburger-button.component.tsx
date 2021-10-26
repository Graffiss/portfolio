import { FC } from "react"
import { useUI } from "../../../context/ui.context"
import { StyledHamburgerButton, StyledSpan } from "./hamburger-button.styled"

const HamburgerButton: FC = () => {
  const { toggleBurgerMenu } = useUI()
  return (
    <StyledHamburgerButton onClick={toggleBurgerMenu}>
      <StyledSpan />
      <StyledSpan />
      <StyledSpan />
    </StyledHamburgerButton>
  )
}

export default HamburgerButton
