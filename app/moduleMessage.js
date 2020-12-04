export function moduleOOP() {
    class Message {

        constructor(messageEl, messageText) {
            this.messageEl = messageEl;
            this.messageText = messageText;
        }

        showMessage() {
            this.messageEl.textContent = this.messageText;
        }
    }

    const messageEl = document.querySelector('[data-message]');
    const messageObj = new Message(messageEl, 'Anton');
    messageObj.showMessage();
}