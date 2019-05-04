let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let strSec;
let strMin;
let strHou;
let strDay;
setInterval(function() {
	let testSeconds = seconds + 1
	let testMinutes = minutes + 1
	let testHours = hours + 1
	let testDays = days + 1
	if(testSeconds === 61){
		seconds = 0;
		minutes += 1
	}
	if(testMinutes === 61){
		minutes = 0;
		hours += 1
	}
	if(testHours === 25){
		hours = 0;
		days += 1
	}
	seconds += 1
	if(seconds < 10){
		strSec = `0${seconds}`
	}
	if(minutes < 10){
		strMin = `0${minutes}`
	}
	if(hours < 10){
		strHou = `0${hours}`
	}
	if(days < 10){
		strDay = `0${days}`
	}
	if(days > 9){
		strDay = `${days}`
	}
	if(hours > 9){
		strHou = `${hours}`
	}
	if(minutes > 9){
		strMin = `${minutes}`
	}
	if(seconds > 9){
		strSec = `${seconds}`
	}
     console.log(`Время со старта скрипта:\n${strDay}:${strHou}:${strMin}:${strSec}\nДни:Часы:Минуты:Секунды`)
	
}, 1000);
