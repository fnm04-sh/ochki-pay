// Объект с текстами для разных языков
const languages = {
  en: {
    heading: "OchkiPay - Secure method of sending money",
    amountLabel: "Amount:",
    currencyLabel: "Currency:",
    sendButton: "Send",
    confirmationMessage: "Money sent successfully",
    extraMessage: "If you see this message, know that I have stolen your IP lol",
  },
  ru: {
    heading: "OchkiPay - Безопасный метод отправки денег",
    amountLabel: "Сумма:",
    currencyLabel: "Валюта:",
    sendButton: "Отправить",
    confirmationMessage: "Деньги отправлены успешно",
    extraMessage: "Если ты видишь это сообщение, то знай, я выкрал твой айпи лол",
  }
};

// Функция для смены языка
function changeLanguage(lang) {
  const texts = languages[lang];

  // Обновляем все текстовые элементы на странице
  document.getElementById("label").textContent = texts.heading;
  document.getElementById("amountLabel").textContent = texts.amountLabel;
  document.getElementById("currencyLabel").textContent = texts.currencyLabel;
  document.getElementById("sendButton").textContent = texts.sendButton;
  document.getElementById("message").textContent = texts.confirmationMessage;
  document.getElementById("extra-message").textContent = texts.extraMessage;

  // После смены текста кнопки необходимо заново привязать обработчик события
  const sendButton = document.getElementById("sendButton");
  sendButton.removeEventListener("click", handleSendButtonClick);  // Удаляем старый обработчик
  sendButton.addEventListener("click", handleSendButtonClick);      // Добавляем новый обработчик
}

// Функция для обработки клика по кнопке "Отправить"
function handleSendButtonClick() {
  // Получаем значения из полей
  const amount = document.getElementById("amount").value;
  const currency = document.getElementById("currency").value;

  // Если сумма введена, показываем успешное сообщение
  if (amount && currency) {
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("message").textContent = "Money sent successfully";  // Вставляем сообщение
    document.getElementById("extra-message").textContent = "If you see this message, know that I have stolen your IP lol";  // Дополнительное сообщение
  } else {
    alert("Please enter an amount and select a currency.");
  }
}

// Слушаем изменения в селекторе языка
document.getElementById("language").addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  changeLanguage(selectedLanguage);
});

// Устанавливаем начальный язык (например, русский)
changeLanguage("ru");

// Инициализируем обработчик кнопки сразу после загрузки страницы
document.getElementById("sendButton").addEventListener("click", handleSendButtonClick);
