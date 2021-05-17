import React, { useState } from "react"
import "./HomePage.css"

/**
 * This file is an example component with the api testing call.
 */

import axios from "axios"

export const HomePage = (props) => {
  const [apiData, setApiData] = useState(null)
  const [success, setSuccess] = useState(false)

  return (
    <div className="HomePage">
      <div className="HomePage__Heading">Home Page</div>
      <div className="row">
        <div className="col-10 col-md-8 offset-1 offset-md-2">
          <button
            className="HomePage__TestButton btn btn-primary"
            onClick={() => {
              /**
               * In order for the following api call to succeed,
               * make sure that the Mock API is enabled.
               * See index.js for more information.
               */
              axios
                .get("/api/cart", { params: { test: true } })
                .then((response) => {
                  setApiData(response.data)
                  setSuccess(true)
                })
                .catch((e) => {
                  setApiData(e.message)
                  setSuccess(false)
                })
            }}
          >
            Click to test API connection
          </button>
        </div>
        <div className="col-10 col-md-8 offset-1 offset-md-2">
          <pre className={!success ? "red" : ""}>
            {JSON.stringify(apiData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
