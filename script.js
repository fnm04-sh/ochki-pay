document.getElementById("sendButton").addEventListener("click", function() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;
    
    if (amount && currency) {
        // Скрываем форму и показываем окно подтверждения
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("confirmation").style.display = "block";

        // Обновляем информацию о переводе
        document.getElementById("amountConfirmation").textContent = `${amount} ${currency}`;
        document.getElementById("currencyConfirmation").textContent = currency;
        
        // Генерируем номер транзакции (например, случайный ID)
        const transactionId = Math.floor(Math.random() * 1000000);
        document.getElementById("transactionIdValue").textContent = transactionId;
        
        // Сбрасываем поля ввода
        document.getElementById("amount").value = "";
        document.getElementById("currency").value = "usd";
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});

// Кнопка "Вернуться на главную"
document.getElementById("backButton").addEventListener("click", function() {
    // Скрываем окно подтверждения и показываем форму
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("formContainer").style.display = "block";
});
