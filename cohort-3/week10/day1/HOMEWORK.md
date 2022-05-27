# HTTP Exercises

For each of these exercises, you will need to make a http request to a server I have written using
postman. Please note down all the information in each of your requests (method, path, headers,
request body if applicable) and the server's response (status code, any headers, and any response
body)

The server's domain name for each request is `careersincode.ml`, and the protocol for each request
will be `http`.

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
Body: the quick brown fox jumped over the lazy dog
```

### Exercise 3

The below endpoint is protected. In order to access the data, you need to specify a password.

First of all, try fetching the data without specifying the password:
```
Method: GET
Path: /lockbox
Headers: none
```

Once you've done that, try specifying the password - the password is `supersecret`.
```
Method: GET
Path: /lockbox
Headers:
  Header name: Authorization
  Header value: supersecret
```

### Exercise 4

This endpoint, when given a bunch of text in the body, will return the word that has the highest
frequency. Try it with my phrase, but also, if you'd like, try it with a phrase of your own!
```
Method: POST
Path: /text-processing/most-common-word
body: the quick brown fox jumped over the lazy dog
```
