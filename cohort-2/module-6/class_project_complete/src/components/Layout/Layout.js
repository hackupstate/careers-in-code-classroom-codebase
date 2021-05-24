import React from "react"
import "./Layout.scss"

/**
 * This file determines the app's overall layout, like where to place the
 * header, footer, and everything in-between.
 */

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Wiki } from "../../wiki/Wiki"
import { HomePage } from "../HomePage/HomePage"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { SearchPage } from "../SearchPage/SearchPage"
import { ProductDetailPage } from "../ProductDetailPage/ProductDetailPage"
import { CartPage } from "../CartPage/CartPage"

export const Layout = (props) => {
  return (
    <Router>
      <div className="Layout">
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/about">
            <div>AboutPage</div>
          </Route>
          <Route path="/products/:id">
            <ProductDetailPage />
          </Route>
          <Route path="/wiki">
            <Wiki />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <div>404 - Not Found</div>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}
