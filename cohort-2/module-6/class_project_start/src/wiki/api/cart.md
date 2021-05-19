# Cart API Endpoints

This document outlines the technical specifications for the cart API endpoints. **All** cart endpoints should return the updated cart.

## /api/cart **GET**

Returns an object that represents the current state of the cart

### Backend implementation

- Create a list of objects for the user session that only store the product `id` and `quantity`. When the user is ready to call the cart endpoints, use this list to construct the actual output.
- For the output, construct the cart items array using the unique ids in the current session. See the View Model for the shape of the items in the array.

### Frontend implementation

- Calling **any** cart endpoint will always return a copy of the newly updated cart. Use this copy to update your local component state so that you're always presenting an accurate representation of the cart to the user.
- You can pass the optional `test` param set to `true` to receive an example cart item list. This is for UI development purposes only and will not work well combined with real user interactions.

### cart GET Input Model

```js
{
  /* Determines if test data should be returned (FE only, BE ignores this)
    - type: boolean; */
  test: true
}
```

### cart GET View Model

```js
{
  /* A list of items currently stored in the cart
    - type: object[] */
  items: [
    {
      /* The product's unique id in the database
        - type: string; */
      id: 'some-unique-id',

      /* The product name
        - type: string; */
      name: 'Some Product',

      /* The product price
        - type: number; */
      price: 200,

      /* The current quantity of the product stored in the cart
        - type: number; */
      quantity: 1,

      /* The thumbnail image src and alt text
        - type: object */
      thumbnail: {
        /* Image source url
          - type: string; */
        src: '/some-url',

        /* Alt text for accessibility
          - type: string; */
        alt: 'Some Image',
      }
    },

    ...
  ]
}
```

---

## /api/cart-add **PUT**

Returns an object that represents the current state of the cart

### Backend implementation

- Use the incoming `id` and `quantity` params to locate and update the quantity for a given item in the cart items list. If the item is not yet in the cart, create an entry in the cart items list and update the quantity with the param passed in.
- For the output, construct the cart items array using the unique ids in the current session. See the View Model for the shape of the items in the array.

### Frontend implementation

- Calling **any** cart endpoint will always return a copy of the newly updated cart. Use this copy to update your local component state so that you're always presenting an accurate representation of the cart to the user.
- Send the product `id` and user-selected `quantity` to the endpoint.

### cart-add PUT Input Model

```js
{
  /* The product id
    - type: string; */
  id: 'some-unique-id',

  /* The item quantity to be updated in the cart
    - type: number */
  quantity: 1,
}
```

### cart-add PUT View Model

See View Model for `/api/cart` GET

---

## /api/cart-remove **PUT**

Returns an object that represents the current state of the cart

### Backend implementation

- Use the incoming `id` and `quantity` params to locate and update the quantity for a given item in the cart. If the item's current quantity will drop to/below zero, then remove the given item entry completely from the cart items list. If the user passes in the optional `removeAll` param _(meaning remove all **quantity** of a given item, **not** remove all items in the cart)_, remove the given item entry completely from the cart items list.
- For the output, construct the cart items array using the unique ids in the current session. See the View Model for the shape of the items in the array.

### Frontend implementation

- Calling **any** cart endpoint will always return a copy of the newly updated cart. Use this copy to update your local component state so that you're always presenting an accurate representation of the cart to the user.
- Send the product `id` and user-selected `quantity` to the endpoint.
- Also sending along the `removeAll` param set to `true` will remove that product from the cart and its quantity completely.

### cart-remove PUT Input Model

```js
{
  /* The product id
    - type: string; */
  id: 'some-unique-id',

  /* The item quantity to be updated in the cart
    - type: number */
  quantity: 1,

  /* [Optional] When true, removes all quantity of the given item from the cart
    - type: boolean; */
  removeAll: true,
}
```

### cart-remove PUT View Model

See View Model for `/api/cart` GET
