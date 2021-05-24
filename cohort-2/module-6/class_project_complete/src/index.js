import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"

// Uncomment to use mock APIs, comment this out to use actual APIs:
import "./data/testApi"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
