# HTTP Postman / CURL Exercises

For each of these exercises, you will need to make a http request to a server I have written. Please
note down each of your requests (method, path, headers, request body if applicable) and the server's
response (status code, any headers, and any response body)

Note that these are largely the same requests as yesterday! The only difference is I'd like you to
make these requests each with postman, and then again with CURL.

The server's hostname is `module5.ml`
The server is running on tcp port `80`

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
Headers:
  Header name: Content-Length
  Header value: 44 (this is the number of characters that is being sent in the body)
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

This endpoint, when given a bunch of text in the body, will return the word that has the highest
frequency. Try it with my phrase, but also, if you'd like, try it with a phrase of your own!
```
Method: POST
Path: /text-processing/most-common-word
Headers:
  Header name: Content-Length
  Header value: 44 (this is the number of characters that is being sent in the body)
body: the quick brown fox jumped over the lazy dog
```
