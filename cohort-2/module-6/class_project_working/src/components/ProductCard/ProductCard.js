import "./ProductCard.scss"
import { convertToPrice } from "../../utils/prices"
import { Link } from "react-router-dom"

export const ProductCard = (props) => {
  return (
    <div className="ProductCard">
      <div className="ProductCard__ImageWrapper">
        <Link to={`/products/${props.item.id}`} className="ProductCard__Link">
          <img
            className="ProductCard__Image"
            src={props.item.thumbnail.src}
            alt={props.item.thumbnail.alt}
          />
        </Link>
      </div>

      <div className="ProductCard__Details">
        <Link to={`/products/${props.item.id}`} className="ProductCard__Link">
          <div className="ProductCard__Name">
            {props.item.name} ({props.item.rating})
          </div>
        </Link>
        <div className="ProductCard__Price">
          {convertToPrice(props.item.price)}
        </div>
      </div>
    </div>
  )
}
