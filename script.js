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

    // Скрываем первое окно, показываем второе (ввод кода)
    document.getElementById("formWindow").style.display = "none";
    document.getElementById("confirmationCodeContainer").style.display = "block";
});

document.getElementById("confirmCodeButton").addEventListener("click", function() {
    const userInputCode = document.getElementById("confirmationCode").value;

    // Проверяем правильность введенного кода
    if (parseInt(userInputCode) === confirmationCode) {
        // Если код верный, показываем квитанцию и уведомление
        showTransactionResult(true);

        // Отображаем данные в квитанции
        document.getElementById("amountConfirmation").textContent = document.getElementById("amount").value;
        document.getElementById("recipient").textContent = "fnm04.sh";
        document.getElementById("transactionTime").textContent = new Date().toLocaleString();
        document.getElementById("transactionIdValue").textContent = "TX123456789";
        
        // Переход к третьему окну (квитанция)
        document.getElementById("confirmationCodeContainer").style.display = "none";
        document.getElementById("confirmationPanel").style.display = "block";
    } else {
        // Если код неверный, отображаем ошибку
        showTransactionResult(false);
    }
});

function showTransactionResult(isSuccess) {
    const resultContainer = document.getElementById("transactionResult");
    resultContainer.style.display = "block"; // Показать уведомление

    if (isSuccess) {
        // Успешная транзакция
        resultContainer.className = "transaction-result success";
        resultContainer.innerHTML = `
            <div class="success-icon">✔</div>
            <h3>Транзакция успешна!</h3>
            <p>Ваш перевод был завершен.</p>
        `;
    } else {
        // Ошибка транзакции
        resultContainer.className = "transaction-result error";
        resultContainer.innerHTML = `
            <div class="error-icon">✖</div>
            <h3>Ошибка транзакции</h3>
            <p>Произошла ошибка при выполнении перевода.</p>
        `;
    }

    // Скрыть уведомление через 3 секунды
    setTimeout(() => {
        resultContainer.style.display = "none";
    }, 3000);
}
