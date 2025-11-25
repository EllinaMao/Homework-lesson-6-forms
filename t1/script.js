function addMessage() {
    const nameImp = document.getElementById('name-input');
    const txtImp = document.getElementById('text-input');

    const name = nameImp.value.trim();
    const message = txtImp.value.trim();

    if (name === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }

    const now = new Date();
    const format = (num) => num.toString().padStart(2, '0');

    const timeString = `${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;
    const dateString = `${format(now.getDate())}.${format(now.getMonth() + 1)}.${now.getFullYear()}`;
    const fullDateTime = `${timeString} ${dateString}`;

    const newMessageDiv = document.createElement('div');
    newMessageDiv.className = 'message-card';

    newMessageDiv.innerHTML = `
                <div class="message-header">
                    <span class="author">${name}</span>
                    <span class="date">${fullDateTime}</span>
                </div>
                <div class="message-body">
                    ${message}
                </div>
            `;
    const messageList = document.getElementById('message-list');
    messageList.appendChild(newMessageDiv);

    nameImp.value = '';
    txtImp.value = '';
}

