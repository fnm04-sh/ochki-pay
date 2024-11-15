document.getElementById("sendButton").addEventListener("click", function() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;
    
    if (amount && currency) {
        // Скрываем форму и показываем окно подтверждения
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("confirmation").style.display = "block";
        
        // Обновляем сообщение о подтверждении
        document.getElementById("message").textContent = `Деньги отправлены успешно: ${amount} ${currency}`;
        
        // Сбрасываем поля ввода
        document.getElementById("amount").value = "";
        document.getElementById("currency").value = "usd";
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});
