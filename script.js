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

// Переменная для хранения языка сообщения
let currentLanguage = "ru";

// Функция для смены языка
function changeLanguage(lang) {
  // Сохраняем текущий язык перед изменением
  const texts = languages[lang];

  // Обновляем все текстовые элементы на странице
  document.getElementById("label").textContent = texts.heading;
  document.getElementById("amountLabel").textContent = texts.amountLabel;
  document.getElementById("currencyLabel").textContent = texts.currencyLabel;
  document.getElementById("sendButton").textContent = texts.sendButton;

  // Сохраняем текущий язык (не меняем текст подтверждения)
  if (document.getElementById("confirmation").style.display !== "block") {
    currentLanguage = lang;
  }
}

// Функция для обработки клика по кнопке "Отправить"
function handleSendButtonClick() {
  // Получаем значения из полей
  const amount = document.getElementById("amount").value;
  const currency = document.getElementById("currency").value;

  // Если сумма введена, показываем успешное сообщение
  if (amount && currency) {
    // Показываем блок с подтверждением
    document.getElementById("confirmation").style.display = "block";

    // Используем язык, который был до отправки
    const texts = languages[currentLanguage];
    document.getElementById("message").textContent = texts.confirmationMessage;
    document.getElementById("extra-message").textContent = texts.extraMessage;
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
