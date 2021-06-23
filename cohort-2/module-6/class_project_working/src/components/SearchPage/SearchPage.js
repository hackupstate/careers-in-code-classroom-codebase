import axios from "axios"
import { useEffect, useState } from "react"
import "./SearchPage.scss"

import { SearchGrid } from "./SearchGrid"
import { SearchInput } from "./SearchInput"
import { SearchPageOption } from "./SearchPageOption"

const filterOptions = [
  { text: "Filters", value: "" },
  { text: "Tour", value: "tour" },
  { text: "Backpacking", value: "backpacking" },
]
const sortOptions = [
  { text: "Best Selling", value: "best-selling" },
  { text: "Price Ascending", value: "price-ascending" },
  { text: "Price Descending", value: "price-descending" },
]
const defaultQuery = ""
const defaultFilterBy = ""
const defaultSortBy = "best-selling"

export const SearchPage = (props) => {
  const [items, setItems] = useState(null)
  const [query, setQuery] = useState(defaultQuery)
  const [filterBy, setFilterBy] = useState(defaultFilterBy)
  const [sortBy, setSortBy] = useState(defaultSortBy)

  useEffect(() => {
    axios
      .get("/api/product-search", {
        params: {
          query,
          filterBy,
          sortBy,
        },
      })
      .then((response) => {
        setItems(response.data.items)
      })
  }, [query, filterBy, sortBy])

  return (
    <div className="SearchPage">
      <div className="SearchPage__ResultsFor">
        {items &&
          query &&
          `${items.length} Result${items.length > 1 ? "s" : ""} for "${query}"`}
      </div>

      <div className="row pl-4 pl-md-0 pr-4 pr-md-0">
        <div className="d-none d-md-block col-md-3" />
        <div className="col-md-6">
          <form
            onSubmit={(event) => {
              event.preventDefault()
              const searchInputValue =
                event.target.querySelector("input[name=query]").value
              setQuery(searchInputValue)
            }}
          >
            <SearchInput name="query" />
          </form>
        </div>
      </div>

      <div className="SearchPage__OptionsRow row pl-4 pl-md-0 pr-4 pr-md-0">
        <div className="col-md-1 d-none d-md-block" />
        <div className="d-flex d-md-none align-items-center justify-content-end col-md-4">
          {(items || []).length} Products
        </div>
        <SearchPageOption
          text="Filter By"
          options={filterOptions}
          value={filterBy}
          onChange={(value) => setFilterBy(value)}
        />
        <SearchPageOption
          text="Sort By"
          options={sortOptions}
          value={sortBy}
          onChange={(value) => setSortBy(value)}
        />
        <div className="d-none d-md-flex align-items-center justify-content-end col-md-4">
          {(items || []).length} Products
        </div>
      </div>

      <SearchGrid items={items} />
    </div>
  )
}
