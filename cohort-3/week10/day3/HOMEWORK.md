# Exercises

The server's domain name is `careersincode.ml`. When connecting to the server, use the protocol `http`.


## READ THIS
Most of these exercises have an `Optional next steps` section below. These aren't required, but, if
you have time or want to go into more detail on a topic, give them a try.


## Exercise 1
There is an endpoint that exists on the server, `POST /tokens`. When a request is made to this
endpoint, a new token is generated, and returned in the response.

First, make a request using Postman to this endpoint to generate a token.

Now, with this token, make a request to `GET /protected-resource` using an authorization header with
a bearer token in it. If you get back an error, refer to the presentation - the format of the
authorization header is very specific and particular!

#### Optional next steps
(none for this exercise)

## Exercise 2
In the javascript console, convert this string into a javascript object using the native JSON tools in the browser:
```javascript
let jsonString = '{"menu":{"id":"file","label":"File","popup":[{"label":"New","action":"CreateNewDoc"},{"label":"Open","action":"OpenDoc"},{"label":"Close","action":"CloseDoc"}]}}'
```

#### Optional next steps
- Add a new entry to the `popup` array inside of the JSON string. This new entry should be an
  object, containing a 2 key / value pairs: one with a key of `label` which maps to a value of
  `Save`, and one with an `action` key which maps to a value of `SaveDoc`. After doing this,
  re-convert the string into a javascript object and ensure that your object has the new entry in
  the array.
- What happens when you give the json parsing function you are using a bad input value (ie, a string that doesn't contain JSON) - does it return null? Throw an error?
<!--
- Take a look into the optional `reviver` parameter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter. Try out the examples!
-->


## Exercise 3
Using the javascript consule, convert the below javascript object into a string containing a JSON object:

```
let javascriptObject = {
  counts: [150, 12, 4, 37],
  start: '5:00',
  end: '8:00'
}
```

#### Optional next steps
- By default, javascript smooshes together the whole JSON object onto one line. Can you make the JSON output string span multiple lines and be properly indented - In other words, look like the below when it's outputted? You may need to look this one up online!
```
{
  "counts": [
    150,
    12,
    4,
    37
  ],
  "start": "5:00",
  "end": "8:00"
}
```
<!--
- Take a look into the optional `replacer` parameter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter
-->

## Exercise 4
Using your knowledge of the JSON format, build a json object by hand inside of a string that follows this format:
- The json object contains a key of `students` that maps to a value of an array.
  - The array contains a single value, a string of your name!
- The json object contains another key of `instructor` that maps to a value of `Ryan`
- The json object contains one final key of `weekNumber` that maps to the value `10`

To check your work, try using the browser json parsing function to see if your json can be properly decded. If not, you will get an error.

#### Optional next steps
- Add a student to the `students` array in the JSON named `John "Jacob Jingleheimer" Schmidt` - yes,
  that whole string as a literal, with quotes and all. Hint - how would you make a string in
  javascript that contains double quotes?
- Change every student entry in the `students` array from a `string` to an `object` with two keys in it:
  - first, a `name` key, that maps to the existing student's name
  - second, a `favoriteTeacherName` key that maps to a `string` equal to the name of the student's favorite teacher.


## Exercise 5

Make a GET request to the server's `/json` endpoint using postman. Note down the response headers
and response body you receive.

#### Optional next steps
(none for this exercise)

## Exercise 6

Make a GET request to the server's `/number-list` endpoint using `fetch`. This request will return a list of numbers encoded as a JSON array.

Get the response body by extracting the data out of the promise returned by fetch (with `.then`).

Inside the callback in the `.then`, write a program to extract the array of numbers from the response. Then, sum them all up to produce a total. Use `console.log` to print out the total to the console.

#### Optional next steps
(none for this exercise)
