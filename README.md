# Welcome to React!

In this workshop we'll be creating a newsletter signup in React with Convertkit.  
During this workshop you'll probably have some questions regarding the two technologies.  
Documentation for both can find bellow.

- [React Docs](https://reactjs.org/)
- [Convertkit Docs](https://developers.convertkit.com/)

A link to the presentation slides can be found [here](https://drive.google.com/file/d/1X6vRcdExSh27s3YtIRuwIBmLqnj1hSGu/view?usp=sharing)

## Getting started

You can either clone this repository if you have [Node.js](https://nodejs.org/en/)
installed or import the repository on [StackBlitz](https://stackblitz.com/github/LukasCornille/react-workshop).
If you're working with StackBlitz, have a look at [the docs](https://developer.stackblitz.com/docs/platform/importing-projects/#import-from-github)
so you know how to switch branches.

Make sure to install the [React Developer Tools](https://www.google.com/search?channel=nrow5&client=firefox-b-d&q=react+dev+tools) aswell, this will help with debugging of your application!

## Development

Start the Remix development asset server with:

```sh
npm run dev
```

This starts your app in development mode, which will purge the server require
cache when Remix rebuilds assets so you don't need a process manager restarting
the express server.

## Workshop

### 1) Create the intial components

Remix uses file based routing, meaning that every file inside the routes folder
is a page.  
Because we have a single page, we will create our applications inside the
[index.tsx](app/routes/index.tsx) file.

In the final result the user is able to sign up to a newsletter with [a form](/public/idle.png)  
after which the form will disappear and a [success message](/public/success.png) is shown based
on the aria-hidden attribute.

We handle this in a few different ways but for this workshop we'll just create
two components:

- a SignUp component which will handle state of the form
- a SuccessMessage component which will display the success message

Seeing as the Index component page will conditionally render the success message,  
think if you can move the showing/hinding of the message to this component.

When you've completed this step, open the Components tab for react in the inspector.  
You should see the Index component, clicking on this component should reveal the props and hooks.  
If you toggle the value of state, you should see a nice animation!

### 2) Add the initial state and event handlers for form submission

In order for React to be aware of the state of our input fields, we'll have to
hook this up with some state and an event listener. Let's do this now!

Let's also add an event listener to our form to handle the submit event.  
For now, a simple `preventDefault()` is enough.

### 3) Create an account on Convertkit

Visit [ConvertKit](https://convertkit.com/), create an account, go to settings and click on advanced.
You'll be able to view your API Key here.

Next up, go to [the forms page](https://app.convertkit.com/forms) and create a form.
It doesn't really matter which one, all we need is the ID of this form when it is created.  
In order to view the id, just click on the form you've created and the ID is inside the url ;) (ex: 3111412)

In order to use this throughout the application we'll be storing these credentials
as environment variables. Read [the documentation](https://remix.run/docs/en/v1/guides/envvars#browser-environment-variables) on how to do this in Remix.

### 4) Submit the form and conditionally render the error message

Now that we have our API Key, we can submit our form by completing the `handleSubmit()`
function we wrote in step 2.

First up, we probably we want to create a hook which contains all our logic
for submitting our form,  
this way we could re-use this if it's ever required! In order to do this:

- create a new directory inside the app folder `hooks`
- create a file `useConvertKitSubmission.tsx`
- create and export a a function `useConvertKitSubmission` which returns a function  
  containing the logic you need to submit the form.

Convert kit will either return an error with a message or return a subscription object.  
Based on this information, we should also be able to keep some state inside the hook
which keeps track of the error message!  
(This might seem like a whole lot, so don't forget you can always checkout the branch on github and have a look ;) )

After this step, you should be able to view the error message and see the success message.  
We're almost done!

### 5) Handle the start over flow

You'll notice that the success message of the form has a start over button.  
When clicking this button, the user should return to SignUp form and the
input field should be focused this time.

When you've implemented this you're done with your first React app!
Have a look at [ConvertKit](https://app.convertkit.com/subscribers?status=all) to see your subscribers!

### 6) Bonus: Testing!

We now have a working application, let's make sure that we write some tests for
our components so that our components are working as intended and keep doing so.

We want our tests to remain close to our components.  
In order to do this, create a directory with the same name as your component
and rename the file to index.tsx.  
After this we can easily create a ComponentName.test.tsx file and import our component.

In order to make your life a bit easier, I've created a working application,  
with working test for the SuccessMessage on the `feat/6-testing` branch.
Feel free to check out this branch, or just add your own test cases to your app.

Quick tip: you can make use of [nock](https://github.com/nock/nock) to mock
the fetch to ConvertKit.

An example of a test can be found [here](/app/components/SuccessMessage/SuccessMessage.test.tsx).
