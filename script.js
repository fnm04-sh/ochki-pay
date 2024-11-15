document.getElementById('sendButton').addEventListener('click', function() {
    // Получаем значения из полей ввода
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    // Проверяем, чтобы сумма была введена
    if (amount && currency) {
        // Скрываем форму отправки
        document.querySelector('.form-container').style.display = 'none';
        
        // Показываем окно подтверждения
        document.getElementById('confirmation').style.display = 'block';

        // Обновляем сообщение в окне подтверждения
        document.getElementById('message').innerText = `Деньги отправлены успешно. Сумма: ${amount} ${currency}`;
        document.getElementById('ip-warning').innerText = "Если ты видишь это сообщение, знай — я выкрал твой айпи лол.";
    } else {
        alert('Пожалуйста, введите сумму и выберите валюту.');
    }
});
