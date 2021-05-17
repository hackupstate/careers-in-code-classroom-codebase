import React from "react"
import "./SearchPageOption.scss"

/**
 * This component is used for the Filter By and Sort By options
 * in the options row of the search page.
 */

export const SearchPageOption = (props) => {
  return (
    <div className="SearchPageOption d-flex col-6 col-md-3">
      <div className="SearchPageOption__Text d-none d-md-flex">
        {props.text}
      </div>
      <select
        className="SearchPageOption__Select"
        value={props.value}
        onChange={(e) => {
          props.onChange && props.onChange(e.target.value)
        }}
      >
        {(props.options || []).map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}
