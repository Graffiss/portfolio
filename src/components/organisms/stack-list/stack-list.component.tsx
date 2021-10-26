import { FC } from "react"
import ButtonStack from "../../atoms/button-stack/button-stack.styled"
import { stack } from "./stack-list.constant"

const StackList: FC = () => {
  return (
    <>
      {stack.map(({ id, name, icon }) => (
        <ButtonStack key={id} data-content={name} icon={icon} />
      ))}
    </>
  )
}

export default StackList
