import { createContext, useContext, useReducer } from "react"

import { UPDATE_USERNAME, TOGGLE_THEME } from "./actions"

const STORE_CONTEXT = createContext([{}, () => {}])

const initialState = {
  username: "default username",
  theme: "light",
}

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload,
      }

    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      }

    default:
      return state
  }
}

export const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <STORE_CONTEXT.Provider value={[state, dispatch]}>
      {props.children}
    </STORE_CONTEXT.Provider>
  )
}

export const useStore = () => useContext(STORE_CONTEXT)
