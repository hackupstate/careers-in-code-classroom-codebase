# HTTP Exercises

For each of these exercises, you will need to make a http request to a server I have written. Please
note down each of your requests (method, path, headers, request body if applicable) and the server's
response (status code, any headers, and any response body)

A successful answer should start with `ANS`, and question that was invalid or otherwise was unable
to be processed will start with `ERR`. If you received a response that starts with `ERR`, try your
best to ensure that you are sending the correct data, and if you have trouble, we can go over it
more deeply. Please note down your responses and turn them in on google classroom.

The server's hostname is `TODO`
The server is running on tcp port `80` (standard http port)

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
that was specified. Try it with my phrase, but also if you'd like try it with a phrase of your own!
```
Method: POST
Path: /text-processing/frequencies
Headers: none
body: "the quick brown fox jumped over the lazy dog"
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
