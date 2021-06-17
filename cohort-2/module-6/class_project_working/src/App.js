import { Layout } from "./components/Layout/Layout"
import { Store } from "./store/store"

function App() {
  return (
    <div className="App">
      <Store>
        <Layout />
      </Store>
    </div>
  )
}

export default App
