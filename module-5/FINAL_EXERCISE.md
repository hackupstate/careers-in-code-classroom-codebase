# Final Exercise

At the beginning of this module, I showed a small web application that shows the new york times best
sellers list. Your task is to recreate that!

First off, you will need a new york times api token in order to access their api. Follow these steps
to generate one: https://developer.nytimes.com/get-started.

1. Start by making a basic html page with a `<html>`, `<head>`, `<body>`, and `<title>`.
2. In the body, add a `<script>` tag. Use `fetch` to make a http request to this endpoint in the the
   new york times api - this endpoint is documented at
   https://developer.nytimes.com/docs/books-product/1/routes/lists/overview.json/get. To ensure that
   the request works, console.log out the response for now.
3. After the request finishes, use javascript to modify the dom and show the response. In my example
   I showed, I got a bit fancy, but you can get as basic or as complicated as you'd like here. If
   desired you can apply css rules to these elements you create yo make them look better.
