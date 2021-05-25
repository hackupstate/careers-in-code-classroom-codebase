# JSON Exercise

The server's hostname is `module5.ml`

The server is running on tcp port `80` (standard http port)


## READ THIS
Each exercise has an `Optional next steps` section below. These aren't required, but, if you have time or want to go into more detail on a topic, give them a try.


## Exercise 1
In the javascript console, convert this string into a javascript object using the native JSON tools in the browser:
```javascript
let jsonString = '{"menu":{"id":"file","value":"File","popup":[{"value":"New","action":"CreateNewDoc"},{"value":"Open","action":"OpenDoc"},{"value":"Close","action":"CloseDoc"}]}}'
```

#### Optional next steps
- Add a new entry to the `popup` array inside of the JSON string, specifying a new menu item for `Save` that has the `action` key equal to `SaveDoc`. After doing this, re-convert the string into a javascript object and ensure that your object has the new entry in the array.
- What happens when you give the json parsing function you are using a bad input value (ie, a string that doesn't contain JSON) - does it return null? Throw an error?
<!--
- Take a look into the optional `reviver` parameter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter. Try out the examples!
-->


## Exercise 2
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
  "counts": [150, 12, 4, 37],
  "start": "5:00",
  "end": "8:00"
}
```
<!--
- Take a look into the optional `replacer` parameter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter
-->

## Exercise 3
Using your knowledge of the JSON format, build a json object by hand inside of a string that follows this format:
- The json object contains a key of `students` that maps to a value of an array.
  - The array contains a single value, a string of your name!
- The json object contains another key of `instructor` that maps to a value of `Ryan`
- The json object contains one final key of `moduleNumber` that maps to the value `5`

To check your work, try using the browser json parsing function to see if your json can be properly decded. If not, you will get an error.

#### Optional next steps
- Add a student to the `students` array in the JSON named `John "Jacob Jingleheimer" Schmidt`. Hint - this might require some research online!
- Change every student entry in the `students` array from a `string` to an `object` with two keys in it:
  - first, a `name` key, that maps to the existing student's name
  - second, a `favoriteTeacherName` key that maps to a `string` equal to the name of the student's favorite teacher.


## Exercise 4

Make a GET request to the server's `/json` endpoint. Note down the response headers and response
body you receive.

#### Optional next steps
(none for this exercise)

## Exercise 5

Make a GET request to the server's `/number-list` endpoint using `axios`. This request will return a list of numbers encoded as a JSON array.

Extract the data out of the promise returned by axios with `.then`.

Inside the callback in the `.then`, write a program to extract the array of numbers from the response. Then, sum them all up to produce a total. Use `console.log` to print out the total to the console.

#### Optional next steps
(none for this exercise)
