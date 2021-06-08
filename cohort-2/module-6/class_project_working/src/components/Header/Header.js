import { Link } from "react-router-dom"

export const Header = (props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
    </div>
  )
}
