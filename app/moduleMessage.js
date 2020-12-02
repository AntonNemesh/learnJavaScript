export class Message {

    constructor(messageEl, messageText) {
        this.messageEl = messageEl;
        this.messageText = messageText;
    }

    changeText() {
        this.messageEl.textContent = this.messageText;
    }
}