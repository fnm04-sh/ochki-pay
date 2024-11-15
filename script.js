let confirmationCode = null;

document.getElementById("sendButton").addEventListener("click", function() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    confirmationCode = Math.floor(100000 + Math.random() * 900000); // 6-значный код

    alert(`Код подтверждения отправлен на ваш телефон: ${confirmationCode}`);

    // Скрываем форму ввода данных и показываем форму ввода кода
    document.getElementById("formWindow").style.display = "none";
    document.getElementById("confirmationCodeContainer").style.display = "block";

    // Показ прогресс-бара
    document.getElementById("progressBarContainer").style.display = "block";
    setTimeout(function() {
        document.getElementById("progressBarContainer").style.display = "none";
    }, 2000); // Прогресс-бар исчезает через 2 секунды
});

document.getElementById("confirmCodeButton").addEventListener("click", function() {
    const inputCode = document.getElementById("confirmationCode").value;

    if (inputCode == confirmationCode) {
        // Если код правильный, показываем квитанцию
        document.getElementById("confirmationCodeContainer").style.display = "none";
        document.getElementById("confirmationPanel").style.display = "block";

        // Отображение информации о транзакции
        const amount = document.getElementById("amount").value;
        const currency = document.getElementById("currency").value;

        document.getElementById("amountConfirmation").textContent = amount + " " + currency;
        document.getElementById("recipient").textContent = "Друг";
        document.getElementById("transactionTime").textContent = new Date().toLocaleString();
        document.getElementById("transactionIdValue").textContent = "TX1234567890";

        // Генерация QR-кода
        const qrCode = new QRCode(document.getElementById("qrCode"), {
            text: "http://example.com/transaction/1234567890", // Пример URL
            width: 128,
            height: 128,
        });
    } else {
        alert("Неверный код подтверждения.");
    }
});
