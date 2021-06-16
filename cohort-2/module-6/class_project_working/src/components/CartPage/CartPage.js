import { useEffect, useState } from "react"
import "./CartPage.scss"
import axios from "axios"
import { ImageMedia } from "../ImageMedia/ImageMedia"
import { convertToPrice } from "../../utils/prices"
import { ProductQuantity } from "../ProductQuantity/ProductQuantity"

const RemoveButton = (props) => {
  return (
    <button
      className="CartPage__RemoveButton"
      onClick={() => {
        axios
          .put("/api/cart-remove", { id: props.id, removeAll: true })
          .then((response) => {
            const updatedCart = response.data
            props.handleSuccess(updatedCart)
          })
      }}
    >
      Remove
    </button>
  )
}

export const CartPage = (props) => {
  const [cart, setCart] = useState({ items: [] })

  useEffect(() => {
    axios.get("/api/cart", { params: { test: false } }).then((response) => {
      const initialCart = response.data
      setCart(initialCart)
    })
  }, [])

  /**
   * Reduce the cart items and return the accumulated subtotal
   */
  const cartTotal = cart.items.reduce((total, nextItem) => {
    return nextItem.price * nextItem.quantity + total
  }, 0)

  return (
    <div className="CartPage pl-5 pr-5 mb-5">
      <div className="CartPage__Heading mt-4 mb-0 mb-md-3">Your Cart</div>
      <div className="CartPage__ItemHeadings row">
        <div className="d-none d-md-block col-5">PRODUCT</div>
        <div className="d-none d-md-block col-2">PRICE</div>
        <div className="d-none d-md-block col-3">QUANTITY</div>
        <div className="d-none d-md-block col-2">TOTAL</div>
      </div>
      {cart.items.map((item) => (
        <div
          key={item.id}
          className="CartPage__LineItemRow row pt-3 pb-3 pt-md-4 pb-md-5"
        >
          <div className="col-md-5 d-flex">
            <div className="CartPage__LineItemThumbnail">
              <ImageMedia isThumbnail {...item.thumbnail} />
            </div>
            <div className="d-flex flex-md-column justify-content-md-between">
              <div className="CartPage__LineItemName">{item.name}</div>
              <div className="d-none d-md-flex">
                <RemoveButton id={item.id} handleSuccess={setCart} />
              </div>
            </div>
          </div>

          <div className="CartPage__LineItemPrice col-md-2 d-flex justify-content-end justify-content-md-start">
            {convertToPrice(item.price)}
          </div>

          <div className="col-md-3 d-flex justify-content-between pt-2 pb-2">
            <div className="d-md-none">
              <RemoveButton id={item.id} handleSuccess={setCart} />
            </div>
            <div>
              <ProductQuantity
                hideLabel
                quantity={item.quantity}
                handleIncrease={() => {
                  axios
                    .put("/api/cart-add", { id: item.id, quantity: 1 })
                    .then((response) => {
                      const updatedCart = response.data
                      setCart(updatedCart)
                    })
                }}
                handleDecrease={() => {
                  axios
                    .put("/api/cart-remove", { id: item.id, quantity: 1 })
                    .then((response) => {
                      const updatedCart = response.data
                      setCart(updatedCart)
                    })
                }}
              />
            </div>
          </div>

          <div className="CartPage__LineItemPrice col-md-2 d-flex justify-content-end justify-content-md-start">
            {convertToPrice(item.quantity * item.price)}
          </div>
        </div>
      ))}

      <div className="row">
        <div className="d-none d-md-block col-md-7"></div>
        <div className="col-6 col-md-3 pt-3 pb-1">Subtotal</div>
        <div className="CartPage__Subtotal col-6 col-md-2 d-flex justify-content-end justify-content-md-start pt-3 pb-1">
          {convertToPrice(cartTotal)}
        </div>
        <div className="CartPage__SubtotalDisclaimer col-12 col-md-5 offset-md-7 pb-3">
          Taxes and shipping calculated at checkout
        </div>
        <div className="d-none d-md-block col-md-7"></div>
        <div className="col-md-5">
          <button
            className="CartPage__CheckoutButton btn btn-primary"
            disabled={cart.items.length <= 0}
            onClick={() => {
              alert("Continuing to Checkout...")
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
