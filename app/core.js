import { Message } from "./moduleMessage.js"

const messageObj = new Message(document.querySelector('[data-message]'), 'Ab');
messageObj.changeText();

const hot = module.hot;
if (hot) { hot.accept(); }