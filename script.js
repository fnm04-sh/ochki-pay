document.getElementById("sendButton").addEventListener("click", function() {
    // Получаем сумму и валюту из формы
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    // Генерируем случайный код подтверждения
    const confirmationCode = Math.floor(100000 + Math.random() * 900000); // 6-значный код

    // Имитация отправки кода на телефон пользователя
    alert(`Код подтверждения отправлен на ваш телефон: ${confirmationCode}`);

    // Скрываем форму ввода данных и показываем форму ввода кода
    document.getElementById("formWindow").style.display = "none";
    document.getElementById("confirmationCodeContainer").style.display = "block";

    // Анимация движения денег
    const moneyElement = document.getElementById("moneyMovement");
    moneyElement.innerText = `${amount} ${currency}`; // Отображаем сумму и валюту
    moneyElement.style.display = "block"; // Показываем элемент с деньгами

    // Запускаем анимацию перемещения денег
    moneyElement.style.animation = "moveMoney 2s ease-out forwards";

    // Через 2 секунды скрываем элемент с анимацией
    setTimeout(() => {
        moneyElement.style.display = "none";
    }, 2000);
});
