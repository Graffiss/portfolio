import {
  useContext,
  useReducer,
  createContext,
  FC,
  useCallback,
  useMemo,
} from "react"
import { useNightMode } from "hook/useNightMode.hook"

export interface State {
  displayBurgerMenu: boolean
}

const initialState = {
  displayBurgerMenu: false,
}

type Action =
  | {
      type: "OPEN_BURGER_MENU"
    }
  | {
      type: "CLOSE_BURGER_MENU"
    }

export const UIContext = createContext<State | any>(initialState)

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_BURGER_MENU": {
      return {
        ...state,
        displayBurgerMenu: true,
      }
    }
    case "CLOSE_BURGER_MENU": {
      return {
        ...state,
        displayBurgerMenu: false,
      }
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)
  const [nightMode, toggleTheme] = useNightMode()

  const openBurgerMenu = useCallback(
    () => dispatch({ type: "OPEN_BURGER_MENU" }),
    [dispatch]
  )

  const closeBurgerMenu = useCallback(
    () => dispatch({ type: "CLOSE_BURGER_MENU" }),
    [dispatch]
  )

  const toggleBurgerMenu = useCallback(
    () =>
      state.displayBurgerMenu
        ? dispatch({ type: "CLOSE_BURGER_MENU" })
        : dispatch({ type: "OPEN_BURGER_MENU" }),
    [dispatch, state.displayBurgerMenu]
  )

  const value = useMemo(
    () => ({
      ...state,
      openBurgerMenu,
      closeBurgerMenu,
      toggleBurgerMenu,
      nightMode,
      toggleTheme,
    }),
    [
      state,
      openBurgerMenu,
      closeBurgerMenu,
      toggleBurgerMenu,
      nightMode,
      toggleTheme,
    ]
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>{children}</UIProvider>
)
