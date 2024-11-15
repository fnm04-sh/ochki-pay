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

    // Анимация движения денег
    const moneyElement = document.getElementById("moneyMovement");
    moneyElement.innerText = `${amount} ${currency}`; // Отображаем сумму и валюту
    moneyElement.style.display = "block"; // Показываем элемент с деньгами

    // Запускаем анимацию перемещения денег
    moneyElement.style.animation = "moveMoney 2s ease-out forwards";

    // Через 2 секунды скрываем элемент с анимацией
    setTimeout(() => {
        moneyElement.style.display = "none";
    }, 2000);
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
        const transactionId = Math.random().toString(36).substring(2, 15); // Генерация случайного номера транзакции

        // Обновляем данные в квитанции
        document.getElementById("amountConfirmation").innerText = `${amount} ${currency}`;
        document.getElementById("recipient").innerText = "Receiver Name";  // Имя получателя (можно сделать динамическим)
        document.getElementById("transactionTime").innerText = new Date().toLocaleString();
        document.getElementById("transactionIdValue").innerText = transactionId;
    } else {
        alert("Неверный код подтверждения.");
    }
});
