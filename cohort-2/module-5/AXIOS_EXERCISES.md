# Axios Exercises

For each of these exercises, you will need to make a http request to a server I have written with
axios. Please go to `http://module5.tk` and make all these requests in the javascript console.

The server's hostname is `module5.tk`
The server is running on tcp port `80` (the default)

## Requests to make to the server

### Exercise 1

Make a request to this endpoint to return a list of fruit.
```
Method: GET
Path: /fruit
Headers: none
```

### Exercise 2

This endpoint, when given a bunch of text in the body, will return the frequencies of each word
that was specified. Try it with my phrase, but also, if you'd like, try it with a phrase of your
own!
```
Method: POST
Path: /text-processing/frequencies
body: the quick brown fox jumped over the lazy dog
```

### Exercise 3

This endpoint, when given an authorization header containing a special value, returns a special
message. Otherwise, it returns a different message. Can you tell me both of those messages?

The password is `supersecret`.

```
Method: GET
Path: /lockbox
Headers:
  Header name: Authorization
  Header value: either the password, or something else to test the other case
```

### Exercise 4

Make a GET request to /. What do you get back? Now, visit the same path in the web browser. Does
what you got back from the server and what you see in the web browser seem to correlate?



# Bonus material
Neither of these below tasks is required, but both will only help you to understand `axios` more.

## Bonus mini-project
Create a new html file. Add `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>` into
the body to include axios. Add a second `<script>` tag into the `<body>`. Within that second
`<script>` tag, make request to any of the endpoints we have used so far with axios, and when the
request completes, displays the status code of the response to the screen (create a new dom node,
set the content to the status code, and append it to the body).

## Bonus research
We talked about promises today. Promises could probably be a class of their own, and you'll surely
run into them again. Here are a few links to read:
- https://scotch.io/tutorials/javascript-promises-for-dummies
- https://www.sohamkamani.com/blog/2016/08/28/incremenal-tutorial-to-promises/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises (more technical)
