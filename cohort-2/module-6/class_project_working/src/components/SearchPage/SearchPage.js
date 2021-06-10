import axios from "axios"
import { useEffect, useState } from "react"

import { SearchGrid } from "./SearchGrid"

export const SearchPage = (props) => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    axios
      .get("/api/product-search", {
        params: {
          query: "",
          filterBy: "",
          sortBy: "",
        },
      })
      .then((response) => {
        setItems(response.data.items)
      })
  }, [])

  return (
    <div>
      <div>Search Input</div>
      <div>Search Options</div>
      <SearchGrid items={items} />
    </div>
  )
}
