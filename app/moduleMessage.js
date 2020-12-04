export class Message {

    constructor(messageEl, messageText) {
        this.messageEl = messageEl;
        this.messageText = messageText;
    }

    showMessage() {
        this.messageEl.textContent = this.messageText;
    }
}