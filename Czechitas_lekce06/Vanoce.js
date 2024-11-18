document.addEventListener("DOMContentLoaded", function () {
    const messageElement = document.getElementById("message");
    const today = new Date();
    const startOfChristmasSeason = new Date(today.getFullYear(), 11, 1); // 1. prosince - měsíce začínají od 0
    const endOfChristmasSeason = new Date(today.getFullYear(), 11, 31); // 31. prosince

    if (today >= startOfChristmasSeason && today <= endOfChristmasSeason) {
        document.body.classList.add("christmas-background");
        messageElement.textContent = "Ano, už je vánoční čas!";
    } else {
        document.body.classList.add("neutral-background");
        messageElement.textContent = "Ne, ještě není vánoční čas.";
    }
});