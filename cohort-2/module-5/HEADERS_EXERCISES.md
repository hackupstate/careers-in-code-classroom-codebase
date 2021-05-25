# Headers Exercises

For each of these exercises, you will need to make a http request to a server I have written. Please
note down each of your requests (method, path, headers, request body if applicable) and the server's
response (status code, any headers, and any response body)

If not otherwise specified, the server's hostname is `module5.ml`
If not otherwise specified, the server is running on tcp port `80`

Feel free to use any tool you'd like to make these http requests - axios, curl, or postman.

## Exercise 1
There is an endpoint that exists on the server, `POST /tokens`. When a request is made to this
endpoint, a new token is generated, and returned in the response.

Now, with this token, make a
request to `GET /protected-resource` using an authorization header with a bearer token in it. If you
get back an error, refer to the presentation - the format of the authorization header is very
particular!

## Exercise 2
Let's pretend that the module5.ml server also hosts the `http://hackupstate.com` and `http://careersincode.org` sites.

Make a `GET` request `https://hackupstate.com`, as you normally would. Ensure that you get back
what's expected (a bunch of HTML that looks vaugely like the hack upstate site).

Now, make a request to `http://module5.ml` - you should get back some HTML that looks like the module5 home page.

Now, WITHOUT CHANGING THE URL, alter the host header so that the HTML returned matches the HTML you got back with the first request to `http://hackupstate.com`. Remember - in this scenario, the hack upstate web page and module5.ml are hosted on the same physical computer!

If you need help, scan through the host header section of the presentation.

## Exercise 3
(Note: it's probably going to be easiest to do this exercise in postman. **Also, please use port `5000` instead of port `80`!**)

There's an endpoint on the module5.ml server - `POST /image-upload`. I'd like you to upload an image to it. The image must be a png or a jpeg, but otherwise, it doesn't really matter what it's an image of. To upload a file like an image using postman, under the "body" tab, select "binary", and choose a file from your file system.

Now that you've selected a file, set the content type header to match the file format. If you don't know what the mimetype is for your file, look it up online!

Finally, send the request. Make sure you get a 200 as a status code in your response!
