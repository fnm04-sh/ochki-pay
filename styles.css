* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(145deg, #121212, #4CAF50);
    color: #E0E0E0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding-top: 70px;
}

h1 {
    color: #FFFFFF;
    margin-bottom: 20px;
    text-align: center;
    font-size: 32px;
    animation: fadeIn 1s ease-in-out;
}

.container {
    text-align: center;
    background: #292929;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    width: 400px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: slideIn 1s ease-out;
}

/* Окно с данными профиля */
.profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    border: 4px solid #4CAF50;
    animation: zoomIn 1s ease-in-out;
}

.profile-img:hover {
    transform: scale(1.1);
}

.form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    display: block;
    margin: 10px 0 5px;
    font-size: 14px;
    color: #E0E0E0;
}

input[type="number"], select {
    width: 80%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #4CAF50;
    border-radius: 4px;
    background-color: #292929;
    color: #E0E0E0;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

input[type="number"]:focus, select:focus {
    background-color: #4CAF50;
    outline: none;
}

button {
    width: 80%;
    padding: 10px;
    margin-top: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #367d38;
}

.confirmationCodeContainer, .confirmation-panel {
    display: none;
    text-align: center;
    background-color: #292929;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1s ease-in-out;
}

.confirmation-panel {
    background: linear-gradient(145deg, #1F1F1F, #4CAF50);
    color: #E0E0E0;
}

.confirmation-panel h2 {
    margin-bottom: 20px;
}

/* Центрирование окон по вертикали и горизонтали */
.centered-window {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

/* Анимация для элементов с деньгами */
.money-movement {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: #4CAF50;
    display: none;
    animation: moveMoney 2s ease-out forwards;
}

/* Анимация для перемещения денег */
@keyframes moveMoney {
    0% {
        transform: translate(-50%, -50%) scale(1);
    }
    100% {
        transform: translate(80%, -50%) scale(0.5);
        opacity: 0;
    }
}

/* Анимации для появления и движения элементов */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes slideIn {
    0% {
        transform: translateY(50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Анимация для увеличения изображения профиля */
@keyframes zoomIn {
    0% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1);
    }
}
