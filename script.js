let confirmationCode = null;

document.getElementById("sendButton").addEventListener("click", function () {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;
    
    confirmationCode = Math.floor(100000 + Math.random() * 900000); // Генерация кода подтверждения
    alert(`Код подтверждения отправлен на ваш телефон: ${confirmationCode}`);
    
    document.getElementById("formWindow").style.display = "none";
    document.getElementById("confirmationCodeContainer").style.display = "block";
});

document.getElementById("confirmCodeButton").addEventListener("click", function () {
    const inputCode = document.getElementById("confirmationCode").value;

    if (inputCode == confirmationCode) {
        const amount = document.getElementById("amount").value;
        const currency = document.getElementById("currency").value;
        const transactionId = Math.floor(100000 + Math.random() * 900000); // Генерация случайного номера транзакции

        document.getElementById("amountConfirmation").textContent = `${amount} ${currency}`;
        document.getElementById("recipient").textContent = "fnm04.sh";
        document.getElementById("transactionTime").textContent = new Date().toLocaleString();
        document.getElementById("transactionIdValue").textContent = transactionId;

        const transactionData = { amount, currency, transactionId };
        generateQRCode(transactionData);

        document.getElementById("confirmationCodeContainer").style.display = "none";
        document.getElementById("confirmationPanel").style.display = "block";
    } else {
        alert("Неверный код. Попробуйте снова.");
    }
});

function generateQRCode(data) {
    const qrContainer = document.getElementById('qrCode');
    qrContainer.innerHTML = ''; // Очистка контейнера перед новым QR-кодом
    new QRCode(qrContainer, {
        text: JSON.stringify(data),
        width: 128,
        height: 128
    });
}
