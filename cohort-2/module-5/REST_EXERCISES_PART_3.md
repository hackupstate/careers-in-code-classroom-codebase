# REST Exercises

The server's hostname is `module5.ml`
The server is running on tcp port `80` (standard http port)

On the module server, I have a number of endpoints for managing resources that relate to careers in
code. There are students and assignments, a nested resource inside of students.

The students resource has three fields:
  - `name`, your name as a string.
  - `currentModule`, a number indicating the current module in careers in code you are on (5!)
  - `favoriteColor`, a value representing your favorite color. Set this to `null` for now.

The Assignments resource has two fields:
  - `name`, the assignment's name as a string
  - `completed`, a boolean indicating if the assignment has been finished

## Tasks
1. There is a `/students` resource that allows management of students that are in class. Please
   create yourself!
   Note down the id you receive in the response - you will need this for later tasks!
2. There is a nested assignments resource within the user resource (`/students/:id/assignments`).
   Please create an assignment representing this assignment! Also note down the id of the assignment
   that you receive.
3. Update the `favoriteColor` value on your student resource. Change it from `null` (what you had
   before) to your actual favorite color as a string!
4. Update the assignment you made, changing the `completed` boolean equal to true.
