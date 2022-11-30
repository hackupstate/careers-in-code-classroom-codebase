## Github API

Using the github api (the documentation can be found at https://docs.github.com/en/rest),
answer the below questions. Keep in mind that github's api is quite large, but if you utilize the
navigation on the right side, you should be able to jump to specific sections. In addition, if a
section is about something you have never heard of, then skip it!

You'll probably find that it's easiest to digest these sorts of documents by first skimming them,
and then reading the most specific sections in depth.

We will need to generate a token for some of the below http requests to work. To do this, visit
https://github.com/settings/tokens/new. Be sure to give your token the `repo` scope, this is
important for some of the below exercises to work! After clicking `Generate Token`, the resulting
token will be printed to the screen, and you should save it somewhere on your computer. You won't
be able to access it again, sot it's important that you save it somewhere on your computer for
these exercises. Otherwise, you will have to make a new one.

Now, when making requests, include this token within the Authorization header like we talked about
during class: `Authorization: Bearer <token goes here>`.

## Exercise
1. How many public repositories does the hackupstate organisation on github have?

### Optional next steps
1. Create a repository called `github-api-test` for your user account.
  - The repository resource also supports updating. Update this repository's name to something else!
  - Delete the repository you made via the github api.
2. Which license does https://github.com/hackupstate/huslack use? Hint: Look in `Licenses`.
