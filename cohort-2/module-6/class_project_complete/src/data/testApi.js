const axios = require("axios")
const MockAdapter = require("axios-mock-adapter")
const mock = new MockAdapter(axios)
const { testData } = require("./testData")

/**
 * This file represents the entire API that will be accessible
 * on the backend. Please note that refreshing the browser will
 * reset the below data. For example, if you add items to the
 * cart, then refresh the browser, your cart will be empty.
 *
 * To enable the mock API, make sure line 7 in index.js not
 * commented out. Conversely, to disable the mock API and use
 * the real one, comment out line 7 in index.js.
 */

const testDataCartItemSubset = [
  {
    id: "transported-away",
    quantity: 1,
  },
  {
    id: "waterfall-retreat",
    quantity: 1,
  },
]

let db = {
  items: testData,
}

let sessionData = {
  cart: {
    items: [],
  },
}

/**
 * Helpers
 */

const getCart = (test) => {
  const itemsInCart = sessionData.cart.items
    .concat(test ? testDataCartItemSubset : [])
    .map((cartItem) => {
      const item = db.items.find((dbItem) => dbItem.id === cartItem.id)
      return {
        ...cartItem,
        name: item.name,
        price: item.price,
        thumbnail: item.thumbnail,
      }
    })
  const cartResponse = {
    ...(test ? { mockApi: true } : {}),
    items: itemsInCart,
  }
  return cartResponse
}

/**
 * PRODUCT
 */

mock.onGet("/api/product-search").reply((config) => {
  const { query, filterBy, sortBy } = config.params

  let itemsToReturn = db.items
  if (query) {
    const regex = new RegExp(query, "ig")
    itemsToReturn = itemsToReturn.filter((i) => {
      return i.name.match(regex) || i.description.match(regex)
    })
  }

  let filteredItemsToReturn = itemsToReturn
  if (filterBy) {
    filteredItemsToReturn = filteredItemsToReturn.filter(
      (i) => i.attributes.indexOf(filterBy) >= 0
    )
  }

  let sortedItemsToReturn = filteredItemsToReturn

  switch (sortBy) {
    case "best-selling":
      sortedItemsToReturn = sortedItemsToReturn.sort(
        (a, b) => b.rating - a.rating
      )
      break
    case "price-ascending":
      sortedItemsToReturn = sortedItemsToReturn.sort(
        (a, b) => a.price - b.price
      )
      break
    case "price-descending":
      sortedItemsToReturn = sortedItemsToReturn.sort(
        (a, b) => b.price - a.price
      )
      break
    default:
    // allow pass-thru
  }
  return [200, { items: sortedItemsToReturn }]
})

mock.onGet("/api/product").reply((config) => {
  const { id } = config.params
  const item = db.items.find((i) => i.id === id)
  return [200, item]
})

/**
 * CART
 */

mock.onGet("/api/cart").reply((config) => {
  const params = config.params || {}
  const cart = getCart(params.test)
  return [200, cart]
})

mock.onPut("/api/cart-add").reply((config) => {
  const data = JSON.parse(config.data)
  const { quantity, id } = data
  const itemInCart = sessionData.cart.items.find((i) => i.id === id)
  if (itemInCart) {
    sessionData.cart.items = sessionData.cart.items.map((i) => {
      if (i.id === id) {
        i.quantity = i.quantity + quantity
      }
      return i
    })
  } else {
    sessionData.cart.items.push({ id, quantity })
  }
  const cart = getCart()
  return [200, cart]
})

mock.onPut("/api/cart-remove").reply((config) => {
  const data = JSON.parse(config.data)
  const { quantity = 0, id, removeAll } = data
  const itemInCart = sessionData.cart.items.find((i) => i.id === id)
  if (removeAll || (itemInCart && itemInCart.quantity - quantity <= 0)) {
    sessionData.cart.items = sessionData.cart.items.filter((i) => i.id !== id)
  } else if (itemInCart) {
    sessionData.cart.items = sessionData.cart.items.map((i) => {
      if (i.id === id) {
        i.quantity = i.quantity - quantity
      }
      return i
    })
  }
  const cart = getCart()
  return [200, cart]
})

/**
 * CONSOLE
 */

console.log(
  "%c Using mock API ",
  "background: #222; color: lightgreen; padding: 5px;"
)
