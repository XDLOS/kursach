document.querySelector('.contact_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения полей формы
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var paymentMethod = document.getElementById('subject');
    var game = document.getElementById('game');
    var deliveryAddress = document.getElementById('deliveryAddress');

    // Проверяем, заполнены ли все поля
    if (username.value && email.value && paymentMethod.value && game.value && deliveryAddress.value) {
        // Все поля заполнены, выводим уведомление

        // Проверяем поддержку уведомлений в браузере
        if (!("Notification" in window)) {
            alert("Ваш браузер не поддерживает уведомления");
        }
        // Проверяем разрешение на уведомления
        else if (Notification.permission === "granted") {
            showNotification();
        }
        // Запрашиваем разрешение на уведомления
        else if (Notification.permission !== "denied") {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    showNotification();
                }
            });
        }
    }
});

function showNotification() {
    // Создаем уведомление
    var notification = new Notification("Уведомление", {
        body: "Данные успешно отправлены. Ожидайте.",
        icon: "path/to/notification-icon.png" // Замените на путь к вашей иконке уведомления
    });

    // Закрываем уведомление через 3 секунды
    setTimeout(function() {
        notification.close();
    }, 3000);
}