// Логика для отправки денег
document.getElementById("sendButton").addEventListener("click", function() {
    // Генерация случайного 6-значного кода подтверждения
    const confirmationCode = Math.floor(100000 + Math.random() * 900000); // Генерация кода от 100000 до 999999

    // Сохраняем код в переменной глобально для проверки
    window.confirmationCode = confirmationCode;

    // Показываем форму для ввода кода подтверждения
    document.getElementById("confirmationCodeContainer").style.display = "block";

    // Имитация отправки кода на телефон пользователя
    alert(`Код подтверждения отправлен на ваш телефон: ${confirmationCode}`);
});

document.getElementById("confirmCodeButton").addEventListener("click", function() {
    const inputCode = document.getElementById("confirmationCode").value; // Получаем введенный код
    const correctCode = window.confirmationCode; // Правильный код из глобальной переменной

    if (inputCode == correctCode) {
        // Если код правильный, скрываем форму ввода и показываем квитанцию
        document.getElementById("confirmationCodeContainer").style.display = "none";
        document.getElementById("confirmation").style.display = "block";

        const amount = document.getElementById("amount").value;
        const currency = document.getElementById("currency").value;

        // Заполняем данные в квитанции
        document.getElementById("amountConfirmation").textContent = `${amount} ${currency}`;
        document.getElementById("transactionIdValue").textContent = Math.floor(Math.random() * 1000000); // Генерация случайного номера транзакции
    } else {
        alert("Неверный код подтверждения.");
    }
});
