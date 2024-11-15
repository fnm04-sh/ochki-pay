// Функция для обработки клика по кнопке "Отправить"
function handleSendButtonClick() {
  // Получаем значения из полей
  const amount = document.getElementById("amount").value;
  const currency = document.getElementById("currency").value;

  // Если сумма и валюта введены, показываем успешное сообщение
  if (amount && currency) {
    // Показываем блок с подтверждением
    document.getElementById("confirmation").style.display = "block";

    // Заполняем текст сообщения в блоке подтверждения
    document.getElementById("message").textContent = "Деньги отправлены успешно";
    document.getElementById("extra-message").textContent = "Если ты видишь это сообщение, то знай, я выкрал твой айпи лол";
  } else {
    alert("Please enter an amount and select a currency.");
  }
}

// Инициализация обработчиков
document.getElementById("sendButton").addEventListener("click", handleSendButtonClick);
