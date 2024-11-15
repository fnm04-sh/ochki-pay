document.getElementById("sendButton").addEventListener("click", function() {
    // Показ окна с подтверждением
    document.getElementById("confirmationCodeContainer").style.display = "block";
    document.getElementById("formWindow").style.display = "none";
});

document.getElementById("confirmCodeButton").addEventListener("click", function() {
    // Эмулируем проверку кода (в реальной ситуации это будет запрос к серверу)
    let isCodeValid = Math.random() > 0.5; // Для примера случайная проверка

    if (isCodeValid) {
        // Показать успешную транзакцию
        showTransactionResult("success", "Транзакция успешна! Деньги отправлены.");
    } else {
        // Показать ошибку транзакции
        showTransactionResult("error", "Ошибка! Код неверный.");
    }
});

function showTransactionResult(status, message) {
    let resultElement = document.getElementById("transactionResult");
    resultElement.style.display = "block";
    resultElement.classList.remove("success", "error");

    if (status === "success") {
        resultElement.classList.add("success");
        resultElement.innerHTML = `<h3>Успех!</h3><p>${message}</p><div class="emoji">😊</div>`;
    } else {
        resultElement.classList.add("error");
        resultElement.innerHTML = `<h3>Неудача!</h3><p>${message}</p><div class="emoji">😞</div>`;
    }

    // Скрыть уведомление через 3 секунды
    setTimeout(function() {
        resultElement.style.display = "none";
    }, 3000);
}
