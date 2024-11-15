document.getElementById('sendButton').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    if (amount && currency) {
        // Скрываем форму
        document.querySelector('.form-container').style.display = 'none';
        document.querySelector('.profile-img').style.display = 'none'; // Скрыть аватарку

        // Показываем окно подтверждения
        document.getElementById('confirmation').style.display = 'block';

        // Обновляем сообщение в окне подтверждения
        document.getElementById('message').innerText = `Деньги отправлены успешно. Сумма: ${amount} ${currency}`;
        document.getElementById('ip-warning').innerText = "Если ты видишь это сообщение, знай — я выкрал твой айпи лол.";
    } else {
        alert('Пожалуйста, введите сумму и выберите валюту.');
    }
});
