import { render } from "@testing-library/react"
import React, { useState, useEffect } from "react"
import "./Wiki.scss"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"
import "../../node_modules/prismjs/themes/prism.css"
import "../../node_modules/prismjs/themes/prism-okaidia.css"
import axios from "axios"

// Wiki entries
import cartPath from "./api/cart.md"
import productPath from "./api/product.md"

// Markdown renderer helpers
const BlankCodeBlock = ({ value }) => {
  return <pre className="language-">{value || ""}</pre>
}

const CodeBlock = ({ language, value }) => {
  // 1. no language was typed
  // or 2. language doesnt exist
  if (!language || !Prism.languages[language] || !value)
    return <BlankCodeBlock value={value} />

  var html = Prism.highlight(value, Prism.languages[language])
  var cls = "language-" + language

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    </pre>
  )
}

const MenuButton = (props) => {
  return (
    <button
      onClick={() => {
        props.onClick(props.wiki)
      }}
      className="Wiki__MenuButton"
    >
      {props.name}
    </button>
  )
}

const useFetch = (path, cb) => {
  function f() {
    fetch(path)
      .then((r) => r.text())
      .then((r) => cb(r))
  }
  useEffect(() => {
    f()
  }, [])
}

export const Wiki = (props) => {
  const [cart, setCart] = useState("")
  useFetch(cartPath, setCart)

  const [product, setProduct] = useState("")
  useFetch(productPath, setProduct)

  const [currentWiki, setCurrentWiki] = useState(
    "Select an entry to view the technical specifications"
  )

  return (
    <div className="Wiki">
      <div className="Wiki__Heading">Wiki</div>
      <div className="Wiki__Subheading">
        Here you will find all the implementation details for interacting with
        the API endpoints on the back end.
      </div>

      <div className="Wiki__Menu">
        <ul>
          <li>
            <MenuButton
              name="Product API Endpoints"
              wiki={product}
              onClick={setCurrentWiki}
            />
          </li>
          <li>
            <MenuButton
              name="Cart API Endpoints"
              wiki={cart}
              onClick={setCurrentWiki}
            />
          </li>
        </ul>
      </div>

      <div className="Wiki__MarkdownViewer">
        <ReactMarkdown source={currentWiki} renderers={{ code: CodeBlock }} />
      </div>
    </div>
  )
}
