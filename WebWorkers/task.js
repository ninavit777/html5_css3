//получив сообщение поток делает ответ.

addEventListener("message", function (e) {

	// продолжительные вычисления
	postMessage(e.data); // отправка данных основному потокую На странице будет вызвано событие message

}, true);