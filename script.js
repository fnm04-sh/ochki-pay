let confirmationCode = null;
let achievements = JSON.parse(localStorage.getItem("achievements")) || [];

// Обновление прогресс-бара
function updateProgress(step) {
    const progress = document.querySelector('.progress');
    const steps = 3;
    progress.style.width = `${(step / steps) * 100}%`;
}

// Добавление достижений
function addAchievement(text) {
    if (!achievements.includes(text)) {
        achievements.push(text);
        localStorage.setItem("achievements", JSON.stringify(achievements));
    }
    updateAchievements();
}

// Отображение достижений
function updateAchievements() {
    const achievementList = document.getElementById('achievementList');
    achievementList.innerHTML = '';
    achievements.forEach(ach => {
        const li = document.createElement('li');
        li.textContent = ach;
        achievementList.appendChild(li);
    });
    document.getElementById('achievements').style.display = 'block';
}

// Генерация QR-кода
function generateQRCode(data) {
    const qrContainer = document.getElementById('qrCode');
    qrContainer.innerHTML = ''; // Очищаем контейнер
    new QRCode(qrContainer, {
        text: JSON.stringify(data),
        width: 128,
        height: 128
    });
}

// Основной функционал
document.getElementById("sendButton").addEventListener("click", function () {
    confirmationCode = Math.floor(100000 + Math.random() * 900000);
    alert(`Код подтверждения отправлен: ${confirmationCode}`);
    updateProgress(1);
    addAchievement("Первая отправка!");
    document.getElementById("formWindow").style.display = "none";
    document.getElementById("confirmationCodeContainer").style.display = "block";
});

document.getElementById("confirmCodeButton").addEventListener("click", function () {
    const inputCode = document.getElementById("confirmationCode").value;
    if (inputCode == confirmationCode) {
        updateProgress(2);
        const amount = document.getElementById("amount").value;
        const currency = document.getElementById("currency").value;
        const transactionId = Math.floor(100000 + Math.random() * 900000);

        document.getElementById("amountConfirmation").textContent = `${amount} ${currency}`;
        document.getElementById("recipient").textContent = "fnm04.sh";
        document.getElementById("transactionTime").textContent = new Date().toLocaleString();
        document.getElementById("transactionIdValue").textContent = transactionId;

        const transactionData = { amount, currency, transactionId };
        generateQRCode(transactionData);
        addAchievement("Успешная транзакция!");

        document.getElementById("confirmationCodeContainer").style.display = "none";
        document.getElementById("confirmationPanel").style.display = "block";
    } else {
        alert("Неверный код. Попробуйте снова.");
    }
});

document.getElementById("copyButton").addEventListener("click", function () {
    const transactionId = document.getElementById("transactionIdValue").textContent;
    navigator.clipboard.writeText(transactionId).then(() => alert("Номер транзакции скопирован!"));
});
