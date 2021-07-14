
const hasNewMessage = () => {
  // return true with a probability of 20%.
  if (Math.random() < 0.2) {
    return true;
  }
  return false;
};

const newMessage = () => {
  // return a random message as an object with two keys, subject and sender
  const senderValue = Math.random().toString(26).substring(4, 15);
  const subjectValue = Math.random().toString(26).substring(2, 15);
  const message = { sender: senderValue, subject: subjectValue };
  return message;
};

const appendMessageToDom = (message) => {
  // append the given message to the DOM (as a new row of `#inbox`)
  const rows = document.getElementById("inbox");
  const myMessage = `<div class="row message unread">
      <div class="col-3">${message.sender}</div>
      <div class="col-9">${message.subject}</div>
    </div>`;
  const newMessage = rows.insertAdjacentHTML("afterbegin", myMessage);
  return newMessage;
};

const updateUnreadCounter = () => {
  // update counter for unread messages
  const count = document.getElementById("count");
  const unreadMsg = document.querySelectorAll(".unread");
  const length = unreadMsg.length;
  count.innerText = `${length}`;
  // update title with the number of unread messages
  const title = document.querySelector("h1");
  title.innerHTML = `Inbox <small id="count">(${length})</small>`;
  return title.innerHTML;
}

const refresh = () => {
  // If there is a new message, append it to the DOM and update the unread counter in title.
  if (hasNewMessage()) {
    appendMessageToDom(newMessage());
    updateUnreadCounter();
  }
};



document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
