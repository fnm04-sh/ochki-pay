// Переменная для хранения кода подтверждения
let confirmationCode = null;

document.getElementById("sendButton").addEventListener("click", function() {
    // Получаем сумму и валюту из формы
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    // Генерируем случайный код подтверждения
    confirmationCode = Math.floor(100000 + Math.random() * 900000); // 6-значный код

    // Имитация отправки кода на телефон пользователя
    alert(`Код подтверждения отправлен на ваш телефон: ${confirmationCode}`);

    // Скрываем форму ввода данных и показываем форму ввода кода
    document.getElementById("formWindow").style.display = "none";
    document.getElementById("confirmationCodeContainer").style.display = "block";
});

document.getElementById("confirmCodeButton").addEventListener("click", function() {
    const inputCode = document.getElementById("confirmationCode").value; // Получаем введенный код

    if (inputCode == confirmationCode) {
        // Если код правильный, скрываем форму ввода кода и показываем квитанцию
        document.getElementById("confirmationCodeContainer").style.display = "none";
        document.getElementById("confirmationPanel").style.display = "block";

        // Получаем текущие данные для квитанции
        const amount = document.getElementById("amount").value;
        const currency = document.getElementById("currency").value;
        const currentTime = new Date().toLocaleString();
        const transactionId = Math.floor(100000 + Math.random() * 900000); // Генерируем номер транзакции

        // Заполняем квитанцию
        document.getElementById("amountConfirmation").textContent = `${amount} ${currency}`;
        document.getElementById("recipient").textContent = "fnm04.sh"; // Получатель
        document.getElementById("transactionTime").textContent = currentTime;
        document.getElementById("transactionIdValue").textContent = transactionId;
    } else {
        alert("Неверный код подтверждения!");
    }
});
