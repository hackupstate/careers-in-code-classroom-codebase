# REST Exercises

## First api

The server's hostname is `module5.ml`
The server is running on tcp port `80` (standard http port)

On the module server, I have a number of endpoints for managing resources that relate to careers in
code. There are students and assignment. Assignments is a nested resource inside of students.

The students resource has three fields:
  - `name`, your name as a string.
  - `currentModule`, a number indicating the current module in careers in code you are on (5!)
  - `favoriteColor`, a value representing your favorite color. Set this to `null` for now.
  
Here is an example student:
```
{"name": "John Smith", "currentModule": 5, "favoriteColor": "red"}
```

The Assignments resource has two fields:
  - `name`, the assignment's name as a string
  - `completed`, a boolean indicating if the assignment has been finished
  
Here is an example assignment:
```
{"name": "REST exercises", "completed": false}
```

## Tasks
1. There is a `/students` resource that allows management of students that are in class. This
   resource follows the REST pattern we outlined in class. Please create yourself (Hint: make a POST request)!

   Note down the `id` field you receive in the response - you will need this for later tasks!

2. There is a nested assignments resource within the user resource (`/students/:id/assignments`).
   Please create an assignment representing this assignment! Also note down the id of the assignment
   that you receive.

3. Update the `favoriteColor` value on the student entry you created in step 1. Change it to something else with a PUT request.

4. Update the assignment you made, changing the `completed` boolean from false to true.

## Second api

We are going to use a new api for this exercise, called SWAPI. SWAPI stands for the *S*tar *W*ars
*API* and is an api that can be used to access information from the star wars universe.

Its documentation can be found at https://swapi.dev/documentation. This is a pretty hefty document,
and it might seem a bit overwhelming at first. But don't fret! I'd suggest scanning through the
getting started section and then using the side navigation to quickly jump to sections that are
pertinent to the tasks below. Understanding documentation is a big part of what software developers
have to do on a day to day basis and this should hopefully be some good practice.

### Exercise 1
Determine a list of all people in star wars that have a homeworld of `tatooine` by making an api request to the star wars api.

1. First, find in the api documentation the endpoint to list all people. As a starting point, make
   this request. Hint: there is a "Resource" section in the sidebar, that's a pretty good place to start!
2. Now, you're going to need to specify a "filter" to this request to limit all the people returned
   to just those that have a homeworld of `tatooine`. Can you figure out how to do this in the
   documentation? Hint: when the documentation says "attributes", they mean query parameters.
3. Make a request to this api endpoint using the filters required. Get the output.

#### Optional next steps
1. Determine R2-D2's birth year. You should be able to use the same endpoint as the main exercise.
2. How many star wars films does SWAPI have data on? You will want to use a different endpoint for this. Look through the documentation and see what you can find that pertains to working with the "film" resource. Then, try to make requests to this resource!


## Third api

Using the github api (the documentation can be found at https://docs.github.com/en/rest),
answer the below questions. Keep in mind that github's api is quite large, but if you utilize the
navigation on the right side, you should be able to jump to specific sections. In addition, if a
section is about something you have never heard of, then skip it! You'll probably find that it's
easiest to digest these sorts of documents by skimming them.

We will need to generate a token for some of the below http requests to work. To do this, visit
https://github.com/settings/tokens/new. Be sure to give your token the `repo` scope, this is
important for some of the below exercises to work! After clicking `Generate Token`, the resulting
token will be printed to the screen, and you should save it somewhere on your computer. You won't be able to access it again, sot it's important that you save it somewhere on your computer for these exercises. Otherwise, you will have to make a new one.

Now, when making requests, include this token within the Authorization header like we talked about
during class: `Authorization: Bearer <token goes here>`.

## Exercise 2
1. How many public repositories does the hackupstate organisation on github have?

### Optional next steps
1. Create a repository called `github-api-test` for your user account.
  - The repository resource also supports updating. Update this repository's name to something else!
  - Delete the repository you made via the github api.
2. Which license does https://github.com/hackupstate/huslack use? Hint: Look in `Licenses`.


