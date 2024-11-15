// Получаем элементы
const sendButton = document.getElementById("sendButton");
const sendAmountInput = document.getElementById("amount");
const sendCurrencySelect = document.getElementById("currency");

const confirmationPanel = document.getElementById("confirmationPanel");
const confirmationCodePanel = document.getElementById("confirmationCodePanel");
const backButton = document.getElementById("backButton");

const codeInput = document.getElementById("codeInput");
const confirmCodeButton = document.getElementById("confirmCodeButton");

const transactionTime = document.getElementById("transactionTime");
const transactionIdValue = document.getElementById("transactionIdValue");
const amountConfirmation = document.getElementById("amountConfirmation");
const recipient = document.getElementById("recipient");

// Обработчик отправки формы
sendButton.addEventListener("click", function() {
    const amount = sendAmountInput.value;
    const currency = sendCurrencySelect.value;

    // Показать окно ввода кода подтверждения
    confirmationCodePanel.style.display = "block";
    document.getElementById("confirmationCodePanel").scrollIntoView();

    // Генерация случайного кода (для имитации)
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    alert(`Ваш код подтверждения: ${randomCode}`); // Простой метод генерации кода
});

// Обработчик подтверждения кода
confirmCodeButton.addEventListener("click", function() {
    const code = codeInput.value;

    if (code.length === 6) {
        // Имитируем успешную транзакцию
        confirmationCodePanel.style.display = "none";
        confirmationPanel.style.display = "block";

        // Устанавливаем данные в квитанции
        const currentTime = new Date();
        transactionTime.textContent = currentTime.toLocaleString();
        transactionIdValue.textContent = Math.floor(1000000000 + Math.random() * 9000000000);
        amountConfirmation.textContent = `${sendAmountInput.value} ${sendCurrencySelect.selectedOptions[0].text}`;
        recipient.textContent = "fnm04.sh";
    } else {
        alert("Неверный код!");
    }
});

// Возвращаемся на первоначальный экран
backButton.addEventListener("click", function() {
    confirmationPanel.style.display = "none";
    document.querySelector('.container').style.display = "block";
});
