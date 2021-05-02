import React from "react"
import "./ProductQuantity.scss"

/**
 * Reusable quantity adjustment component. Pass in a function to the
 * handleIncrease and handleDecrease props to apply the change
 * whereever you'd like in the app.
 */

export const ProductQuantity = (props) => {
  return (
    <div className="ProductQuantity">
      <div className="d-flex flex-md-column justify-content-between align-items-center align-items-md-start">
        {!props.hideLabel && (
          <div className="ProductQuantity__Label mr-3">Quantity</div>
        )}
        <div className="ProductQuantity__Box d-flex justify-content-between">
          <div
            className="ProductQuantity__Increase"
            onClick={props.handleIncrease}
          >
            +
          </div>
          <div className="ProductQuantity__Quantity">{props.quantity}</div>
          <div
            className="ProductQuantity__Decrease"
            onClick={props.handleDecrease}
          >
            -
          </div>
        </div>
      </div>
    </div>
  )
}
