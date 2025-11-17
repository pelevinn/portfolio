const TOKEN = "8534493114:AAG5XG-Y63qIRAOagEYMskAKE5sjhDCUevI";
const CHAT_ID = "-1003393856854";
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let message = `
        <b>Новая заявка:</b>
        Имя: ${this.name.value}
        Сообщение: ${this.message.value}
    `;

    fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML"
        })
    }).then(() => {
        alert("Отправлено!");
        this.reset();
    }).catch(() => {
        alert("Ошибка отправки");
    });
});
