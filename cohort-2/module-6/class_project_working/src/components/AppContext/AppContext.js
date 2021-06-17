import { createContext, useContext } from "react"

export const Context = createContext({})

const initialStore = {
  username: "Joey",
  theme: "light",
}

const AppContextProvider = Context.Provider

// EXPORTS

export const AppStore = (props) => {
  return (
    <AppContextProvider value={initialStore}>
      {props.children}
    </AppContextProvider>
  )
}

export const AppStoreConsumer = Context.Consumer

export const useAppStore = () => {
  return useContext(Context)
}
