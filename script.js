let confirmationCode = null;

document.getElementById("sendButton").addEventListener("click", function() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    // Генерация случайного кода подтверждения
    confirmationCode = Math.floor(100000 + Math.random() * 900000); // 6-значный код

    // Имитация отправки кода на телефон пользователя
    alert(`Код подтверждения отправлен на ваш телефон: ${confirmationCode}`);

    // Скрываем форму ввода данных и показываем форму ввода кода
    document.getElementById("formWindow").style.display = "none";
    document.getElementById("confirmationCodeContainer").style.display = "block";
});

document.getElementById("confirmCodeButton").addEventListener("click", function() {
    const inputCode = document.getElementById("confirmationCode").value;

    if (inputCode == confirmationCode) {
        // Имитация успешной транзакции
        document.getElementById("confirmationCodeContainer").style.display = "none";

        // Показываем прогресс-бар
        const progressBarContainer = document.querySelector(".progress-bar-container");
        progressBarContainer.style.display = "block";

        // Заполняем прогресс-бар
        setTimeout(function() {
            document.querySelector(".progress").style.width = "100%";
        }, 100);

        // Показываем квитанцию
        setTimeout(function() {
            document.getElementById("confirmationPanel").style.display = "block";
            document.getElementById("amountConfirmation").textContent = document.getElementById("amount").value;
            document.getElementById("recipient").textContent = "fnm04.sh";
            document.getElementById("transactionTime").textContent = new Date().toLocaleString();
            document.getElementById("transactionIdValue").textContent = "TXN123456789";

            // Генерация QR кода
            const qrCodeContainer = document.getElementById("qrCode");
            QRCode.toCanvas(qrCodeContainer, `TransactionID: TXN123456789\nAmount: ${document.getElementById("amount").value}`, function(error) {
                if (error) console.error(error);
            });
        }, 2000);
    } else {
        alert("Неверный код подтверждения");
    }
});
