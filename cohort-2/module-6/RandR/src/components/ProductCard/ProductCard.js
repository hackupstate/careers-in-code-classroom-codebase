import React from "react"
import "./ProductCard.scss"
import { convertToPrice } from "../../utils/prices"
import { Link } from "react-router-dom"

/**
 * This component is displayed on the main search results page.
 */

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
        <div className="ProductCard__Name">
          <Link to={`/products/${props.item.id}`} className="ProductCard__Link">
            {props.item.name} ({props.item.rating})
          </Link>
        </div>
        <div className="ProductCard__Price">
          {convertToPrice(props.item.price)}
        </div>
      </div>
    </div>
  )
}
