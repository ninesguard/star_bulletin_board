//ninesguard
function startTime() {
    var today=new Date();
    var h=today.getHours();
	var pm=false;
	if (h >=12 ) {
		pm=true;
	}
	h = ampm(h);
    var m=today.getMinutes();
	var x=today.getMonth();
	var n=today.getDay();
	n = weekday(n);
	x = month(x);
    m = checkTime(m);
	document.getElementById('ampm').innerHTML = pmdot(pm);
    document.getElementById('clock').innerHTML = h+":"+m;
	document.getElementById('weekday').innerHTML = n;
	document.getElementById('month').innerHTML = x;
	document.getElementById('date').innerHTML = today.getDate();
	document.getElementById('year').innerHTML = today.getFullYear();
    var t = setTimeout(function(){startTime()},500);
}
function pmdot(pm) {
if (pm == true) {
return "pm";
}
else {
return "am";
}
}
function weekday(n) {
var days = new Array(7);
days[0]=  "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";
return days[n];
}
function month(x) {
var months = new Array(12);
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";
return months[x];
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function ampm(h) {
	if (h>12) {
		return h - 12;
	}
	if (h==0) {
		return 12;
	}
	else {
		return h;
	}
}
window.onload = startTime();