# Axios Exercises

For each of these exercises, you will need to make a http request to a server I have written with
axios. Please go to `http://module5.ml` in a web browser and make all these requests in the javascript console.

The server's hostname is `module5.ml`
The server is running on tcp port `80` (the default)

## Requests to make to the server

### Exercise 1

Make a request to this endpoint to return a some text.
```
Method: GET
Path: /apples
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
  Header value: supersecret
```

### Exercise 4

Make a GET request to /. What do you get back? Now, visit the same path in the web browser. Does
what you got back from the server and what you see in the web browser seem to correlate?



# Weekend Project
Create a new html file. Add `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>` into
the body to include axios. Add a second `<script>` tag into the `<body>` AFTER the axios script tag. Within that second
`<script>` tag, make request to any of the endpoints we have used so far with axios.

When the request completes (in the `.then` of the promise axios returns), log out the `status` property (on the value in the callback function in `.then`) with `console.log`.

If you're able to get that working, try to display the status code of the response to the screen (create a new dom node,
set the content to the status code, and append it to the body).

If you need a hint, take a look at slide 87 of the presentation: https://docs.google.com/presentation/d/1D-sZAYy7ISxeyckvClg9m9J7R4vFEy_1eEyUcif-fLM/edit#slide=id.g554ce1dfac_0_103


## Bonus research
We talked about promises today (and yesterday). Promises could probably be a class of their own, and you'll surely
run into them again. Here are a few links to read, if you'd like some more perspectives on promises:
- https://scotch.io/tutorials/javascript-promises-for-dummies
- https://www.sohamkamani.com/blog/2016/08/28/incremenal-tutorial-to-promises/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises (more technical)
