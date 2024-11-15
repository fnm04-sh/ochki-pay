let confirmationCode = null;

document.getElementById("sendButton").addEventListener("click", function() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    confirmationCode = Math.floor(100000 + Math.random() * 900000); // 6-значный код

    alert(`Код подтверждения отправлен на ваш телефон: ${confirmationCode}`);

    document.getElementById("formWindow").style.display = "none";
    document.getElementById("confirmationCodeContainer").style.display = "block";
});

document.getElementById("confirmCodeButton").addEventListener("click", function() {
    const enteredCode = document.getElementById("confirmationCode").value;

    if (enteredCode == confirmationCode) {
        document.getElementById("confirmationCodeContainer").style.display = "none";
        document.getElementById("confirmationPanel").style.display = "block";
        
        const amount = document.getElementById("amount").value;
        const currency = document.getElementById("currency").value;
        const transactionTime = new Date().toLocaleString();
        const transactionId = "TXN" + Math.floor(Math.random() * 1000000);
        
        document.getElementById("amountConfirmation").innerText = `${amount} ${currency}`;
        document.getElementById("recipient").innerText = "fnm04.sh";
        document.getElementById("transactionTime").innerText = transactionTime;
        document.getElementById("transactionIdValue").innerText = transactionId;
    } else {
        alert("Неверный код подтверждения.");
    }
});
