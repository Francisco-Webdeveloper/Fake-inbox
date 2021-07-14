## Background & Objectives

Simulation of email fetching and addition of upcoming emails to the top of the list of an inbox interface.
This feature adds content to the DOM after the initial page loads, therefore there is no need to refresh the page for new mail to show up.

The goal is to simulate email fetching without the use of AJAX.

https://user-images.githubusercontent.com/67716187/125683121-47adfb1a-28ba-4675-9864-9b612d42c811.mov

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
Then open [`localhost:8080`](http://localhost:8080) to test the code in the browser

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

## Technologies
Project created with:
* HTML5
* CSS3
* JavaScript ES6

## Other information
You can also check the code and a preview 👉 https://codepen.io/francisco-frontend/pen/NWjpKLa
