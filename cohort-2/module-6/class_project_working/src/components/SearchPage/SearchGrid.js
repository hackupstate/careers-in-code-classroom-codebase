import "./SearchGrid.scss"
import { ProductCard } from "../ProductCard/ProductCard"

export const SearchGrid = (props) => {
  if (!props.items) {
    return null
  }

  return (
    <div className="SearchGrid">
      <div className="row pl-4 pl-md-5 pr-4 pr-md-5">
        {props.items.map((item) => (
          <div key={item.id} className="col-6 col-md-3 mb-3">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
