## Background & Objectives

Simulation of email fetching and addition to the top of the list of an email inbox interface.
This is adding content to the DOM after the initial page loads. There is no need to refresh the page for new mail to show up.

The goal is to simulate email fetching without the use of AJAX.

## Setup

Go to the Terminal, choose a directory where you wish to clone the repository and run:
```bash
git clone "git@github.com:Francisco-Webdeveloper/Fake-inbox.git"
yarn install
```
Launch your local webserver with:

```bash
rake webpack
```
Then open [`localhost:8080`](http://localhost:8080) in your favorite web browser

## Specs

- Development of the function `hasNewMessage()` that has a 20% probability of returning `true` (the rest of the time, it returns `false`).
- Development of the function `newMessage()` which should return a random object (i.e. a new email) with `subject` and `sender` keys. For instance:

```js
{
  sender: 'GitHub Team',
  subject: 'Welcome to GitHub'
}
```

or

```js
{
  sender: 'Arnold Schwarzenegger',
  subject: "I'm Back"
}
```

- Development of the function `appendMessageToDom(message)` which takes an object with `subject` and `sender` keys as parameters, and appends a new line for this message to the HTML markup.
- Implementation of the function `refresh` which is called every `1000` milliseconds.
- Implementation of `hasNewMessage()` function, and if there is a new message, add it (`newMessage()`) to the top of the inbox (`appendMessageToDom(message)`) and update the counter in the `h1` title
