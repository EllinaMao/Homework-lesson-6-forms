document.addEventListener("DOMContentLoaded", () => {
    initBookSelection();
    initBuyButton();
});

function initBookSelection() {
    const selectButtons = document.querySelectorAll('.btn-select');
    const bookInput = document.getElementById('order-book');

    selectButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const clickedBtn = event.target;
            const card = clickedBtn.closest('.card');
            const bookTitle = card.querySelector('.book-title').innerText;
            
            bookInput.value = bookTitle;
        });
    });
}

function initBuyButton() {
    const buyButton = document.getElementById("btn-buy");
    
    buyButton.addEventListener('click', () => {
        const book = document.getElementById('order-book').value;
        const name = document.getElementById('order-name').value;
        const address = document.getElementById('order-adress').value;
        const dateStr = document.getElementById('order-date').value;
        const amount = document.getElementById('order-amount').value;


        if (!book || !name || !address || !dateStr) {
            alert("Пожалуйста, заполните все поля и выберите книгу.");
            return;
        }

        const selectedDate = new Date(dateStr);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            alert("Извините, пожалуйста, выберите дату в будущем.");
            return;
        }

        const message = `${name}, дякуємо за замовлення.\n"${book}" в количестве ${amount} буде доставлений ${dateStr} за адресою: ${address}.`;
        alert(message);
    });
}