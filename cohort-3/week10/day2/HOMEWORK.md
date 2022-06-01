# Fetch Exercises

For each of these exercises, you will need to make a http request to a server I have written.
Please go to `http://careersincode.ml` in a web browser and make all these requests in the
javascript console.

The server's domain name is `careersincode.ml`. Again, please use the protocol `http`.

## Requests to make to the server

### Exercise 1

Part A: Using fetch, make a request to this endpoint to return a some text.
```
Method: GET
Path: /apples
Headers: none
```
Part B: Also, make this request using CURL in a terminal.

### Exercise 2

Part A: Using fetch, make a request to this endpoint. When given a bunch of text in the body, will return the frequencies of each
word that was specified. Try it with my phrase, but also, if you'd like, try it with a phrase of
your own!
```
Method: POST
Path: /text-processing/frequencies
body: the quick brown fox jumped over the lazy dog
```

Part B: Also, make this request using CURL in a terminal.

Part C:
- a) Create a new html file. Within this html file, create a new `<script>` tag. In this script tag, paste the code you wrote for Part A.
- b) I'd like you to add some additional logic to this request to unpack the response body, and print it out to the javascript console. Need a hint? Check out slide 73 of the presentation for some example code.
- c) Test out your html file! Open it up in a browser, open the javascript console, and make sure you see what you expect.
- d) Please turn this in this html file alongside everything else in canvas!

### Exercise 3

Using Postman, make a GET request to /. What do you get back? Now, visit the same path in the web
browser. Does what you got back from the server and what you see in the web browser match?

## Bonus research
We talked about promises today. Promises could probably be a class of their own, and you'll surely
run into them again. Here are a few links to read, if you'd like some more perspectives on promises:
- https://scotch.io/tutorials/javascript-promises-for-dummies
- https://www.sohamkamani.com/blog/2016/08/28/incremenal-tutorial-to-promises/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises (more technical)
