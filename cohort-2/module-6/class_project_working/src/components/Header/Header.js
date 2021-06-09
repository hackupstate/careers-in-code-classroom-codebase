import { Link } from "react-router-dom"
import "./Header.scss"

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export const Header = (props) => {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-md navbar-light bg-light mb-4">
        <Link className="navbar-brand" to="/">
          RandR
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item mr-md-5">
              <Link className="nav-link" aria-current="page" to="/">
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
