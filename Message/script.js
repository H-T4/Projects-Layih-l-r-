const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function (event) {
    if (event.key == "Enter")
        getMEssage();
})

function getMEssage() {
    document.getElementById("message-output").
        innerHTML = messageInput.value;
    messageInput.value = "";

}