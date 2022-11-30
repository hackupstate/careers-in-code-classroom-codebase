# Final Exercise

At the beginning of this module, I showed a small web application that shows the new york times best
sellers list. Your task is to recreate that!

First off, you will need a new york times api token in order to access their api. Follow these steps
to generate one: https://developer.nytimes.com/get-started.

This will involve making a new york times developer account, creating a new "application" in their
system, and finally, generating an api token. The instructions above should guide you through the
process step by step, but if you run into problems, don't hesitate to reach out to the instructor
(Ryan) or the TA.

TIP: When given the option to select apis that your application will use, pick the **Books API**.
That's the only one we will be using below.

1. Start by making a basic html page with a `<html>`, `<head>`, `<body>`, and `<title>`.
2. Add a `div` to the page, with an id you can target later - ie, `<div id="mydata"></div>`
3. Add a `<script>` tag. Inside, use `fetch` to make a http request to this endpoint in the new york times api to get the top 5 best selling books: https://developer.nytimes.com/docs/books-product/1/routes/lists/overview.json/get. Note: this is not the url you want to make a request to, you need to read this documentation to understand exactly how the request should be made.
4. To ensure that the request works, `console.log` out the response as a starting point. For
   example, something like:
   ```
    fetch(/* insert fetch parameters here */).then(function (response) {
      console.log(response.status);
      response.text().then(function (body) {
        console.log(body);
      });
    });
   ```
5. After the request finishes, use javascript to modify the html page and show the data returned by
   the new york times. In my example I showed, I got a bit fancy, but you can get as basic or as
   complicated as you'd like here.

   The simplest possible path is you could just take the literal text contents coming back from the
   api request and render them to the screen with something like `document.getElementById("#id").innerHTML = mydata`.

   A more complex path would be to parse the json, loop over the data returned back, and dynamically
   render an element for each book. This might require a bit of digging online and I suspect you'll
   need to use browser functions like `document.createElement` and
   `document.getElementById("#id").appendChild`.

   Finally, feel free to apply CSS to really make this project look good. In previous cohorts,
   students have often decided to include this project in their project portfolio.


For full disclosure: this is supposed to be a pretty freeform project. Other than that I'd like you
to render some data to the screen which came from the new york times api, there aren't very many
requirements here. So, try to have fun, and be creative.
   
If you'd like to see what I ended up with when I built this originally, check it out here! http://nytimes-bestsellers.surge.sh/
