import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { HomePage } from "../HomePage/HomePage"
import { SearchPage } from "../SearchPage/SearchPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export const Layout = (props) => {
  return (
    <Router>
      <div className="Layout">
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}
