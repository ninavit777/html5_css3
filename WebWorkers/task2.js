//получив сообщение поток делает ответ.

addEventListener("message", function (e) {

	var  data = e.data;

	switch (data.cmd) {
	 case 'start':
	 	
	postMessage("ПОТОК ЗАПУЩЕН : " + data,msg); 
	break;
	case 'stop':
	postMessage("ПОТОК ОСТАНОВЛЕН : " + data,msg); 
	break;
	default:
	postMessage("НЕИЗВЕСТНАЯ  КОМАНДА : " + data,msg); 
	break;

}
}, true);