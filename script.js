// Переключение окон
document.getElementById('sendButton').addEventListener('click', function() {
    // Получаем данные из формы
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    
    if (amount && currency) {
        // Переключаем на окно с кодом подтверждения
        document.getElementById('containerForm').style.display = 'none';
        document.getElementById('confirmationCodeContainer').style.display = 'block';
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

document.getElementById('confirmButton').addEventListener('click', function() {
    const confirmationCode = document.getElementById('confirmationCode').value;
    
    // Проверка введенного кода
    if (confirmationCode === '123456') {
        // Переключаем на окно с квитанцией
        document.getElementById('confirmationCodeContainer').style.display = 'none';
        document.getElementById('confirmationPanel').style.display = 'block';
        
        // Получаем текущие данные для квитанции
        const amount = document.getElementById('amount').value;
        const currency = document.getElementById('currency').value;
        const currentTime = new Date().toLocaleString();
        const transactionId = Math.floor(100000 + Math.random() * 900000);  // Генерация случайного номера транзакции
        
        // Заполняем квитанцию
        document.getElementById('recipient').innerText = 'fnm04.sh';
        document.getElementById('transactionTime').innerText = currentTime;
        document.getElementById('transactionIdValue').innerText = transactionId;
        document.getElementById('amountConfirmation').innerText = `${amount} ${currency}`;
    } else {
        alert('Неверный код подтверждения!');
    }
});

document.getElementById('backButton').addEventListener('click', function() {
    // Возвращаемся к первой форме
    document.getElementById('confirmationPanel').style.display = 'none';
    document.getElementById('containerForm').style.display = 'block';
});
