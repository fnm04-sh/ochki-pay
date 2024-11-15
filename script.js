document.getElementById("sendButton").addEventListener("click", function() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    if (amount && currency) {
        // Скрываем форму и показываем окно с запросом на ввод кода
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("confirmationCodeContainer").style.display = "block";

        // Генерация случайного 6-значного кода подтверждения
        const confirmationCode = Math.floor(Math.random() * 1000000);
        console.log("Отправленный код: ", confirmationCode); // Имитация отправки

        // Сохраняем код подтверждения в памяти для дальнейшей проверки
        window.confirmationCode = confirmationCode;

        // Вы можете отправить этот код пользователю через SMS, используя API
        // (на это место необходимо поставить вызов реального API для отправки SMS)
        
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});

// Проверка введенного кода подтверждения
document.getElementById("confirmCodeButton").addEventListener("click", function() {
    const inputCode = document.getElementById("confirmationCode").value;
    const correctCode = window.confirmationCode;

    if (inputCode == correctCode) {
        // Если код правильный, показываем квитанцию
        document.getElementById("confirmationCodeContainer").style.display = "none";
        document.getElementById("confirmation").style.display = "block";
        
        const amount = document.getElementById("amount").value;
        const currency = document.getElementById("currency").value;

        document.getElementById("amountConfirmation").textContent = `Сумма: ${amount} ${currency}`;
        document.getElementById("transactionIdValue").textContent = Math.floor(Math.random() * 1000000); // Генерация случайного номера транзакции
    } else {
        alert("Неверный код подтверждения.");
    }
});
