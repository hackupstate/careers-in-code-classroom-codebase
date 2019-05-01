# REST Exercises

Using the api located at https://developer.github.com (the documentation can be found at that url),
answer the below questions. Keep in mind that github's api is quite large, but if you utilize the
navigation on the right side, you should be able to jump to specific sections. In addition, if a
section is about something you have never heard of, then skip it! You'll probably find that it's
easiest to digest these sorts of documents by skimming them.

We will need to generate a token for some of the below http requests to work. To do this, visit
https://github.com/settings/tokens/new. Be sure to give your token the `repo` scope, this is
important for some of the below exercises to work! After clicking `Generate Token`, the resulting
token will be printed to the screen, and you should save it somewhere on your computer.

Now, when making requests, include this token within the Authorization header like we talked about
during class: `Authorization: Bearer <token goes here>`.

## Exercises
1. How many repositories does the hackupstate organisation on github have?
2. Create a repository called `github-api-test` for your user account.
2. Which license does https://github.com/hackupstate/huslack use? Hint: Look in `Miscellaneous` > `Licenses`.
