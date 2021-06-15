import "./SearchInput.scss"

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export const SearchInput = (props) => {
  return (
    <div className="SearchInput">
      <input className="SearchInput__Input" name={props.name} />
      <button className="SearchInput__Button" type="submit">
        <Icon className="SearchInput__Icon" icon={faSearch} />
      </button>
    </div>
  )
}
