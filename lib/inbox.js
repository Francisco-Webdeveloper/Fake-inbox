
const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  if (Math.random() < 0.2) {
    return true;
  }
  return false;
};

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  const senderValue = Math.random().toString(26).substring(4, 15);
  const subjectValue = Math.random().toString(26).substring(2, 15);
  const message = { sender: senderValue, subject: subjectValue };
  return message;
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
};

















// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
