import { FC } from "react"
import ButtonStack from "../../atoms/button-stack/button-stack.styled"
import { stack } from "./stack-list.constant"

const transition = { ease: [0.43, 0.13, 0.23, 0.96] }

const stackVariants = {
  initial: { scale: 0.5, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.5, ...transition },
  },
}

const StackList: FC = () => {
  return (
    <>
      {stack.map(({ id, name, icon }) => (
        <ButtonStack
          key={id}
          data-content={name}
          icon={icon}
          variants={stackVariants}
        />
      ))}
    </>
  )
}

export default StackList
