# Final Exercise

At the beginning of this module, I showed a small web application that shows the new york times best
sellers list. Your task is to recreate that!

First off, you will need a new york times api token in order to access their api. Follow these steps
to generate one: https://developer.nytimes.com/get-started. When given the option to select an api, pick the "books api".

1. Start by making a basic html page with a `<html>`, `<head>`, `<body>`, and `<title>`.
2. Add a `div` to the page, with an id you can target later - ie, `<div id="mydata"></div>`
3. In the body, add `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>` to include axios.
4. Below this, add another `<script>` tag. Inside, use `axios` to make a http request to this endpoint in the new york times api to get the top 5 best selling books: https://developer.nytimes.com/docs/books-product/1/routes/lists/overview.json/get. Note: this is not the url you want to make a request to, you need to read this documentation to understand exactly how the request should be made.
5. To ensure that the request works, `console.log` out the response as a starting point.
3. After the request finishes, use javascript to modify the dom and show the response. In my example
   I showed, I got a bit fancy, but you can get as basic or as complicated as you'd like here. If
   desired you can apply css rules to these elements you create to make them look better.
   
Here's what I ended up with! http://nytimes-bestsellers.surge.sh/
