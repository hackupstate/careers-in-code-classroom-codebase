# Token Exercise

The server's hostname is `TODO`
The server is running on tcp port `80` (standard http port)

## Exercise

There exists an endpoint located at `GET /protected-resource`.

In order to access the information it provides, a valid bearer token must be provided in the request via the `Authorization` header.

In order to generate a token, you must make a request to `POST /tokens`, which will return a token in the response.

Your task is to make a successful authenticated request to `GET /protected-resource`.
