import React from "react"
import "./Header.scss"

/**
 * This file contains the header, which has the main navigation links.
 */

import { Link } from "react-router-dom"

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export const Header = (props) => {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          RandR
        </Link>

        <div className="d-flex flex-row d-md-none ml-auto mr-4">
          <Link className="mr-3 icon-link" to="/search">
            <Icon icon={faSearch} />
          </Link>
          <Link className="icon-link" to="/cart">
            <Icon icon={faShoppingCart} />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#hamburger"
          aria-controls="hamburger"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="hamburger">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item mr-md-5">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ml-md-5 mr-md-5">
              <Link className="nav-link" to="/search">
                Shop
              </Link>
            </li>
            <li className="nav-item ml-md-5">
              <Link className="nav-link" to="/wiki">
                Wiki
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-md-block">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                <Icon icon={faSearch} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <Icon icon={faShoppingCart} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
