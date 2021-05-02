import React, { useState, useEffect } from "react"
import "./ProductDetailPage.scss"
import { convertToPrice } from "../../utils/prices"
import { useParams } from "react-router-dom"
import axios from "axios"

import { ProductMediaViewer } from "./ProductMediaViewer"
import { ProductQuantity } from "../ProductQuantity/ProductQuantity"
import { RichText } from "../RichText/RichText"
import { Toast, showToast } from "../Toast/Toast"

// Test data
// import items from "../../data/testData"

// Bonus custom hook for extracting the GET request for product data
// This can be exported from a util file and imported into any component
const useProduct = (id, callback) => {
  useEffect(() => {
    axios
      .get("/api/product", { params: { id } })
      .then((response) => callback(response.data))
  }, [])
}
// An alternate pattern for performing async functionality using async/await
const useProductAltPattern = (id, callback) => {
  async function getProduct() {
    const response = await axios.get("/api/product", { params: { id } })
    callback(response.data)
  }
  useEffect(() => {
    getProduct()
  }, [])
}

export const ProductDetailPage = (props) => {
  let { id } = useParams()
  const [item, setItem] = useState(null)
  const [quantity, setQuantity] = useState(1)

  // When component mounts, fetch the current product based on
  // the "id" query parameter in the URL
  useEffect(() => {
    axios.get("/api/product", { params: { id } }).then((response) => {
      setItem(response.data)
    })
    // const currentItem = items.find((i) => i.id === id)
    // setItem(currentItem)
  }, [])

  // Bonus method for fetching async data with hooks.
  // Uncomment one of the below lines of code, and comment out the above useEffect.
  // useProduct(id, setItem)
  // useProductAltPattern(id, setItem)

  // Do not render PDP without an product/item
  if (!item) {
    return null
  }

  return (
    <div className="ProductDetailPage">
      <div className="row ml-3 mr-3 mt-4 mt-md-5">
        <div className="col-md-6">
          <ProductMediaViewer media={item.media} />
        </div>
        <div className="col-md-6">
          <div className="ProductDetailPage__Name">{item.name}</div>
          <div className="ProductDetailPage__Price">
            {convertToPrice(item.price)}
          </div>
          <div className="ProductDetailPage__ActionsRow d-block d-md-flex align-items-md-end mb-4">
            <ProductQuantity
              quantity={quantity}
              handleIncrease={() => {
                setQuantity(quantity + 1)
              }}
              handleDecrease={() => {
                setQuantity(quantity <= 1 ? 1 : quantity - 1)
              }}
            />
            <button
              className="ProductDetailPage__AddToCartButton btn btn-primary mt-3 ml-md-3"
              onClick={() => {
                axios
                  .put("/api/cart-add", { id: item.id, quantity })
                  .then((response) => {
                    showToast("Added to cart")
                  })
              }}
            >
              Add to Cart
            </button>
          </div>
          <div className="ProductDetailPage__Description">
            <div className="ProductDetailPage__DescriptionLabel">
              The Details
            </div>
            <RichText text={item.description} />
          </div>
        </div>
      </div>
      <Toast />
    </div>
  )
}
