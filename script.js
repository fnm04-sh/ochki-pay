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

// Переменная для хранения языка
let currentLanguage = "ru"; // начальный язык

// Функция для смены языка
function changeLanguage(lang) {
  // Обновляем текстовые элементы на странице
  const texts = languages[lang];

  document.getElementById("label").textContent = texts.heading;
  document.getElementById("amountLabel").textContent = texts.amountLabel;
  document.getElementById("currencyLabel").textContent = texts.currencyLabel;
  document.getElementById("sendButton").textContent = texts.sendButton;

  // Сохраняем текущий язык для последующего использования
  currentLanguage = lang;
}

// Функция для обработки клика по кнопке "Отправить"
function handleSendButtonClick() {
  const amount = document.getElementById("amount").value;
  const currency = document.getElementById("currency").value;

  // Если сумма и валюта введены, показываем окно подтверждения
  if (amount && currency) {
    document.getElementById("confirmation").style.display = "block"; // Показываем окно подтверждения

    // Обновляем текст на языке, выбранном до отправки
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

// Инициализация
changeLanguage("ru"); // Устанавливаем начальный язык как русский

// Слушаем нажатие на кнопку отправки
document.getElementById("sendButton").addEventListener("click", handleSendButtonClick);
