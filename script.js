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
}

// Слушаем изменения в селекторе языка
document.getElementById("language").addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  changeLanguage(selectedLanguage);
});

// Устанавливаем начальный язык (например, русский)
changeLanguage("ru");
