# Product API Endpoints

This document outlines the technical specifications for the product-related API endpoints

## /api/product **GET**

Returns an object that represents the product data

### Backend implementation

- Query the database using the `id` passed in from the user and return the View Model listed below.

### Frontend implementation

- Pass the `id` of the product to retrieve

### product GET Input Model

```js
{
  /* The product id
    - type: string; */
  id: "some-unique-id"
}
```

### Product View Model

```js
{
  /* The product's unique id in the database
    - type: string; */
  id: 'some-unique-id',

  /* The product name
    - type: string; */
  name: 'Some Product',

  /* The product description
    - type: string; */
  name: 'Some product description. Could be rich text.',

  /* The product price
    - type: number; */
  price: 200,

  /* The thumbnail image src and alt text
    - type: object */
  thumbnail: {
    /* Image source url
      - type: string; */
    src: '/some-url',

    /* Alt text for accessibility
      - type: string; */
    alt: 'Some Image',
  },

  /* List of objects that represent image src and alt text
    - type: object[]; */
  media: [
    {
      /* Image source url
      - type: string; */
      src: '/some-url',

    /* Alt text for accessibility
      - type: string; */
      alt: 'Some Image',
    },
    ...
  ],

  /* List of strings that represent product attributes - used for filtering
    - type: string[]; */
  attributes: [
    "some-attribute", "some-other-attribute"
  ],

  /* Product rating - used for sorting by "best-selling"
    - type: number; */
  rating: 5,

}
```

### product GET View Model

```js
{
  ...productViewModel
}
```

---

## /api/product-search **GET**

Returns an object with an items array property that represents all the products matching the search query

### Backend implementation

- Query the database using the `query`, `filterBy` and `sortBy` params passed in from the user.
- The `query` value should match against the product name
- The `filterBy` value should be performed before `sortBy`, and should filter based on whether the value exists in the product's `attributes` array.
- The `sortBy` value represents two different types of sorts: **"best-selling"**, which sorts based on the product's `rating` property (sort highest to lowest); **"price-ascending"** and **"price-descending"**, which sort based on the product's `price` property.
- Once all above operations are complete, return an object with an `items` property. See View Model below for shape and data types.

### Frontend implementation

- Pass the `query`, `filterBy` and `sortBy` params to retrieve the list of products. See Input Model below for shape and data types.

### product-search GET Input Model

```js
{
  /* Query string to search for - matches against product name
    - type: string; */
  query: "everyday",

  /* Filter products results based on product attributes array
    - type: string; */
  filterBy: "backpack",

  /* Sort products based on value. Accepted values: "best-selling", "price-ascending", "price-descending"
    - type: string; */
  filterBy: "best-selling",
}
```

### product-search GET View Model

```js
{
  /* A list of products (see Product View Model)
    - type: <productViewModel>[] */
  items: [
    ...productViewModel,

    ...
  ]
}
```
