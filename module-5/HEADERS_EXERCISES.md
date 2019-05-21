# Headers Exercises

For each of these exercises, you will need to make a http request to a server I have written. Please
note down each of your requests (method, path, headers, request body if applicable) and the server's
response (status code, any headers, and any response body)

If not specifiecd, the server's hostname is `module5.tk`
If not specifiecd, the server is running on tcp port `80`

Feel free to use any tool you'd like to make these http requests - fetch, curl, or postman.

## Exercise 1
There is an endpoint that exists on the server, `POST /tokens`. When a request is made to this
endpoint, a new token is generated, and returned in the response. Now, with this token, make a
request to `GET /protected-resource` using an authorization header with a token in it. If you get
back an error, refer to the presentation - the format of the authorization header is very
particular!

## Exercise 2
Make a `GET` request `http://hackupstate.com/`, as you normally would. Ensure that you get back
what's expected (a bunch of HTML that looks vaugely like the careers in code site). Now, make the
same request, only this time, include a `Host` header that is something other than
`hackupstate.com` - maybe `example.com`. What does the response from the server look like? Why do
you think this looks different? If you aren't sure, scan through the host header section of the
presentation.
