
function updater(d, h, m, s) {
  
  	var baseTime = new Date();

  	var day = baseTime.getDate(),
  		hour = baseTime.getHours(),
  		minute = baseTime.getMinutes(),
  		second = baseTime.getSeconds();

	var newDay = day + 1,
		newHour = hour,
		newMinute = minute - 52;

	baseTime.setDate(newDay);
	baseTime.setHours(newHour);
	baseTime.setMinutes(newMinute);
	baseTime.setSeconds(10);


  	var period = 24*60*60*1000;

  function update() {
    var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
  
    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
  }
  setTimeout(update, 0);
}

updater(document.getElementById("day"),
 document.getElementById("hour"), document.getElementById("minute"),
 document.getElementById("second"));