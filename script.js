document.getElementById("sendButton").addEventListener("click", function() {
    // Get amount and selected currency
    let amount = document.getElementById("amount").value;
    let currency = document.getElementById("currency").value;

    // Check if the amount is valid
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    // Hide the form and show the confirmation message
    document.querySelector(".profile").style.display = "none";
    let confirmation = document.getElementById("confirmation");
    confirmation.style.display = "block";

    // Display the success message
    document.getElementById("message").textContent = Деньги отправлено успешно;
});
